import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import DishCard from '@/components/DishCard';

const features = [
  {
    icon: '🍲',
    title: 'Вкус детства',
    description: 'Борщ, пельмени и блины по семейным рецептам. Мы готовим так, как готовили бы для себя.',
  },
  {
    icon: '🏠',
    title: 'Уют как дома',
    description: 'Мягкий свет, живая музыка и дружеские разговоры. Каждый гость — наш друг.',
  },
  {
    icon: '❤️',
    title: 'Тёплый приём',
    description: 'Улыбки, забота и внимание к деталям. Почувствуйте себя частью большой семьи.',
  },
];

const dishes = [
  {
    name: 'Борщ',
    price: '180 ₺',
    description: 'Классический украинский борщ со сметаной и пампушками. Аромат детства.',
  },
  {
    name: 'Пельмени',
    price: '200 ₺',
    description: 'Сибирские пельмени с мясом, подаются со сливочным маслом и укропом.',
  },
  {
    name: 'Котлеты по-киевски',
    price: '250 ₺',
    description: 'Сочная куриная котлета с маслом внутри. Хрустящая корочка.',
  },
  {
    name: 'Оливье',
    price: '150 ₺',
    description: 'Тот самый салат. Колбаса, картофель, горошек, майонез.',
  },
  {
    name: 'Блины с красной икрой',
    price: '300 ₺',
    description: 'Тонкие блинчики с икрой и сметаной.',
  },
  {
    name: 'Чай с самоваром',
    price: '80 ₺',
    description: 'Традиционный русский чай из самовара.',
  },
  {
    name: 'Медовик',
    price: '120 ₺',
    description: 'Многослойный торт с кремом. Сладко и нежно.',
  },
  {
    name: 'Квас',
    price: '60 ₺',
    description: 'Домашний квас. Освежает в жару.',
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const IndexPage = () => {
  return (
    <div>
      <Hero
        title="Carre Caffe"
        subtitle="Русская кухня. Как дома."
        description="Здесь, в сердце Манавгата, мы готовим борщ, пельмени и блины так, как делали бы их для родных. Уютный зал, ароматный чай из самовара и улыбки команды — почувствуйте себя дома."
        cta={{
          label: 'Посмотреть меню',
          href: '/menu',
          background: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
        }}
      />

      <Section
        eyebrow="Почему мы"
        title="Традиции и забота в каждом блюде"
        description="Carre Caffe — это место, где встречаются воспоминания и новые истории. Мы храним семейные рецепты и создаём атмосферу тепла."
      >
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="rounded-3xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 font-serif text-2xl text-dark">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        eyebrow="Популярные блюда"
        title="Выбор гостей Carre Caffe"
        description="Каждое блюдо готовится из свежих продуктов и подаётся с улыбкой. Попробуйте любимые позиции наших гостей."
      >
        <motion.div
          className="flex gap-6 overflow-x-auto pb-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dishes.map((dish) => (
            <motion.div key={dish.name} variants={itemVariants} className="flex-shrink-0">
              <DishCard {...dish} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-burgundy px-8 py-3 text-sm font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Позвонить и заказать
          </a>
        </div>
      </Section>

      <section className="section-container section-spacing">
        <motion.div
          className="rounded-3xl bg-burgundy px-8 py-12 text-center text-cream shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl">Хотите забронировать столик или сделать предзаказ?</h2>
          <p className="mt-4 text-base text-cream/80 md:text-lg">
            Напишите нам в WhatsApp — договоримся о времени, подготовим любимые блюда и встретим вас с улыбкой.
          </p>
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-3 text-sm font-semibold text-burgundy shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Написать в WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default IndexPage;
