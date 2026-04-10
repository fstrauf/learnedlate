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
    const { name, email, company, message, source = 'website' } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, message',
        headers: corsHeaders 
      })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        headers: corsHeaders 
      })
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'florian@learnedlate.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'florian@learnedlate.com'

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `LearnedLate Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Source:</strong> ${source}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Source: ${source}

Message:
${message}
      `,
    })

    if (error) {
      console.error('[Resend Error]', error)
      return res.status(500).json({ 
        error: 'Failed to send email',
        headers: corsHeaders 
      })
    }

    console.log('[Contact Form Sent]', {
      name,
      email,
      company,
      source,
      messageId: data?.id,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      headers: corsHeaders,
    })

  } catch (error) {
    console.error('[Contact Form Error]', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      headers: corsHeaders 
    })
  }
}
