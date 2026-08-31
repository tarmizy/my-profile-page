import CONFIG from '../shared/data';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function DesktopProcess() {
  return (
    <section id="proses" className="page-panel page-panel-process" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <MotionReveal className="section-head">
          
          <h2 className="title">Dari ide ke produk yang siap dipakai</h2>
        </MotionReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {CONFIG.process.map((p, i) => (
            <MotionCard key={i} delay={i * 0.08} className="card" style={{ padding: '20px 18px' }}>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.4px rgba(59,130,246,.7)' }}>
                {p.step}
              </div>
              <h4 style={{ marginTop: 8, fontSize: '.92rem', fontWeight: 700 }}>{p.title}</h4>
              <p style={{ marginTop: 6, fontSize: '.78rem', color: '#9ba3c4', lineHeight: 1.6 }}>{p.desc}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
