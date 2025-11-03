import fetch from "node-fetch";

export default async function handler(req, res) {
  const target = "http://6395online.ddns.net:8080/memfs/494a9a37-45e9-40ae-9f73-1489994ab2c3_output_0.m3u8?session=8WT5kHZY9oJqfT4b8DJgAD";
  try {
    const response = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) throw new Error("Failed to fetch source stream");

    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Proxy Error: " + err.message);
  }
}
