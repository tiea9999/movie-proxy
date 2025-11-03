export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send('Missing URL');
  }

  try {
    const response = await fetch(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const contentType = response.headers.get('content-type');
    res.setHeader('content-type', contentType);
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send('Error fetching stream: ' + err.message);
  }
}
