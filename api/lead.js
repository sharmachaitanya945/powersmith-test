// Server-side lead proxy for the solar calculator.
//
// The browser POSTs the lead to this same-origin endpoint (/api/lead) instead of
// calling GoHighLevel directly. Posting to our own domain avoids CORS entirely and
// — just as important — dodges ad-blockers / tracking-protection (Brave, uBlock,
// Safari ITP) that silently block requests to leadconnectorhq.com, which is the
// usual reason a browser-side webhook "never arrives". From the server there are no
// browser restrictions, so the forward to GHL is reliable.
//
// Override the destination without a code change via the GHL_SOLARCALC_WEBHOOK_URL
// environment variable in Vercel.
const GHL_WEBHOOK =
  process.env.GHL_SOLARCALC_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/fxuEae04COCflR3L5lfh/webhook-trigger/c06c1c06-974f-496e-ac21-690b46d79218'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    // Vercel parses JSON bodies automatically, but be defensive if it arrives raw.
    const payload =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}

    const ghlRes = await fetch(GHL_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const text = await ghlRes.text()
    return res.status(ghlRes.ok ? 200 : 502).json({
      ok: ghlRes.ok,
      forwardedStatus: ghlRes.status,
      ghl: text.slice(0, 300),
    })
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) })
  }
}
