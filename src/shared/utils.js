import CONFIG from './data';

export function getWaLink(msg) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.waMessage)}`;
}

export function getMailLink() {
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent('Konsultasi Project')}`;
}

export function getHost(url) {
  try { return new URL(url).host; } catch { return url; }
}
