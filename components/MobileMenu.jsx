import Link from 'next/link';
import { motion } from 'framer-motion';

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
};

const MobileMenu = ({ links, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-40 md:hidden"
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.aside
        className="absolute bottom-0 left-0 top-0 w-3/4 max-w-xs bg-white p-8 shadow-2xl"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold text-dark">Carre Caffe</span>
          <button
            type="button"
            className="text-sm uppercase tracking-wide text-muted"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-dark transition-colors duration-200 hover:text-burgundy"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.aside>
    </motion.div>
  );
};

export default MobileMenu;
