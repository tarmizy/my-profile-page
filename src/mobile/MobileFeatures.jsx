import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function MobileFeatures() {
  return <section id="fitur" className="page-panel page-panel-features" style={{ padding: '50px 16px', background: '#080a16' }}><MotionReveal className="section-head"><h2 className="title">Stack siap production</h2><p className="subtitle">Fondasi yang cepat, aman, dan fleksibel saat produk Anda bertumbuh.</p></MotionReveal><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 420, margin: '0 auto' }}>{CONFIG.techStack.map((item, i) => <MotionCard key={item.title} delay={i * 0.05} className="card" style={{ padding: '16px 12px' }}><Icon name={item.icon} size={17} /><h4 style={{ marginTop: 10, fontSize: '.8rem', fontWeight: 700 }}>{item.title}</h4><p style={{ marginTop: 4, fontSize: '.7rem', color: '#9ba3c4', lineHeight: 1.4 }}>{item.desc}</p></MotionCard>)}</div></section>;
}
