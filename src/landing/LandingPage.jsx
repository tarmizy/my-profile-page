import { useState } from 'react';
import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { getWaLink, getMailLink } from '../shared/utils';
import Estimator from './Estimator';

const NAV = [
  ['Layanan', 'layanan'], ['Portfolio', 'portfolio'], ['Cara Kerja', 'proses'],
  ['Estimasi Biaya', 'kalkulator'], ['FAQ', 'faq'],
];

const QUESTIONS = [
  { q: 'Apakah konsultasi awal berbayar?', a: 'Tidak. Anda dapat menjelaskan ide, alur kerja, dan target proyek terlebih dahulu secara gratis. Setelah kebutuhan dipahami, saya akan menyusun scope, jadwal, dan penawaran tertulis.' },
  { q: 'Apakah angka dari kalkulator adalah harga final?', a: 'Bukan. Kalkulator memberikan simulasi rentang investasi dengan asumsi umum. Harga final ditentukan oleh kebutuhan detail, integrasi, desain, sumber data, dan hasil diskusi bersama.' },
  { q: 'Apakah website dan aplikasi bisa dibuka di HP?', a: 'Ya. Antarmuka dirancang responsif untuk mobile dan desktop. Untuk kebutuhan aplikasi yang bisa di-install, kita dapat membahas PWA atau aplikasi mobile khusus.' },
  { q: 'Bisakah membuat proyek secara bertahap?', a: 'Bisa. Kita dapat menyusun MVP atau fase pertama yang mencakup fitur terpenting, lalu menambahkan modul berikutnya sesuai prioritas dan anggaran.' },
  { q: 'Bagaimana setelah aplikasi selesai?', a: 'Proyek diserahkan dengan panduan penggunaan dan proses handover. Ruang lingkup dukungan, perbaikan bug, hosting, serta maintenance disepakati dengan jelas dalam penawaran.' },
];

