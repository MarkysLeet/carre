import Section from '@/components/Section';
import TeamCard from '@/components/TeamCard';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Иван',
    role: 'Шеф-повар',
    description: 'Следит, чтобы каждый борщ был насыщенным, а каждая котлета — сочной.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Анна',
    role: 'Хозяйка',
    description: 'Встречает гостей, запоминает любимые блюда и создаёт атмосферу дома.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Алексей',
    role: 'Официант',
    description: 'Знает меню наизусть, советует лучшую пару к каждому блюду.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  }
];

const AboutPage = () => {
  return (
    <>
      <section
        className="relative hero-overlay text-creme"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80)'
        }}
      >
        <div className="container-default flex min-h-[60vh] flex-col justify-center space-y-4 py-24">
          <motion.h1
            className="font-serif text-5xl md:text-6xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            О нас
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-creme/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Carre Caffe — кусочек России в Манавгате.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl text-charcoal">История</h2>
            <p className="text-lg leading-7 text-muted">
              Carre Caffe — это кусочек России в Турции. Мы открылись в 2023 году, чтобы подарить вам вкус родного дома. Борщ,
              пельмени, блины — всё как у бабушки. Мы верим, что еда — это язык, который понимают без слов. Приходите всей
              семьёй, с друзьями и детьми — остальное мы возьмём на себя.
            </p>
            <p className="text-lg leading-7 text-muted">
              Каждая деталь — от самовара до музыки по вечерам — напоминает о доме. Мы говорим на русском, турецком и языке
              гостеприимства. У нас принимают так, как встречают старых друзей.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl bg-white shadow-xl border border-creme"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=600&q=80"
              alt="Наш шеф-повар"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-2xl text-charcoal">Наш шеф-повар</h3>
              <p className="mt-2 text-sm text-muted">
                Иван вырос в Сибири, учился в Москве и принёс в Турцию вкус зимних вечеров с самоваром.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="bg-creme/60">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            className="rounded-3xl bg-white/90 p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl text-charcoal">Контакты и адрес</h3>
            <div className="mt-6 space-y-4 text-muted">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <a
                  href="https://www.google.com/maps/place/Kaz%C4%B1m+Karabekir+Cd.+No:32,+07330+Manavgat/Antalya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-left text-muted hover:text-burgundy"
                >
                  Kazım Karabekir Cd. No:32, 07330 Manavgat/Antalya
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+905306021733" className="hover:text-burgundy">
                  +90 530 602 17 33
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📸</span>
                <a href="https://instagram.com/carre_caffe" target="_blank" rel="noreferrer" className="hover:text-burgundy">
                  @carre_caffe
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <a href="https://wa.me/905306021733" target="_blank" rel="noreferrer" className="hover:text-burgundy">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              title="Карта Carre Caffe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.006064675931!2d31.45082027652003!3d36.78719117226066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcd025bc6241df%3A0x5e264926427d558b!2sKaz%C4%B1m%20Karabekir%20Cd.%20No%3A32%2C%2007330%20Manavgat%2FAntalya!5e0!3m2!1sru!2str!4v1709142264000!5m2!1sru!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </Section>

      <Section title="Команда" subtitle="Люди, которые делают Carre Caffe таким тёплым" centered>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
