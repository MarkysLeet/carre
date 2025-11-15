import Section from '@/components/Section';
import { motion } from 'framer-motion';

const menuItems = [
  {
    title: 'Борщ',
    price: '180 ₺',
    description: 'Классический украинский борщ со сметаной и пампушками. Аромат детства.'
  },
  {
    title: 'Пельмени',
    price: '200 ₺',
    description: 'Сибирские пельмени с мясом, подаются со сливочным маслом и укропом.'
  },
  {
    title: 'Котлеты по-киевски',
    price: '250 ₺',
    description: 'Сочная куриная котлета с маслом внутри. Хрустящая корочка.'
  },
  {
    title: 'Оливье',
    price: '150 ₺',
    description: 'Тот самый салат. Колбаса, картофель, горошек, майонез.'
  },
  {
    title: 'Блины с красной икрой',
    price: '300 ₺',
    description: 'Тонкие блинчики с икрой и сметаной.'
  },
  {
    title: 'Чай с самоваром',
    price: '80 ₺',
    description: 'Традиционный русский чай из самовара.'
  },
  {
    title: 'Медовик',
    price: '120 ₺',
    description: 'Многослойный торт с кремом. Сладко и нежно.'
  },
  {
    title: 'Квас',
    price: '60 ₺',
    description: 'Домашний квас. Освежает в жару.'
  }
];

const MenuPage = () => {
  return (
    <>
      <section
        className="relative hero-overlay text-creme"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1600&q=80)'
        }}
      >
        <div className="container-default flex min-h-[60vh] flex-col justify-center space-y-4 py-24">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Меню
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-creme/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Классические блюда русской кухни, приготовленные с любовью.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="divide-y divide-creme/80 rounded-3xl bg-white shadow-xl">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-2 px-6 py-6 md:flex-row md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-6">{item.description}</p>
              </div>
              <span className="text-lg font-semibold text-gold md:text-xl">{item.price}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-muted">Хотите заказать заранее?</p>
          <a
            href="https://wa.me/905306021733"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-burgundy px-8 py-3 text-lg font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Написать в WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
};

export default MenuPage;
