import { motion } from 'framer-motion';
import Link from 'next/link';

const ActivityCard = ({ title, subtitle, description, cta }) => {
  return (
    <motion.div
      className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <h3 className="font-serif text-2xl text-dark">{title}</h3>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-burgundy">{subtitle}</p>
      <p className="mt-4 text-base text-muted">{description}</p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-2 text-sm font-semibold text-gold shadow-md transition-transform duration-200 hover:scale-105"
        >
          {cta.label}
        </Link>
      )}
    </motion.div>
  );
};

export default ActivityCard;
