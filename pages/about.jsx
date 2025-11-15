import { motion } from 'framer-motion';

const historyVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  {
    name: 'Иван',
    role: 'Шеф-повар',
    description: 'Следит, чтобы каждая тарелка была идеальной, а бульон играл на всех нотах.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  },
  {
    name: 'Анна',
    role: 'Хозяйка',
    description: 'Встречает гостей, создаёт уют и помнит любимые блюда постоянных гостей.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
  },
  {
    name: 'Алексей',
    role: 'Официант',
    description: 'Всегда с улыбкой, с радостью расскажет о каждом блюде и подскажет лучший выбор.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
];

const AboutPage = () => {
  return (
    <div>
      <section
        className="relative flex min-h-[60vh] items-center"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="section-container py-24 text-cream">
          <h1 className="font-serif text-4xl md:text-6xl">О нас</h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/80">
            Carre Caffe — кусочек России в Манавгате. Мы соединяем традиции, любовь к еде и гостеприимство.
          </p>
        </div>
      </section>

      <section className="section-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            variants={historyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-dark md:text-4xl">История Carre Caffe</h2>
            <p className="mt-6 text-base leading-7 text-muted md:text-lg">
              Carre Caffe — это кусочек России в Турции. Мы открылись в 2023 году, чтобы подарить вам вкус родного дома. Борщ,
              пельмени, блины — всё как у бабушки. Мы верим, что еда — это язык, который понимают без слов. Приходите всей
              семьёй, с друзьями и детьми — остальное мы возьмём на себя.
            </p>
            <p className="mt-6 text-base leading-7 text-muted md:text-lg">
              Команда Carre Caffe — это люди, которые любят своё дело. Мы встречаем гостей по имени, запоминаем их любимые
              блюда и создаём пространство, куда хочется возвращаться снова и снова.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white/90 p-6 text-dark shadow-xl ring-1 ring-black/5 backdrop-blur"
            variants={historyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="h-48 w-full rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(128,0,32,0.2), rgba(128,0,32,0.6)), url(https://images.unsplash.com/photo-1555992336-cbf3b7061639)',
              }}
            />
            <h3 className="mt-6 font-serif text-2xl">Наш шеф-повар</h3>
            <p className="mt-3 text-sm text-muted">
              Иван лично контролирует каждую заготовку, чтобы вкус был точь-в-точь как дома. Любовь к ремеслу — главный
              ингредиент.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container section-spacing">
        <motion.div
          className="rounded-3xl bg-white/90 p-10 shadow-xl ring-1 ring-black/5 backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl text-dark md:text-4xl">Контакты и адрес</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-sm text-muted md:text-base">
              <div>
                <span className="font-semibold text-dark">📍 Адрес</span>
                <p className="mt-2 text-muted">
                  Kazım Karabekir Cd. No:32, 07330 Manavgat/Antalya
                </p>
                <a
                  href="https://www.google.com/maps/place/Kaz%C4%B1m+Karabekir+Cd.+No:32,+07330+Manavgat/Antalya"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-burgundy hover:text-gold"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">📌</span>
                  Открыть в Google Maps
                </a>
              </div>
              <div>
                <span className="font-semibold text-dark">📞 Телефон</span>
                <div className="mt-2">
                  <a href="tel:+905306021733" className="text-burgundy hover:text-gold">
                    +90 530 602 17 33
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/carre_caffe" target="_blank" rel="noreferrer" className="hover:text-gold">
                  📸 @carre_caffe
                </a>
                <a href="https://wa.me/905306021733" target="_blank" rel="noreferrer" className="hover:text-gold">
                  💬 Написать в WhatsApp
                </a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.338808852587!2d31.445211!3d36.7865312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c2f71b366d5a37%3A0x99ee7cd7fead3c1a!2sKaz%C4%B1m%20Karabekir%20Cd.%20No%3A32%2C%2007330%20Manavgat%2FAntalya!5e0!3m2!1sru!2str!4v1709484692000!5m2!1sru!2str"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-2xl border-0"
                title="Карта Carre Caffe"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-container section-spacing">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-dark md:text-4xl">Команда</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Наши люди — сердце Carre Caffe. Они знают, как создать праздник из обычного вечера и с удовольствием поделятся
            историей каждого блюда.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${member.image})`,
                }}
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-dark">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-burgundy">{member.role}</p>
                <p className="mt-4 text-sm text-muted">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
