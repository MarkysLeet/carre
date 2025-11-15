import Link from 'next/link';
import { motion } from 'framer-motion';

const ActivityCard = ({ title, subtitle, description, ctaLabel, ctaHref, highlight = false }) => {
  return (
    <motion.article
      className={`rounded-3xl border border-creme bg-white p-8 shadow-sm transition-shadow ${
        highlight ? 'bg-creme/60' : ''
      }`}
      whileHover={{ scale: 1.03, boxShadow: '0px 24px 45px rgba(128,0,32,0.18)' }}
    >
      <h3 className="font-serif text-3xl text-charcoal">{title}</h3>
      {subtitle && <p className="mt-2 text-gold font-medium">{subtitle}</p>}
      <p className="mt-4 text-muted leading-7">{description}</p>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-6 inline-block rounded-full bg-burgundy px-6 py-2 text-sm font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105"
        >
          {ctaLabel}
        </Link>
      )}
    </motion.article>
  );
};

export default ActivityCard;
