import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setStatus(json.status || "OK");
      } catch (err) {
        if (mounted) setStatus(`Error: ${err.message}`);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, [API_BASE]);

  return (
    <main>
      <h1>VibeStream</h1>
      <p>Welcome to the VibeStream web app.</p>

      <section>
        <h2>Backend status</h2>
        {loading ? <p>Checking backend…</p> : <p>{status}</p>}
      </section>
    </main>
  );
}
