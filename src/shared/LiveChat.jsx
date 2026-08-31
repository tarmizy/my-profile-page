import { motion } from 'framer-motion';
import { getWaLink } from './utils';
import Icon from './Icon';

export default function LiveChat() {
  return (
    <motion.a className="live-chat" href={getWaLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat langsung via WhatsApp" title="Chat langsung via WhatsApp" whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: .96 }}>
      <Icon name="wa" size={24} />
    </motion.a>
  );
}
