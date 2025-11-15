import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const panelVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0 }
};

const MobileMenu = ({ isOpen, onClose, links, activePath }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Overlay затемняет фон и закрывает меню по клику */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            variants={overlayVariants}
            onClick={onClose}
          />

          {/* Сайдбар с навигацией */}
          <motion.aside
            className="relative z-50 h-full w-3/4 max-w-sm bg-white px-6 py-12 shadow-xl flex flex-col space-y-8"
            variants={panelVariants}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <button
              type="button"
              className="self-end text-sm uppercase tracking-wide text-muted"
              onClick={onClose}
            >
              Закрыть
            </button>
            <nav className="flex flex-col space-y-6 text-lg font-medium text-charcoal">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase tracking-wide ${
                    activePath === link.href ? 'text-burgundy' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
