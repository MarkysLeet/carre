import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-burgundy text-cream">
      <div className="section-container section-spacing grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl font-semibold">Carre Caffe</h3>
          <p className="mt-4 max-w-sm text-sm text-cream/80">
            Русская кухня как дома. Делимся теплом и вкусами детства каждый день.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-xl">Навигация</h4>
          <nav className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/about" className="hover:text-gold">
              О нас
            </Link>
            <Link href="/menu" className="hover:text-gold">
              Меню
            </Link>
            <Link href="/activities" className="hover:text-gold">
              Активности
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="font-serif text-xl">Мы на связи</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="https://instagram.com/carre_caffe" target="_blank" rel="noreferrer" className="hover:text-gold">
                📸 Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/905306021733" target="_blank" rel="noreferrer" className="hover:text-gold">
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/70">
        © {year} Carre Caffe. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
