import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// @ts-ignore - TypeScript version mismatch in Vercel CLI
const resend = new Resend(process.env.RESEND_API_KEY)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', headers: corsHeaders })
  }

  try {
    const { email, magnetId, magnetName, source } = req.body

    if (!email || !magnetId || !magnetName) {
      return res.status(400).json({ 
        error: 'Missing required fields: email, magnetId, magnetName',
        headers: corsHeaders 
      })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        headers: corsHeaders 
      })
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'florian@main.learnedlate.com'
    const toEmail = process.env.CONTACT_TO_EMAIL || 'florian@learnedlate.com'
    const siteUrl = process.env.SITE_URL || 'https://www.learnedlate.com'

    // Determine download URL based on magnet
    let downloadUrl = `${siteUrl}/ai-readiness-checklist.pdf`
    if (magnetId === 'ai-readiness-checklist') {
      downloadUrl = `${siteUrl}/ai-readiness-checklist.pdf`
    }

    // Send notification email to admin
    await resend.emails.send({
      from: `LearnedLate <${fromEmail}>`,
      to: [toEmail],
      subject: `New Lead Magnet Download: ${magnetName}`,
      html: `
        <h2>New Lead Magnet Signup</h2>
        <p><strong>Magnet:</strong> ${magnetName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source || 'website'}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <hr/>
        <p>You may want to follow up with this lead.</p>
      `,
      text: `New Lead Magnet Signup

Magnet: ${magnetName}
Email: ${email}
Source: ${source || 'website'}
Time: ${new Date().toISOString()}

You may want to follow up with this lead.`,
    }).catch(err => console.error('[Admin Notification Error]', err))

    // Send email with download link to subscriber
    const { data, error } = await resend.emails.send({
      from: `LearnedLate <${fromEmail}>`,
      to: [email],
      subject: `Your ${magnetName} is ready`,
      html: `
        <h2>Thanks for downloading the ${magnetName}!</h2>
        <p>Hi there,</p>
        <p>Thanks for your interest in LearnedLate. Here's your download link:</p>
        <p><a href="${downloadUrl}" style="background: #d97706; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Download ${magnetName}</a></p>
        <p>Or copy this URL: ${downloadUrl}</p>
        <hr/>
        <p>Want to discuss your AI readiness? <a href="${siteUrl}/contact">Book a free 30-minute assessment</a>.</p>
        <p>— The LearnedLate Team</p>
      `,
      text: `
Thanks for downloading the ${magnetName}!

Hi there,

Thanks for your interest in LearnedLate. Here's your download link:

${downloadUrl}

Want to discuss your AI readiness? Book a free 30-minute assessment at ${siteUrl}/contact

— The LearnedLate Team
      `,
    })

    if (error) {
      console.error('[Resend Error]', error)
      // Still return success to user, but log the error
    }

    console.log('[Lead Magnet Signup]', {
      email,
      magnetId,
      magnetName,
      source: source || 'website',
      messageId: data?.id,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      headers: corsHeaders,
    })

  } catch (error) {
    console.error('[Lead Magnet Error]', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      headers: corsHeaders 
    })
  }
}
