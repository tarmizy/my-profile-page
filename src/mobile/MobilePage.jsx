import Background from '../shared/Background';
import useReveal from '../shared/useReveal';
import MobileNav from './MobileNav';
import MobileHero from './MobileHero';
import MobileServices from './MobileServices';
import PortfolioShowcase from '../shared/PortfolioShowcase';
import MobileFeatures from './MobileFeatures';
import MobilePricing from './MobilePricing';
import MobileProcess from './MobileProcess';
import MobileContact from './MobileContact';
import LiveChat from '../shared/LiveChat';

export default function MobilePage() {
  useReveal();

  return (
    <>
      <Background />
      <MobileNav />
      <MobileHero />
      <MobileServices />
      <section id="portfolio" className="page-panel page-panel-portfolio" style={{ padding: '50px 16px' }}>
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" /> Portfolio</span>
          <h2 className="title">Sistem yang sudah jalan</h2>
          <p className="subtitle">Bukan konsep — sudah online dan bisa Anda buka. Klik untuk lihat detail.</p>
        </div>
        <PortfolioShowcase />
      </section>
      <MobileFeatures />
      <MobilePricing />
      <MobileProcess />
      <MobileContact />

      <LiveChat />

      {/* Inject keyframes */}
      <style>{`
        @keyframes shineText { to { background-position: 200% center; } }
      `}</style>
    </>
  );
}
