import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CONFIG from './data';
import Icon from './Icon';
import Web3DShowcase from './Web3DShowcase';
import { PortfolioModal } from './PortfolioCards';

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const project = CONFIG.projects[activeIndex];

  return (
    <div className="portfolio-showcase">
      <div className="portfolio-project-list" role="tablist" aria-label="Daftar portfolio">
        {CONFIG.projects.map((item, index) => (
          <button key={item.name} className={`portfolio-project-tab${index === activeIndex ? ' is-active' : ''}`} onClick={() => setActiveIndex(index)} role="tab" aria-selected={index === activeIndex}>
            <span className="portfolio-project-number">0{index + 1}</span>
            <span><strong>{item.name}</strong><small>{item.tag}</small></span>
            <Icon name="ext" size={13} />
          </button>
        ))}
      </div>

      <div className="portfolio-stage">
        <Web3DShowcase compact />
        <div className="portfolio-stage-grid" />
        <AnimatePresence mode="wait">
          <motion.article key={project.name} className="portfolio-feature-card" initial={{ opacity: 0, rotateY: -10, x: 28 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} exit={{ opacity: 0, rotateY: 10, x: -22 }} transition={{ duration: .48, ease: [0.22, 1, 0.36, 1] }}>
            <div className="portfolio-feature-media">
              {project.shotDesktop ? <img src={project.shotDesktop} alt={project.name} /> : <div style={{ color: project.accent, fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800 }}>{project.name}</div>}
              <div className="portfolio-feature-bar"><span className="portfolio-live-dot" /> live project <span>0{activeIndex + 1} / 0{CONFIG.projects.length}</span></div>
            </div>
            <div className="portfolio-feature-copy">
              <div><span className="eyebrow">{project.tag}</span><h3>{project.name}</h3><p className="portfolio-feature-for">{project.for}</p></div>
              <p className="portfolio-feature-description">{project.shortDesc}</p>
              <div className="portfolio-feature-actions"><button className="btn btn-primary btn-sm" onClick={() => setSelected(project)}>Lihat Detail</button><a className="btn btn-ghost btn-sm" href={project.url} target="_blank" rel="noopener noreferrer"><Icon name="ext" size={13} /> Buka Demo</a></div>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="portfolio-stage-caption"><span>SELECTED WORK</span><span>INTERACTIVE PRODUCT SHOWCASE</span></div>
      </div>

      {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
