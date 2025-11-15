import Section from '@/components/Section';
import ActivityCard from '@/components/ActivityCard';
import { motion } from 'framer-motion';

const ActivitiesPage = () => {
  return (
    <>
      <section
        className="relative hero-overlay text-creme"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)'
        }}
      >
        <div className="container-default flex min-h-[60vh] flex-col justify-center space-y-4 py-24">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Вечера в Carre Caffe
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-creme/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Не только вкусная еда, но и душевные встречи.
          </motion.p>
        </div>
      </section>

      <Section title="Календарь событий" subtitle="Присоединяйтесь к нашим тёплым вечерам">
        <div className="grid gap-8 lg:grid-cols-3">
          <ActivityCard
            title="Игра в Мафию"
            subtitle="Каждую субботу, 20:00"
            description="Собираемся компанией, пьём чай, играем в Мафию. Призы, шутки и уютная атмосфера. Можно приходить компаниями или по одному — мы всех познакомим."
            ctaLabel="Записаться"
            ctaHref="https://wa.me/905306021733"
            highlight
          />
          <ActivityCard
            title="Живая музыка"
            subtitle="Пятница, 19:00"
            description="Русские романсы и любимые песни под гитару. Тихий, камерный вечер для тех, кто хочет отдохнуть душой."
          />
          <ActivityCard
            title="День блинов"
            subtitle="Воскресенье"
            description="Всё меню блинов — со скидкой 20%. Идеальный повод заглянуть с друзьями и детьми."
          />
        </div>
      </Section>

      <Section centered background="bg-white">
        <div className="mx-auto max-w-2xl rounded-3xl bg-creme px-8 py-12 text-center shadow-xl">
          <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
            Хочешь своё событие в Carre Caffe?
          </h3>
          <p className="mt-4 text-lg text-muted">
            Напиши нам — подберём дату, меню и поможем сделать вечер незабываемым.
          </p>
          <a
            href="https://instagram.com/carre_caffe"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-burgundy px-8 py-3 text-lg font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Написать в Instagram
          </a>
        </div>
      </Section>
    </>
  );
};

export default ActivitiesPage;
