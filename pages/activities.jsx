import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ActivityCard from '@/components/ActivityCard';

const activities = [
  {
    title: 'Игра в Мафию',
    subtitle: 'Каждую субботу, 20:00',
    description:
      'Собираемся компанией, пьём чай, играем в Мафию. Призы, шутки и уютная атмосфера. Можно приходить компаниями или по одному — мы всех познакомим.',
    cta: { href: 'http://wa.me/905374634693', label: 'Записаться' }
  },
  {
    title: 'Живая музыка',
    subtitle: 'Пятница, 19:00',
    description: 'Русские романсы и любимые песни под гитару. Тихий, камерный вечер для тех, кто хочет отдохнуть душой.'
  },
  {
    title: 'День блинов',
    subtitle: 'Воскресенье',
    description: 'Всё меню блинов — со скидкой 20%. Идеальный повод заглянуть с друзьями и детьми.'
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

export default function ActivitiesPage() {
  return (
    <>
      <Head>
        <title>Активности | Carre Caffe</title>
      </Head>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
        title="Вечера в Carre Caffe"
        subtitle="Не только вкусная еда, но и душевные встречи."
        description="Мы собираем друзей, играем в настольные игры, слушаем музыку и создаём новые тёплые истории."
        align="left"
      />

      <Section title="Ближайшие события" subtitle="Выбирайте настроение и бронируйте место заранее.">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {activities.map((activity) => (
            <motion.div key={activity.title} variants={itemVariants}>
              <ActivityCard {...activity} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white/90">
        <div className="rounded-3xl bg-burgundy px-8 py-12 text-center text-cream shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl">Хочешь своё событие?</h3>
          <p className="mt-4 text-base md:text-lg">
            День рождения, встреча клуба или семейный праздник — напиши нам, и мы поможем организовать атмосферный вечер в Carre
            Caffe.
          </p>
          <Link
            href="https://instagram.com/carre_caffe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-burgundy shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Написать в Instagram
          </Link>
        </div>
      </Section>
    </>
  );
}
