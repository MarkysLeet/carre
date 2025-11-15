import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHeart, FaHome, FaUtensils } from 'react-icons/fa';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import DishCard from '@/components/DishCard';

const highlights = [
  {
    icon: FaUtensils,
    title: 'Вкус детства',
    description: 'Борщ, пельмени, блины и другие блюда, приготовленные по домашним рецептам.'
  },
  {
    icon: FaHome,
    title: 'Уют как дома',
    description: 'Тёплая атмосфера, мягкий свет и забота о каждом госте — расслабьтесь и отдыхайте.'
  },
  {
    icon: FaHeart,
    title: 'Тёплый приём',
    description: 'Знаем своих гостей по именам, встречаем с улыбкой и угощаем вкусным чаем.'
  }
];

const dishes = [
  {
    name: 'Борщ',
    price: '180 ₺',
    description: 'Классический украинский борщ со сметаной и пампушками. Аромат детства.'
  },
  {
    name: 'Пельмени',
    price: '200 ₺',
    description: 'Сибирские пельмени с мясом, подаются со сливочным маслом и укропом.'
  },
  {
    name: 'Котлеты по-киевски',
    price: '250 ₺',
    description: 'Сочная куриная котлета с маслом внутри. Хрустящая корочка.'
  },
  {
    name: 'Оливье',
    price: '150 ₺',
    description: 'Тот самый салат. Колбаса, картофель, горошек, майонез.'
  },
  {
    name: 'Блины с красной икрой',
    price: '300 ₺',
    description: 'Тонкие блинчики с икрой и сметаной.'
  },
  {
    name: 'Чай с самоваром',
    price: '80 ₺',
    description: 'Традиционный русский чай из самовара.'
  },
  {
    name: 'Медовик',
    price: '120 ₺',
    description: 'Многослойный торт с кремом. Сладко и нежно.'
  },
  {
    name: 'Квас',
    price: '60 ₺',
    description: 'Домашний квас. Освежает в жару.'
  }
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Carre Caffe | Русская кухня в Манавгате, Турция</title>
      </Head>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1521017432531-fbd92d768814"
        title="Carre Caffe"
        subtitle="Русская кухня. Как дома."
        description="Настоящий борщ, пельмени, блины и горячий самовар. В Carre Caffe вы почувствуете тепло и заботу, будто вернулись в дом детства."
        primaryAction={{ href: '/menu', label: 'Посмотреть меню' }}
        fullHeight
      />

      <Section title="Почему выбирают нас" subtitle="Каждый гость — наш друг. Мы готовим с любовью и создаём атмосферу, в которую хочется возвращаться.">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-burgundy">
                <item.icon aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-2xl text-burgundy">{item.title}</h3>
              <p className="mt-3 text-base text-textSecondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        title="Популярные блюда"
        subtitle="Собрали любимые позиции, которые чаще всего выбирают гости Carre Caffe. Попробуйте и вы!"
      >
        <motion.div
          className="flex gap-6 overflow-x-auto pb-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {dishes.map((dish) => (
            <motion.div key={dish.name} variants={itemVariants} className="snap-start">
              <DishCard {...dish} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            href="http://wa.me/905374634693"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-burgundy px-8 py-3 font-medium text-gold shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Позвонить и заказать
          </Link>
        </div>
      </Section>

      <Section className="bg-white/80">
        <div className="rounded-3xl bg-burgundy px-8 py-12 text-center text-cream shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl">Хотите забронировать столик?</h3>
          <p className="mt-4 text-base md:text-lg">
            Напишите нам в WhatsApp, чтобы договориться о времени или оформить предзаказ на любимые блюда.
          </p>
          <Link
            href="http://wa.me/905374634693"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-burgundy shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Написать в WhatsApp
          </Link>
        </div>
      </Section>
    </>
  );
}
