import Section from '@/components/Section';

const menuItems = [
  {
    name: 'Борщ',
    price: '180 ₺',
    description: 'Классический борщ со сметаной, пампушками и чесночным маслом.',
  },
  {
    name: 'Пельмени',
    price: '200 ₺',
    description: 'Домашние пельмени с сочной мясной начинкой и сливочным маслом.',
  },
  {
    name: 'Котлеты по-киевски',
    price: '250 ₺',
    description: 'Фирменная котлета с пряным маслом внутри и картофельным пюре.',
  },
  {
    name: 'Оливье',
    price: '150 ₺',
    description: 'Классический салат с докторской колбасой, маринованными огурцами и домашним майонезом.',
  },
  {
    name: 'Блины с красной икрой',
    price: '300 ₺',
    description: 'Тонкие блины, красная икра, сметана и зелёный лук.',
  },
  {
    name: 'Чай с самоваром',
    price: '80 ₺',
    description: 'Черный листовой чай, заваренный в самоваре, с вареньем и лимоном.',
  },
  {
    name: 'Медовик',
    price: '120 ₺',
    description: 'Многослойный торт на медовых коржах с нежным кремом.',
  },
  {
    name: 'Квас',
    price: '60 ₺',
    description: 'Домашний хлебный квас с лёгкой сладостью и газированием.',
  },
];

const MenuPage = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center bg-cream"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(250,249,246,0.9), rgba(255,255,255,0.95)), url(https://images.unsplash.com/photo-1604908177328-3067dc1ac910)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-container section-spacing text-center text-dark">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy">Меню</span>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl">Классические блюда русской кухни</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Приготовлено с любовью и уважением к традициям. Мы выбираем лучшие продукты и готовим так, как учила бабушка.
          </p>
        </div>
      </section>

      <Section align="left">
        <div className="divide-y divide-cream/60 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          {menuItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-serif text-2xl text-dark">{item.name}</h3>
                <p className="mt-2 text-sm text-muted md:max-w-xl">{item.description}</p>
              </div>
              <span className="text-lg font-semibold text-gold">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-burgundy px-8 py-10 text-center text-cream shadow-xl md:flex-row md:justify-between">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Хотите заказать заранее?</h2>
            <p className="mt-3 max-w-xl text-sm text-cream/80 md:text-base">
              Напишите нам в WhatsApp — соберём заказ, подготовим горячие блюда и встретим вас без ожидания.
            </p>
          </div>
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3 text-sm font-semibold text-burgundy shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Связаться в WhatsApp
          </a>
        </div>
      </Section>
    </div>
  );
};

export default MenuPage;
