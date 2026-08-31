import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function DesktopServices() {
  return (
    <section id="layanan" className="page-panel page-panel-services" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <MotionReveal className="section-head">
          <div className="eyebrow">CAPABILITY / 01</div>
          <h2 className="title">Digital products yang terasa premium</h2>
          <p className="subtitle">Web3D, aplikasi operasional, dan deployment yang dirancang sebagai satu pengalaman digital yang utuh.</p>
        </MotionReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {CONFIG.services.map((service, i) => (
            <MotionCard key={service.title} delay={i * 0.07} className="card" style={{ padding: '24px 20px', minHeight: 300, borderTop: `2px solid ${['#4dd4ac', '#62a8ff', '#f6c453', '#f47aa7'][i]}` }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', marginBottom: 18 }}><Icon name={service.icon} size={21} /></div>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 700, lineHeight: 1.25 }}>{service.title}</h3>
              <p style={{ fontSize: '.82rem', color: '#9ba3c4', lineHeight: 1.65, margin: '10px 0 16px' }}>{service.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>{service.bullets.map(item => <li key={item} style={{ fontSize: '.77rem', color: '#dfe4ff', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4dd4ac', flexShrink: 0 }} />{item}</li>)}</ul>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
