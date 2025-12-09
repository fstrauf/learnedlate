import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sessionId } = req.body;
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY not set' });
    }

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID required' });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === 'paid') {
      // Serve ZIP file directly from public folder
      const downloadUrl = `${req.headers.origin || 'http://localhost:5173'}/seo-automation-package.zip`;

      return res.status(200).json({
        status: 'paid',
        downloadUrl,
        customerEmail: session.customer_email,
      });
    } else {
      return res.status(200).json({
        status: 'unpaid',
      });
    }
  } catch (error: any) {
    console.error('Verification error:', error);
    return res.status(500).json({ error: error.message });
  }
}
