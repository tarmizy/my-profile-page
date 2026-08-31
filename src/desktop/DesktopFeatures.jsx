import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function DesktopFeatures() {
  return <section id="fitur" className="page-panel page-panel-features" style={{ padding: '72px 32px', background: '#080a16' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}><MotionReveal className="section-head"><h2 className="title">Stack yang siap dibawa ke production</h2><p className="subtitle">Teknologi dipilih berdasarkan kebutuhan produk: cepat, mudah dirawat, aman, dan tetap fleksibel saat bisnis bertumbuh.</p></MotionReveal><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>{CONFIG.techStack.map((item, i) => <MotionCard key={item.title} delay={i * 0.05} className="card" style={{ padding: '20px 16px' }}><Icon name={item.icon} size={20} /><h4 style={{ marginTop: 14, fontSize: '.87rem', fontWeight: 700 }}>{item.title}</h4><p style={{ marginTop: 5, fontSize: '.76rem', color: '#9ba3c4', lineHeight: 1.55 }}>{item.desc}</p></MotionCard>)}</div></div></section>;
}
