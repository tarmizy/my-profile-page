import { useEffect } from 'react';
import Background from '../shared/Background';
import useReveal from '../shared/useReveal';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';
import MobileNav from './MobileNav';
import MobileHero from './MobileHero';
import MobileServices from './MobileServices';
import PortfolioCards from '../shared/PortfolioCards';
import MobileFeatures from './MobileFeatures';
import MobilePricing from './MobilePricing';
import MobileProcess from './MobileProcess';
import MobileContact from './MobileContact';

export default function MobilePage() {
  useReveal();

  return (
    <>
      <Background />
      <MobileNav />
      <MobileHero />
      <MobileServices />
      <section id="portfolio" style={{ padding: '50px 16px' }}>
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" /> Portfolio</span>
          <h2 className="title">Sistem yang sudah jalan</h2>
          <p className="subtitle">Bukan konsep — sudah online dan bisa Anda buka. Klik untuk lihat detail.</p>
        </div>
        <PortfolioCards isMobile={true} />
      </section>
      <MobileFeatures />
      <MobilePricing />
      <MobileProcess />
      <MobileContact />

      {/* Floating WA */}
      <a
        href={getWaLink()}
        target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed', right: 14, bottom: 'calc(14px + env(safe-area-inset-bottom))', zIndex: 60,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 52, height: 52, borderRadius: '50%',
          background: '#25d366', color: '#fff', textDecoration: 'none',
          boxShadow: '0 14px 34px -10px rgba(37,211,102,.75)',
          transition: 'transform .2s',
        }}
      >
        <Icon name="wa" size={26} />
      </a>

      {/* Inject keyframes */}
      <style>{`
        @keyframes shineText { to { background-position: 200% center; } }
      `}</style>
    </>
  );
}
