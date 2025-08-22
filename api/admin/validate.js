import 'dotenv/config'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { password } = req.body
    
    if (!password) {
      return res.status(400).json({ valid: false, error: 'Password is required' })
    }
    
    // Log authentication attempt without exposing credentials
    console.log('Admin authentication attempt')
    
    const isValid = password === process.env.ADMIN_PASSWORD
    res.status(200).json({ valid: isValid })
  } catch (error) {
    console.error('Error validating admin password:', error)
    res.status(500).json({ valid: false, error: 'Server error' })
  }
}