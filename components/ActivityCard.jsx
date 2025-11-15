import Link from 'next/link';
import { motion } from 'framer-motion';

const ActivityCard = ({ title, subtitle, description, cta }) => {
  return (
    <motion.div
      className="rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="font-display text-2xl text-burgundy">{title}</h3>
      <p className="mt-2 text-sm font-medium text-gold">{subtitle}</p>
      <p className="mt-4 text-base text-textSecondary">{description}</p>
      {cta && (
        <Link
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-burgundy px-6 py-2 text-sm font-medium text-gold shadow-md"
        >
          {cta.label}
        </Link>
      )}
    </motion.div>
  );
};

export default ActivityCard;
