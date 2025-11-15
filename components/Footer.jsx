import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-burgundy text-cream">
      <div className="section-container section-spacing grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-semibold">Carre Caffe</h3>
          <p className="mt-4 text-sm text-cream/80">Русская кухня как дома.</p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Навигация</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-gold">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-gold">
                Меню
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-gold">
                Активности
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold">Мы на связи</h4>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="https://instagram.com/carre_caffe" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              📸 Instagram
            </Link>
            <Link href="https://wa.me/905306021733" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              💬 WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/80">
        © {year} Carre Caffe. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
