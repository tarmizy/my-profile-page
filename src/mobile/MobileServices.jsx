import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function MobileServices() {
  return (
    <section id="layanan" className="page-panel page-panel-services" style={{ padding: '50px 16px' }}>
      <MotionReveal className="section-head"><div className="eyebrow">CAPABILITY / 01</div><h2 className="title">Digital products yang terasa premium</h2><p className="subtitle">Web3D, aplikasi operasional, dan deployment dalam satu pengalaman digital yang utuh.</p></MotionReveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 420, margin: '0 auto' }}>
        {CONFIG.services.map((service, i) => <MotionCard key={service.title} delay={i * 0.07} className="card" style={{ padding: '22px 18px', borderTop: `2px solid ${['#4dd4ac', '#62a8ff', '#f6c453', '#f47aa7'][i]}` }}><div style={{ width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', marginBottom: 12 }}><Icon name={service.icon} size={20} /></div><h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{service.title}</h3><p style={{ fontSize: '.82rem', color: '#9ba3c4', lineHeight: 1.6, marginBottom: 10 }}>{service.desc}</p><ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>{service.bullets.map(item => <li key={item} style={{ fontSize: '.78rem', color: '#dfe4ff', display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4dd4ac', flexShrink: 0 }} />{item}</li>)}</ul></MotionCard>)}
      </div>
    </section>
  );
}