function Brand() {
  return <a className="brand" href="#beranda" aria-label="Codday996 Solutions - ke beranda"><img src="/logo.png" alt="" width="38" height="38" /><span>codday<span className="brand-accent">996</span><small>SOFTWARE SOLUTIONS</small></span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="site-nav" aria-label="Navigasi utama">
    <div className="container nav-inner">
      <Brand />
      <div className="desktop-nav">{NAV.map(([label, id]) => <a key={id} href={'#' + id}>{label}</a>)}</div>
      <a className="button button-primary nav-cta" href={getWaLink()} target="_blank" rel="noopener noreferrer">Konsultasi gratis <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
    </div>
    {open && <div id="mobile-menu" className="mobile-menu">{NAV.map(([label, id]) => <a href={'#' + id} key={id} onClick={() => setOpen(false)}>{label} <span>↗</span></a>)}<a href={getWaLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Konsultasi WhatsApp ↗</a></div>}
  </nav>;
}

function Hero() {
  return <header className="hero" id="beranda">
    <div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <div className="hero-availability"><span className="availability-dot" /> PENGEMBANGAN WEBSITE & APLIKASI CUSTOM</div>
        <h1>Ide bisnis Anda.<br /><span>Jadi sistem digital</span><br />yang benar-benar bekerja.</h1>
        <p>Website profesional, aplikasi operasional, dan dashboard custom yang memudahkan kerja tim dan membantu bisnis bertumbuh. Dirancang rapi, mudah digunakan, dan nyaman di setiap perangkat.</p>
        <div className="hero-actions"><a className="button button-primary button-large" href="#kalkulator">Hitung estimasi biaya <span aria-hidden="true">↗</span></a><a className="button button-outline button-large" href="#portfolio">Lihat hasil pekerjaan <span aria-hidden="true">→</span></a></div>
        <div className="hero-assurances"><span><Icon name="check" size={16} /> Konsultasi awal gratis</span><span><Icon name="check" size={16} /> Scope & biaya transparan</span><span><Icon name="check" size={16} /> Mobile-friendly</span></div>
      </div>
      <div className="hero-visual" aria-label="Cuplikan antarmuka proyek yang telah dibuat">
        <div className="hero-browser">
          <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><span>PROJECT SHOWCASE / MDNET</span><Icon name="shield" size={14} /></div>
          <div className="browser-screen"><img src="/mdnet-desktop.png" alt="Cuplikan dashboard MDNet untuk pengelolaan pelanggan dan operasional WiFi" fetchPriority="high" /></div>
          <div className="browser-foot"><span><span className="live-dot" /> Project showcase</span><span>01 / 06</span></div>
        </div>
        <div className="floating-proof"><span className="proof-icon"><Icon name="globe" size={23} /></span><span><strong>6 proyek di portfolio</strong><small>Dengan cuplikan dan tautan demo</small></span></div>
        <div className="visual-outline" aria-hidden="true" />
      </div>
    </div>
    <div className="container hero-bottom"><span>BUILD WITH PURPOSE. SHIP WITH CONFIDENCE.</span><a href="#layanan">JELAJAHI LAYANAN <span>↓</span></a></div>
  </header>;
}

function SectionLabel({ children }) { return <span className="eyebrow"><span className="eyebrow-line" /> {children}</span>; }

function Services() {
  return <section className="section section-services" id="layanan"><div className="container">
    <div className="section-heading"><div><SectionLabel>APA YANG BISA SAYA BANTU</SectionLabel><h2>Solusi digital untuk <em>kebutuhan nyata.</em></h2></div><p>Tidak hanya bagus dilihat. Setiap produk dirancang untuk menyelesaikan masalah dan mempermudah pekerjaan sehari-hari.</p></div>
    <div className="services-grid">{CONFIG.services.map((s, i) => <article className="service-card" key={s.title}><div className="service-top"><div className="service-icon"><Icon name={s.icon} size={28} /></div><span>0{i + 1} / 04</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-tags">{s.bullets.map(b => <span key={b}>{b}</span>)}</div></article>)}</div>
  </div></section>;
}

function Portfolio() {
  const [selected, setSelected] = useState(0);
  const project = CONFIG.projects[selected];
  return <section className="section portfolio-section" id="portfolio"><div className="container">
    <div className="section-heading"><div><SectionLabel>SELECTED WORK / PORTFOLIO</SectionLabel><h2>Bukan sekadar janji.<br /><em>Lihat hasilnya.</em></h2></div><p>Beberapa proyek yang telah dibuat, mulai dari sistem operasional sampai website promosi. Pilih untuk melihat cuplikan dan buka demo yang tersedia.</p></div>
    <div className="portfolio-layout">
      <div className="portfolio-tabs" role="tablist" aria-label="Pilih proyek">{CONFIG.projects.map((item, i) => <button key={item.name} id={'project-tab-' + i} role="tab" aria-selected={selected === i} aria-controls="project-display" tabIndex={selected === i ? 0 : -1} className={'portfolio-tab' + (i === selected ? ' active' : '')} onClick={() => setSelected(i)}><span className="project-index">{String(i + 1).padStart(2, '0')}</span><span><strong>{item.name}</strong><small>{item.tag}</small></span><span className="project-arrow">↗</span></button>)}</div>
      <div className="portfolio-display" id="project-display" role="tabpanel" aria-labelledby={'project-tab-' + selected} key={project.name}>
        <div className="portfolio-image-wrap"><img src={project.shotDesktop} alt={'Cuplikan antarmuka ' + project.name} loading="lazy" /><span className="project-demo-label"><span className="live-dot" /> PROJECT PREVIEW</span></div>
        <div className="portfolio-description"><div><span className="portfolio-category">{project.tag}</span><h3>{project.name}</h3><p>{project.shortDesc}</p></div><a href={project.url} className="button button-outline" target="_blank" rel="noopener noreferrer">Buka demo <span>↗</span></a></div>
        <div className="project-feature-row">{project.features.slice(0,3).map(feature => <span key={feature}><Icon name="check" size={14} /> {feature}</span>)}</div>
      </div>
    </div>
    <p className="portfolio-footnote">Demo merupakan contoh hasil pengembangan. Ketersediaan akses dan fitur bergantung pada masing-masing proyek.</p>
  </div></section>;
}

function Process() {
  return <section className="section process-section" id="proses"><div className="container">
    <div className="section-heading"><div><SectionLabel>CARA KERJA</SectionLabel><h2>Dari ide sampai online,<br /><em>semua jelas prosesnya.</em></h2></div><p>Anda tahu apa yang sedang dikerjakan, apa yang akan didapat, dan apa langkah berikutnya di setiap tahap.</p></div>
    <div className="process-grid">{CONFIG.process.map((step,i) => <article className="process-card" key={step.step}><div className="process-number">{step.step}<span>{i < 3 ? '→' : '✓'}</span></div><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div>
  </div></section>;
}

function Faq() {
  const [active, setActive] = useState(0);
  return <section className="section faq-section" id="faq"><div className="container faq-layout"><div><SectionLabel>PERTANYAAN UMUM</SectionLabel><h2>Hal yang perlu Anda<br /><em>ketahui lebih dulu.</em></h2><p>Belum menemukan jawabannya? Ceritakan saja kebutuhan proyek Anda melalui WhatsApp.</p><a href={getWaLink()} target="_blank" rel="noopener noreferrer" className="faq-contact">Tanya langsung <span>↗</span></a></div><div className="faq-items">{QUESTIONS.map((item,i) => <div className={'faq-item' + (active === i ? ' open' : '')} key={item.q}><h3><button type="button" aria-expanded={active === i} aria-controls={'faq-answer-' + i} onClick={() => setActive(active === i ? -1 : i)}><span>{item.q}</span><span className="faq-toggle">{active === i ? '−' : '+'}</span></button></h3>{active === i && <div className="faq-answer" id={'faq-answer-' + i}><p>{item.a}</p></div>}</div>)}</div></div></section>;
}

function Contact() {
  return <section className="contact-section" id="kontak"><div className="container"><div className="contact-card"><span className="contact-eyebrow">PUNYA IDE PROYEK?</span><h2>Mari buat sesuatu<br />yang <em>berguna untuk bisnis Anda.</em></h2><p>Ceritakan masalah atau ide Anda. Saya bantu memilih solusi dan tahap pengembangan yang masuk akal—tanpa kewajiban langsung memesan.</p><div className="contact-actions"><a className="button button-white" href={getWaLink()} target="_blank" rel="noopener noreferrer"><Icon name="wa" size={19} /> Diskusi via WhatsApp ↗</a><a className="button button-contact-outline" href={getMailLink()}><Icon name="mail" size={18} /> Kirim email</a></div><div className="contact-decoration" aria-hidden="true">↗</div></div>
    <footer className="footer"><div><Brand /><p>Solusi digital yang terlihat profesional dan bekerja untuk kebutuhan Anda.</p></div><div className="footer-links"><a href="#layanan">Layanan</a><a href="#portfolio">Portfolio</a><a href="#kalkulator">Estimasi</a><a href="https://github.com/tarmizy" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Codday996 Solutions. All rights reserved.</span><span>Dirancang untuk pengalaman desktop & mobile.</span></div></footer>
  </div></section>;
}

export default function LandingPage() {
  return <><Navbar /><main><Hero /><Services /><Portfolio /><Process /><Estimator /><Faq /><Contact /></main><a className="floating-whatsapp" href={getWaLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat melalui WhatsApp"><Icon name="wa" size={23} /><span>Chat proyek</span></a></>;
}
