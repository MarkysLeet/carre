const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-burgundy text-creme">
      <div className="container-default py-12 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-serif font-semibold">Carre Caffe</h3>
          <p className="mt-3 text-sm text-creme/80">Русская кухня как дома.</p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold uppercase tracking-wide text-gold">Навигация</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-creme/80 hover:text-gold">
                О нас
              </a>
            </li>
            <li>
              <a href="/menu" className="text-creme/80 hover:text-gold">
                Меню
              </a>
            </li>
            <li>
              <a href="/activities" className="text-creme/80 hover:text-gold">
                Активности
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold uppercase tracking-wide text-gold">Мы на связи</h4>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📸</span>
            <a href="https://instagram.com/carre_caffe" target="_blank" rel="noreferrer" className="text-creme/80 hover:text-gold">
              Instagram
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">💬</span>
            <a href="https://wa.me/905306021733" target="_blank" rel="noreferrer" className="text-creme/80 hover:text-gold">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-creme/70">
        © {year} Carre Caffe. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
