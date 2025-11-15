import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from '@/components/MobileMenu';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/menu', label: 'Меню' },
  { href: '/about', label: 'О нас' },
  { href: '/activities', label: 'Активности' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} links={navLinks} />
      <header
        className={`fixed inset-x-0 top-0 z-[9999] transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between py-4">
          <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-textPrimary">
            Carre Caffe
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  router.pathname === link.href ? 'text-burgundy' : 'text-textSecondary hover:text-burgundy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="http://wa.me/905374634693"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-burgundy px-4 py-2 text-sm font-medium text-gold shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              Связаться
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1 md:hidden"
            aria-label="Открыть меню"
          >
            {/* Простая бургер-иконка из трёх линий */}
            <span className="h-0.5 w-6 bg-textPrimary"></span>
            <span className="h-0.5 w-6 bg-textPrimary"></span>
            <span className="h-0.5 w-6 bg-textPrimary"></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
