import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

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

    // Serve the ZIP file from public folder
    const filePath = path.join(process.cwd(), 'public', 'seo-automation-package.zip');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Download file not found' });
    }

    // Set proper headers for file download
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="seo-automation-package.zip"');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error: any) {
    console.error('Download error:', error);
    return res.status(500).json({ error: error.message });
  }
}
