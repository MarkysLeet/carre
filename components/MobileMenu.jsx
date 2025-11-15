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

const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-50 md:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Полупрозрачный фон */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            variants={overlayVariants}
            onClick={onClose}
          />
          {/* Сайдбар навигации слева */}
          <motion.aside
            className="relative flex h-full w-3/4 max-w-xs flex-col bg-white p-6 shadow-xl"
            variants={panelVariants}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="mb-6 self-end text-sm font-medium text-textSecondary"
            >
              Закрыть
            </button>
            <nav className="flex flex-col gap-6 text-lg">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="font-medium text-textPrimary" onClick={onClose}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/905306021733"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-burgundy px-4 py-2 text-center text-sm font-medium text-gold shadow-sm"
                onClick={onClose}
              >
                Написать в WhatsApp
              </Link>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
