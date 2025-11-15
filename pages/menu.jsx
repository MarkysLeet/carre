import Head from 'next/head';
import Link from 'next/link';
import Section from '@/components/Section';

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

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Меню | Carre Caffe</title>
      </Head>
      <section className="section-spacing bg-white/80">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl md:text-5xl">Меню</h1>
          <p className="mt-4 text-base text-textSecondary md:text-lg">
            Классические блюда русской кухни, приготовленные с любовью.
          </p>
        </div>
      </section>

      <Section>
        <div className="divide-y divide-cream/60 rounded-3xl bg-white shadow-xl">
          {dishes.map((dish) => (
            <div key={dish.name} className="flex flex-col gap-3 px-6 py-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-display text-2xl text-burgundy">{dish.name}</h2>
                <p className="mt-2 text-sm text-textSecondary md:text-base">{dish.description}</p>
              </div>
              <div className="text-lg font-semibold text-gold md:text-xl">{dish.price}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white/90">
        <div className="rounded-3xl bg-burgundy px-8 py-10 text-center text-cream shadow-xl">
          <h3 className="font-display text-3xl">Хотите заказать заранее?</h3>
          <p className="mt-4 text-base md:text-lg">Позвоните или напишите нам — мы подготовим любимые блюда к вашему приезду.</p>
          <Link
            href="http://wa.me/905374634693"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-medium text-burgundy shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Написать в WhatsApp
          </Link>
        </div>
      </Section>
    </>
  );
}
