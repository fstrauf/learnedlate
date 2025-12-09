import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sessionId = req.query.sessionId as string;
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY not set' });
    }

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID required' });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(403).json({ error: 'Payment not completed' });
    }

    // Return public URL for direct download
    // File is hosted at /public/seo-automation-package.zip
    const downloadUrl = `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/seo-automation-package.zip`;
    
    return res.status(200).json({
      downloadUrl,
      customerEmail: session.customer_email,
    });
  } catch (error: any) {
    console.error('Download error:', error);
    return res.status(500).json({ error: error.message });
  }
}
