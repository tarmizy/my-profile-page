import { useState, useEffect } from 'react';
import MobilePage from './mobile/MobilePage';
import DesktopPage from './desktop/DesktopPage';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 860);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}
