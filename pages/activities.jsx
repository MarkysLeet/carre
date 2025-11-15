import { motion } from 'framer-motion';
import ActivityCard from '@/components/ActivityCard';

const activities = [
  {
    title: 'Игра в Мафию',
    subtitle: 'Каждую субботу, 20:00',
    description:
      'Собираемся компанией, пьём чай, играем в Мафию. Призы, шутки и уютная атмосфера. Можно приходить компаниями или по одному — мы всех познакомим.',
    cta: {
      label: 'Записаться',
      href: 'https://wa.me/905306021733',
    },
  },
  {
    title: 'Живая музыка',
    subtitle: 'Пятница, 19:00',
    description:
      'Русские романсы и любимые песни под гитару. Тихий, камерный вечер для тех, кто хочет отдохнуть душой.',
  },
  {
    title: 'День блинов',
    subtitle: 'Воскресенье',
    description:
      'Всё меню блинов — со скидкой 20%. Идеальный повод заглянуть с друзьями и детьми.',
  },
];

const ActivitiesPage = () => {
  return (
    <div>
      <section
        className="relative flex min-h-[60vh] items-center justify-center text-center"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-container text-cream">
          <h1 className="font-serif text-4xl md:text-6xl">Вечера в Carre Caffe</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/80">
            Не только вкусная еда, но и душевные встречи. Загляните на наши активности и станьте частью дружной компании.
          </p>
        </div>
      </section>

      <section className="section-container section-spacing">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 rounded-3xl bg-burgundy px-8 py-12 text-center text-cream shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl">Хочешь своё событие в Carre Caffe?</h2>
          <p className="mt-4 text-base text-cream/80 md:text-lg">
            День рождения, вечер настольных игр или камерный концерт — расскажи нам о своей идее, и мы поможем всё организовать.
          </p>
          <a
            href="https://instagram.com/carre_caffe"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-3 text-sm font-semibold text-burgundy shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Написать в Instagram
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
