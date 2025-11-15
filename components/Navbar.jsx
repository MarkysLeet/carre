import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/menu', label: 'Меню' },
  { href: '/about', label: 'О нас' },
  { href: '/activities', label: 'Активности' },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-dark">
            Carre Caffe
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  pathname === link.href ? 'text-burgundy' : 'text-dark'
                } hover:text-gold`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-burgundy bg-white text-burgundy transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-gold md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Открыть меню"
          >
            <span className="block h-0.5 w-6 bg-burgundy" />
            <span className="block h-0.5 w-6 bg-burgundy" />
            <span className="block h-0.5 w-6 bg-burgundy" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>{isOpen && <MobileMenu links={links} onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  );
};

export default Navbar;
