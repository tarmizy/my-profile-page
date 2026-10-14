import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import CONFIG from '../shared/data';
import Icon from '../shared/Icon';
import { getMailLink, getWaLink } from '../shared/utils';
import Estimator from './Estimator';

const NAV = [
  { id: 'beranda', title: 'Beranda', icon: 'globe' },
  { id: 'layanan', title: 'Layanan', icon: 'chart' },
  { id: 'karya', title: 'Karya', icon: 'monitor' },
  { id: 'estimasi', title: 'Estimasi', icon: 'report' },
  { id: 'kontak', title: 'Kontak', icon: 'mail' },
];

const FAQ = [
  { question: 'Apakah bisa konsultasi sebelum menentukan paket?', answer: 'Tentu. Konsultasi awal tidak berbayar. Ceritakan tantangan bisnis, pengguna aplikasi, dan hal yang ingin Anda otomatisasi. Saya bantu mengurai kebutuhan sebelum menyusun scope pekerjaan.' },
  { question: 'Apakah kalkulator menampilkan harga final?', answer: 'Belum. Kalkulator memberikan rentang simulasi berdasarkan jenis proyek, kompleksitas, dan fitur. Penawaran final disusun secara tertulis setelah kebutuhan, integrasi, dan batas pekerjaan disepakati.' },
  { question: 'Bisa dimulai dari fitur paling penting dulu?', answer: 'Bisa. Kita dapat menentukan MVP atau tahap pertama agar fitur utama bisa diluncurkan lebih dulu. Fitur lanjutan dapat masuk fase pengembangan berikutnya.' },
  { question: 'Bagaimana aplikasi digunakan di HP?', answer: 'Antarmuka dibuat responsif untuk layar kecil dan besar. Jika proyek membutuhkan aplikasi yang dapat dipasang di perangkat, opsi PWA atau mobile app dapat didiskusikan sejak awal.' },
  { question: 'Apa yang saya dapat setelah proyek selesai?', answer: 'Hasil dan proses serah-terima mengikuti penawaran yang disetujui, termasuk dokumentasi, panduan penggunaan, dan ketentuan dukungan pascarilis. Domain, hosting, dan maintenance dibicarakan sejak tahap perencanaan.' },
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}
      transition={{ duration: reduce ? 0 : .7, delay: reduce ? 0 : delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}

function Wordmark() {
  return (
    <a className="studio-wordmark" href="#beranda" aria-label="codday Digital Solutions, kembali ke beranda">
      <img className="studio-logo-image" src="/codday-mark.svg" alt="" width="40" height="46" />
      <span className="studio-wordmark-type"><strong>codday<span>.</span></strong><small>DIGITAL SOLUTIONS STUDIO</small></span>
    </a>
  );
}

function Navigation() {
  const [active, setActive] = useState('beranda');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const nodes = NAV.map(item => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-20% 0px -62% 0px', threshold: 0 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header className="studio-header">
        <div className="studio-shell studio-header-inner">
          <Wordmark />
          <nav className="studio-desktop-links" aria-label="Navigasi utama">
            <a href="#layanan">Layanan</a>
            <a href="#karya">Portfolio</a>
            <a href="#proses">Cara kerja</a>
            <a href="#estimasi">Estimasi biaya</a>
          </nav>
          <a className="studio-header-cta" href={getWaLink()} target="_blank" rel="noopener noreferrer">
            Konsultasi gratis <Icon name="ext" size={16} />
          </a>
        </div>
      </header>
      <nav className="studio-mobile-dock" aria-label="Navigasi mobile">
        {NAV.map(item => (
          <a key={item.id} href={'#' + item.id} aria-current={active === item.id ? 'page' : undefined}
            className={active === item.id ? 'is-active' : ''} onClick={() => setActive(item.id)}>
            <span className="studio-dock-icon"><Icon name={item.icon} size={20} /></span>
            <span>{item.title}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

function SectionHeading({ eyebrow, title, emphasis, description, light = false }) {
  return (
    <div className={'studio-section-heading' + (light ? ' on-dark' : '')}>
      <div>
        <p className="studio-kicker"><span className="studio-kicker-line" /> {eyebrow}</p>
        <h2>{title} <em>{emphasis}</em></h2>
      </div>
      {description && <p className="studio-section-intro">{description}</p>}
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="studio-hero" id="beranda" aria-labelledby="hero-title">
      <div className="studio-hero-decoration" aria-hidden="true"><span /><span /><span /></div>
      <div className="studio-shell studio-hero-grid">
        <div className="studio-hero-copy">
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="studio-pill">
            <span className="studio-pill-dot" /> SOLUSI DIGITAL UNTUK BISNIS YANG TERUS BERGERAK
          </motion.div>
          <motion.h1 id="hero-title" initial={reduce ? false : { opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1 }}>
            Bisnis Anda punya potensi besar.<br /><span>Teknologinya</span> <em>saya bantu wujudkan.</em>
          </motion.h1>
          <motion.p className="studio-hero-lead" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .22 }}>
            Website, aplikasi bisnis, dan sistem operasional custom yang dirancang untuk membuat pekerjaan lebih ringkas dan pengalaman pelanggan lebih baik.
          </motion.p>
          <motion.div className="studio-hero-actions" initial={reduce ? false : { opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>
            <a className="studio-btn studio-btn-dark" href="#estimasi">Hitung estimasi proyek <span className="studio-btn-arrow">↗</span></a>
            <a className="studio-btn studio-btn-line" href="#karya">Lihat hasil kerja <span aria-hidden="true">→</span></a>
          </motion.div>
          <div className="studio-hero-proof">
            <div className="studio-proof-number"><strong>06<span>.</span></strong><span>contoh proyek<br />di portfolio</span></div>
            <div className="studio-proof-separator" />
            <p><Icon name="check" size={17} /> Konsultasi tanpa biaya awal<br /><Icon name="check" size={17} /> Lihat karya dan demo sebelum diskusi</p>
          </div>
        </div>
        <figure className="studio-hero-art">
          <img
            className="studio-hero-concept"
            src="/codday-hero-poster.webp"
            width="800"
            height="800"
            fetchPriority="high"
            decoding="async"
            alt="Ilustrasi Codday: proses manual dan data yang terpisah diubah menjadi strategi, aplikasi custom, otomatisasi, dan pertumbuhan bisnis."
          />
        </figure>
      </div>
      <div className="studio-shell studio-hero-meta"><span>INDEPENDENT DIGITAL DEVELOPMENT STUDIO</span><span>BASED IN INDONESIA • AVAILABLE ONLINE</span></div>
    </section>
  );
}

function Marquee() {
  const words = ['Web development', 'Business dashboard', 'Mobile experience', 'Automation', 'Digital solutions'];
  return (
    <div className="studio-marquee" aria-label="Fokus keahlian">
      <div className="studio-marquee-track" aria-hidden="true">
        {[...words, ...words].map((word, index) => <span key={word + index}>{word}<i>✳</i></span>)}
      </div>
    </div>
  );
}

function Services() {
  const data = [
    { id: '01', icon: 'globe', type: 'DIGITAL PRESENCE', title: 'Website yang tampil meyakinkan.', desc: 'Website company profile, katalog, landing page, atau pengalaman web interaktif yang memberi kesan profesional sejak kunjungan pertama.', items: ['Profil & landing page', 'Desain responsif', 'SEO teknis dasar'] },
    { id: '02', icon: 'chart', type: 'BUSINESS SYSTEM', title: 'Operasional lebih tertata.', desc: 'Dashboard dan aplikasi web yang menyesuaikan proses kerja: pelanggan, transaksi, stok, laporan, maupun manajemen tim.', items: ['Dashboard & laporan', 'Hak akses pengguna', 'Integrasi data'] },
    { id: '03', icon: 'smartphone', type: 'MOBILE EXPERIENCE', title: 'Akses praktis dari mana saja.', desc: 'Sistem yang nyaman digunakan dari HP sampai desktop, dengan opsi PWA atau aplikasi mobile sesuai kebutuhan pengguna.', items: ['Mobile-first interface', 'PWA & sistem custom', 'Alur kerja yang mudah'] },
  ];
  return (
    <section className="studio-services studio-section" id="layanan">
      <div className="studio-shell">
        <Reveal><SectionHeading eyebrow="01 — APA YANG KAMI KERJAKAN" title="Bukan sekadar terlihat bagus." emphasis="Harus terasa manfaatnya." description="Solusi yang tepat bukan yang paling rumit. Melainkan yang benar-benar membantu bisnis Anda bekerja lebih efektif." /></Reveal>
        <div className="studio-services-grid">{data.map((service, index) => (
          <Reveal key={service.id} delay={index * .08}>
            <article className="studio-service-card">
              <div className="studio-service-top"><span>{service.id} / 03</span><Icon name={service.icon} size={27} /></div>
              <p className="studio-service-type">{service.type}</p>
              <h3>{service.title}</h3><p className="studio-service-description">{service.desc}</p>
              <div className="studio-service-tags">{service.items.map(item => <span key={item}>{item}</span>)}</div>
              <a href={getWaLink('Halo Codday996 Solutions, saya ingin diskusi tentang ' + service.title)} target="_blank" rel="noopener noreferrer" className="studio-service-link">Diskusikan kebutuhan <span aria-hidden="true">↗</span></a>
            </article>
          </Reveal>
        ))}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [selected, setSelected] = useState(0);
  const [device, setDevice] = useState('desktop');
  const reduce = useReducedMotion();
  const project = CONFIG.projects[selected];
  const mobileAvailable = Boolean(project.shotMobile);
  const photo = device === 'mobile' && mobileAvailable ? project.shotMobile : project.shotDesktop;
  const selectProject = (index) => { setSelected(index); setDevice('desktop'); };
  return (
    <section className="studio-work studio-section" id="karya">
      <div className="studio-shell">
        <Reveal><SectionHeading light eyebrow="02 — PEKERJAAN PILIHAN" title="Pekerjaan nyata." emphasis="Bukan mockup kosong." description="Jelajahi enam proyek dari berbagai kebutuhan. Pilih proyek, lihat cuplikan tampilannya, lalu buka tautan demo jika tersedia." /></Reveal>
        <div className="studio-work-layout">
          <div className="studio-work-list" role="tablist" aria-label="Pilih karya portfolio">
            {CONFIG.projects.map((item, index) => (
              <button id={'studio-project-tab-' + index} key={item.name} type="button" role="tab" aria-selected={selected === index}
                aria-controls="studio-project-panel" tabIndex={selected === index ? 0 : -1} onClick={() => selectProject(index)}
                onKeyDown={(event) => {
                  let next = null;
                  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % CONFIG.projects.length;
                  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + CONFIG.projects.length) % CONFIG.projects.length;
                  if (event.key === 'Home') next = 0;
                  if (event.key === 'End') next = CONFIG.projects.length - 1;
                  if (next !== null) {
                    event.preventDefault();
                    selectProject(next);
                    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next]?.focus();
                  }
                }}
                className={'studio-work-tab' + (selected === index ? ' is-active' : '')}>
                <span className="studio-work-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="studio-work-tab-copy"><strong>{item.name}</strong><small>{item.tag}</small></span>
                <span className="studio-work-tab-arrow">↗</span>
              </button>
            ))}
          </div>
          <div className="studio-work-feature" role="tabpanel" id="studio-project-panel" aria-labelledby={'studio-project-tab-' + selected}>
            <div className="studio-work-feature-top"><span><i /> FEATURED PROJECT / {String(selected + 1).padStart(2, '0')}</span><div className="studio-device-controls" role="group" aria-label="Pilih tampilan proyek">
              <button type="button" className={device === 'desktop' ? 'active' : ''} aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}><Icon name="monitor" size={16} /> Desktop</button>
              {mobileAvailable && <button type="button" className={device === 'mobile' ? 'active' : ''} aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}><Icon name="smartphone" size={16} /> Mobile</button>}
            </div></div>
            <div className={'studio-work-image-stage' + (device === 'mobile' && mobileAvailable ? ' mobile-preview' : '')}>
              <div className="studio-stage-glow" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div className="studio-work-screen" key={project.name + device} initial={reduce ? false : { opacity: 0, y: 16, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduce ? undefined : { opacity: 0, y: -8, scale: .98 }} transition={{ duration: .28 }}>
                  <div className="studio-screen-bar"><span><i /><i /><i /></span><small>PREVIEW • CODDAY996</small></div>
                  <img src={photo} alt={'Cuplikan tampilan ' + project.name + ' pada ' + (device === 'mobile' ? 'mobile' : 'desktop')} loading="lazy" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="studio-work-feature-bottom">
              <div><span>{project.tag}</span><h3>{project.name}</h3><p>{project.shortDesc}</p></div>
              <a className="studio-work-open" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Buka demo ' + project.name}><Icon name="ext" size={24} /></a>
            </div>
          </div>
        </div>
        <p className="studio-work-disclaimer">Cuplikan dan tautan adalah referensi portfolio. Akses demo dapat berubah sesuai ketersediaan masing-masing sistem.</p>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { no: '01', name: 'Memahami kebutuhan', desc: 'Kita bahas masalah, alur bisnis, pengguna, dan hasil yang ingin dicapai.' },
    { no: '02', name: 'Merancang solusi', desc: 'Fitur prioritas, scope, tampilan awal, jadwal, dan penawaran dirangkum dengan jelas.' },
    { no: '03', name: 'Membangun & menguji', desc: 'Pengembangan bertahap dengan evaluasi pada titik yang telah disepakati.' },
    { no: '04', name: 'Rilis & serah terima', desc: 'Persiapan peluncuran, panduan penggunaan, dan opsi dukungan pascarilis.' },
  ];
  return (
    <section className="studio-approach studio-section" id="proses">
      <div className="studio-shell">
        <Reveal><SectionHeading eyebrow="03 — PROSES KERJA" title="Proses terarah." emphasis="Tanpa tebak-tebakan." description="Pengalaman bekerja sama harus sama baiknya dengan produk yang dibuat." /></Reveal>
        <div className="studio-approach-grid">{steps.map((step, index) => (
          <Reveal key={step.no} delay={index * .07}><article className="studio-approach-step"><div className="studio-approach-number">{step.no}<span>↗</span></div><h3>{step.name}</h3><p>{step.desc}</p></article></Reveal>
        ))}</div>
        <Reveal className="studio-approach-statement"><span className="studio-statement-icon"><Icon name="shield" size={26} /></span><div><strong>Kualitas dimulai dari ekspektasi yang jelas.</strong><span>Ruang lingkup dan biaya disepakati sebelum pengerjaan. Kalkulator membantu langkah pertama, bukan menggantikan penawaran tertulis.</span></div><a href="#estimasi">Simulasikan biaya <span>↗</span></a></Reveal>
      </div>
    </section>
  );
}

function FAQs() {
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="studio-faq studio-section" id="faq">
      <div className="studio-shell studio-faq-grid">
        <Reveal className="studio-faq-left">
          <p className="studio-kicker"><span className="studio-kicker-line" /> 05 — FAQ</p>
          <h2>Pertanyaan yang <em>sering muncul.</em></h2>
          <p>Jawaban singkat sebelum kita mulai. Kalau ada kebutuhan khusus, lebih mudah dibahas langsung.</p>
          <a href={getWaLink()} target="_blank" rel="noopener noreferrer" className="studio-text-link">Tanya via WhatsApp <span>↗</span></a>
        </Reveal>
        <div className="studio-faq-list">
          {FAQ.map((item, index) => (
            <div className={'studio-faq-item' + (expanded === index ? ' is-open' : '')} key={item.question}>
              <h3><button type="button" aria-expanded={expanded === index} aria-controls={'studio-faq-answer-' + index} onClick={() => setExpanded(expanded === index ? -1 : index)}><span>{item.question}</span><span className="studio-faq-plus" aria-hidden="true">{expanded === index ? '−' : '+'}</span></button></h3>
              {expanded === index && <div id={'studio-faq-answer-' + index} className="studio-faq-answer"><p>{item.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="studio-contact" id="kontak">
      <div className="studio-shell">
        <Reveal>
          <div className="studio-contact-panel">
            <div className="studio-contact-orbit" aria-hidden="true" />
            <p className="studio-contact-kicker"><span /> PUNYA IDE YANG INGIN DIREALISASIKAN?</p>
            <h2>Mari buat teknologi<br /><em>yang bekerja untuk Anda.</em></h2>
            <p>Mulai dari diskusi sederhana. Ceritakan kebutuhan bisnis Anda, dan kita temukan solusi yang paling masuk akal.</p>
            <div className="studio-contact-buttons">
              <a href={getWaLink()} className="studio-btn studio-btn-light" target="_blank" rel="noopener noreferrer"><Icon name="wa" size={18} /> Mulai konsultasi <span>↗</span></a>
              <a href={getMailLink()} className="studio-btn studio-btn-translucent"><Icon name="mail" size={18} /> Kirim email</a>
            </div>
          </div>
        </Reveal>
        <footer className="studio-footer">
          <div className="studio-footer-top"><div><Wordmark /><p>Website & aplikasi custom yang membantu bisnis bergerak lebih baik.</p></div><nav aria-label="Navigasi footer"><a href="#layanan">Layanan</a><a href="#karya">Portfolio</a><a href="#estimasi">Estimasi</a><a href="#faq">FAQ</a><a href="https://github.com/tarmizy" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav></div>
          <div className="studio-footer-bottom"><span>© {new Date().getFullYear()} codday Digital Solutions.</span><span>Made with purpose, built for people.</span></div>
        </footer>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return <><a className="studio-skip-link" href="#main-content">Lewati navigasi</a><Navigation /><main id="main-content"><Hero /><Marquee /><Services /><Portfolio /><Approach /><Estimator /><FAQs /><Contact /></main></>;
}
