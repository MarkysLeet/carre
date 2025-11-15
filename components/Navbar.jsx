import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from '@/components/MobileMenu';

const links = [
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
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-default flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-serif font-semibold text-charcoal">
          Carre Caffe
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wide">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 hover:text-gold ${
                router.asPath === link.href ? 'text-burgundy' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-between h-6 w-8 focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 bg-charcoal rounded" />
          <span className="block h-0.5 bg-charcoal rounded" />
          <span className="block h-0.5 bg-charcoal rounded" />
        </button>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
        activePath={router.asPath}
      />
    </header>
  );
};

export default Navbar;
