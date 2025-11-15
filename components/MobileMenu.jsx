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
        <>
          {/* Затемняющий overlay поверх контента, не влияющий на фон страницы */}
          <motion.div
            key="mobile-menu-overlay"
            className="fixed inset-0 z-[9990] bg-black/50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={onClose}
          />
          {/* Сайдбар навигации слева */}
          <motion.aside
            key="mobile-menu-panel"
            className="fixed top-0 left-0 z-[10000] flex h-full w-3/4 max-w-xs flex-col bg-[#FAF9F6] p-6 shadow-xl md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={panelVariants}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ backgroundColor: '#FAF9F6' }}
            drag={false}
            dragListener={false}
            dragConstraints={false}
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
                href="http://wa.me/905374634693"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-burgundy px-4 py-2 text-center text-sm font-medium text-gold shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                onClick={onClose}
              >
                Написать в WhatsApp
              </Link>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
