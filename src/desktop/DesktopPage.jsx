import Background from '../shared/Background';
import useReveal from '../shared/useReveal';
import DesktopNav from './DesktopNav';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import PortfolioShowcase from '../shared/PortfolioShowcase';
import DesktopFeatures from './DesktopFeatures';
import DesktopPricing from './DesktopPricing';
import DesktopProcess from './DesktopProcess';
import DesktopContact from './DesktopContact';
import LiveChat from '../shared/LiveChat';

export default function DesktopPage() {
  useReveal();

  return (
    <>
      <Background />
      <DesktopNav />
      <DesktopHero />
      <DesktopServices />
      <section id="portfolio" className="page-panel page-panel-portfolio" style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-head reveal">
            
            <h2 className="title">Sistem yang sudah saya bangun & jalan</h2>
            <p className="subtitle">Bukan konsep — sudah online dan bisa Anda buka. Klik untuk lihat detail.</p>
          </div>
          <PortfolioShowcase />
        </div>
      </section>
      <DesktopFeatures />
      <DesktopPricing />
      <DesktopProcess />
      <DesktopContact />
      <LiveChat />
    </>
  );
}
