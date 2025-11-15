import Hero from '@/components/Hero';
import Section from '@/components/Section';
import DishCard from '@/components/DishCard';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: '🍲',
    title: 'Вкус детства',
    description: 'Борщ, пельмени, блины — всё по классическим рецептам наших бабушек.'
  },
  {
    icon: '🏠',
    title: 'Уют как дома',
    description: 'Мягкий свет, живые растения и тепло, которое чувствуется с порога.'
  },
  {
    icon: '❤️',
    title: 'Тёплый приём',
    description: 'Встречаем как родных, знаем гостей по именам и помним любимые блюда.'
  }
];

const dishes = [
  {
    title: 'Борщ',
    price: '180 ₺',
    description: 'Классический украинский борщ со сметаной и пампушками. Аромат детства.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Пельмени',
    price: '200 ₺',
    description: 'Сибирские пельмени с мясом, подаются со сливочным маслом и укропом.',
    image: 'https://images.unsplash.com/photo-1604908177574-04623e22c1e7?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Котлеты по-киевски',
    price: '250 ₺',
    description: 'Сочная куриная котлета с маслом внутри. Хрустящая корочка.',
    image: 'https://images.unsplash.com/photo-1612871786121-53ec1e53d5a7?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Оливье',
    price: '150 ₺',
    description: 'Тот самый салат. Колбаса, картофель, горошек, майонез.',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Блины с красной икрой',
    price: '300 ₺',
    description: 'Тонкие блинчики с икрой и сметаной.',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Чай с самоваром',
    price: '80 ₺',
    description: 'Традиционный русский чай из самовара.',
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Медовик',
    price: '120 ₺',
    description: 'Многослойный торт с кремом. Сладко и нежно.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Квас',
    price: '60 ₺',
    description: 'Домашний квас. Освежает в жару.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80'
  }
];

const HomePage = () => {
  return (
    <>
      <Hero
        title="Carre Caffe"
        subtitle="Русская кухня. Как дома."
        description="Здесь пахнет борщом, свежими блинами и теплом. Мы готовим так, как готовили бы для семьи."
        buttonLabel="Посмотреть меню"
        buttonHref="/menu"
        backgroundUrl="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80"
      />

      <Section title="Почему мы" subtitle="Три причины вернуться снова" centered>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-lg border border-creme"
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-serif text-2xl text-charcoal">{item.title}</h3>
              <p className="mt-3 text-muted leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Популярные блюда"
        subtitle="Наши гости выбирают классику — и мы готовим её без компромиссов."
      >
        <div className="flex gap-6 overflow-x-auto pb-6">
          {dishes.map((dish) => (
            <DishCard key={dish.title} {...dish} />
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-burgundy px-8 py-3 text-lg font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Позвонить и заказать
          </a>
        </div>
      </Section>

      <Section centered background="bg-white">
        <div className="mx-auto max-w-2xl rounded-3xl bg-burgundy px-8 py-12 text-center text-creme shadow-xl">
          <h3 className="font-serif text-3xl md:text-4xl">Хотите забронировать столик или сделать предзаказ?</h3>
          <p className="mt-4 text-creme/80 text-lg">
            Напишите нам в WhatsApp — обсудим меню, подготовим столик и позаботимся о каждом госте.
          </p>
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-lg font-semibold text-burgundy shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Написать в WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
