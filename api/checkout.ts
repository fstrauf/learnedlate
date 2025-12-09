import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
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
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = process.env.STRIPE_PRICE_ID;
    const { coupon } = req.body;

    if (!secretKey) {
      return res.status(500).json({ error: 'STRIPE_SECRET_KEY not set' });
    }

    if (!priceId) {
      return res.status(500).json({ error: 'STRIPE_PRICE_ID not set' });
    }

    const stripe = new Stripe(secretKey);

    const sessionConfig: any = {
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin || 'http://localhost:5173'}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'http://localhost:5173'}/checkout-cancel`,
      allow_promotion_codes: true, // Enable discount code field on Stripe Checkout
    };

    // Add coupon if provided
    if (coupon) {
      sessionConfig.discounts = [{ coupon }];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: error.message });
  }
}
