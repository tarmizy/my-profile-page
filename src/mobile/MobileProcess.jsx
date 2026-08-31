import CONFIG from '../shared/data';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function MobileProcess() {
  return (
    <section id="proses" className="page-panel page-panel-process" style={{ padding: '50px 16px' }}>
      <MotionReveal className="section-head">
        
        <div className="eyebrow">WORKFLOW / 03</div>
        <h2 className="title">Dari ide ke produk siap dipakai</h2>
      </MotionReveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 420, margin: '0 auto' }}>
        {CONFIG.process.map((p, i) => (
          <MotionCard key={i} delay={i * 0.08} className="card" style={{ padding: '16px 14px' }}>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.3rem', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1.2px rgba(59,130,246,.7)' }}>
              {p.step}
            </div>
            <h4 style={{ fontSize: '.84rem', fontWeight: 700, marginTop: 6 }}>{p.title}</h4>
            <p style={{ fontSize: '.72rem', color: '#9ba3c4', lineHeight: 1.5, marginTop: 4 }}>{p.desc}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
