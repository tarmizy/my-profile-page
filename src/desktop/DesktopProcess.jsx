import CONFIG from '../shared/data';

export default function DesktopProcess() {
  return (
    <section id="proses" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head reveal">
          
          <h2 className="title">Proses yang jelas, tanpa bikin Anda bingung</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {CONFIG.process.map((p, i) => (
            <div key={i} className="card reveal" style={{ padding: '20px 18px' }}>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.4px rgba(59,130,246,.7)' }}>
                {p.step}
              </div>
              <h4 style={{ marginTop: 8, fontSize: '.92rem', fontWeight: 700 }}>{p.title}</h4>
              <p style={{ marginTop: 6, fontSize: '.78rem', color: '#9ba3c4', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
