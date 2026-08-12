import CONFIG from '../shared/data';

export default function MobileProcess() {
  return (
    <section id="proses" style={{ padding: '50px 16px' }}>
      <div className="section-head reveal">
        
        <h2 className="title">Proses yang jelas</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 420, margin: '0 auto' }}>
        {CONFIG.process.map((p, i) => (
          <div key={i} className="card reveal" style={{ padding: '16px 14px' }}>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.2px rgba(59,130,246,.7)' }}>
              {p.step}
            </div>
            <h4 style={{ fontSize: '.84rem', fontWeight: 700, marginTop: 6 }}>{p.title}</h4>
            <p style={{ fontSize: '.72rem', color: '#9ba3c4', lineHeight: 1.5, marginTop: 4 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
