import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CONFIG from './data';
import Icon from './Icon';
import { PortfolioModal } from './PortfolioCards';

function StackCard({ project, index, total, progress, onSelect }) {
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const opacity = useTransform(progress, isFirst ? [0, end * .62, end] : [Math.max(0, start - .12), start, end], isFirst ? [1, 1, 0] : [0, 1, 0]);
  const scale = useTransform(progress, isFirst ? [0, end] : [Math.max(0, start - .12), start, end], isFirst ? [1, .92] : [.92, 1, .92]);
  const y = useTransform(progress, isFirst ? [0, end] : [Math.max(0, start - .12), start, end], isFirst ? [0, -42] : [48, 0, -42]);
  const rotate = useTransform(progress, isFirst ? [0, end] : [Math.max(0, start - .12), start, end], isFirst ? [0, index % 2 ? 5 : -5] : [index % 2 ? -5 : 5, 0, index % 2 ? 5 : -5]);

  return (
    <motion.article
      className="card portfolio-stack-card"
      style={{ opacity, scale, y, rotate, zIndex: total - index, borderTop: `2px solid ${project.accent}`, cursor: 'pointer' }}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(project); } }}
      role="button"
      tabIndex={0}
      aria-label={`Lihat detail ${project.name}`}
    >
      <div className="portfolio-stack-media">
        {project.shotDesktop ? <img src={project.shotDesktop} alt={project.name} loading={index > 0 ? 'lazy' : undefined} /> : <div style={{ color: project.accent, fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800 }}>{project.name}</div>}
        <span className="portfolio-stack-index">0{index + 1} / 0{total}</span>
      </div>
      <div className="portfolio-stack-copy">
        <span className="eyebrow">{project.tag}</span>
        <h3>{project.name}</h3>
        <p className="portfolio-stack-for">{project.for}</p>
        <p>{project.shortDesc}</p>
        <div className="portfolio-stack-actions">
          <button className="btn btn-primary btn-sm" onClick={(event) => { event.stopPropagation(); onSelect(project); }}>Lihat Detail</button>
          <a className="btn btn-ghost btn-sm" href={project.url} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}><Icon name="ext" size={13} /> Demo</a>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioStack() {
  const stackRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ['start start', 'end end'] });

  return (
    <>
      <div ref={stackRef} className="portfolio-stack-scroll" style={{ minHeight: `${CONFIG.projects.length * 76}vh` }}>
        <div className="portfolio-stack-stage">
          {CONFIG.projects.map((project, index) => <StackCard key={project.name} project={project} index={index} total={CONFIG.projects.length} progress={scrollYProgress} onSelect={setSelected} />)}
        </div>
      </div>
      {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
