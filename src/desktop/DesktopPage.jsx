import { useEffect } from 'react';
import Background from '../shared/Background';
import useReveal from '../shared/useReveal';
import DesktopNav from './DesktopNav';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopPortfolio from './DesktopPortfolio';
import DesktopFeatures from './DesktopFeatures';
import DesktopPricing from './DesktopPricing';
import DesktopProcess from './DesktopProcess';
import DesktopContact from './DesktopContact';

export default function DesktopPage() {
  useReveal();

  return (
    <>
      <Background />
      <DesktopNav />
      <DesktopHero />
      <DesktopServices />
      <DesktopPortfolio />
      <DesktopFeatures />
      <DesktopPricing />
      <DesktopProcess />
      <DesktopContact />
    </>
  );
}
