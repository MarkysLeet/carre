import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

const team = [
  {
    name: 'Иван',
    role: 'Шеф-повар',
    description: 'Отвечает за идеальные борщи, пельмени и котлеты. Любит экспериментировать с домашними рецептами.'
  },
  {
    name: 'Анна',
    role: 'Хозяйка',
    description: 'Создаёт уют, подбирает музыку и встречает гостей лично. Всегда угостит чаем.'
  },
  {
    name: 'Алексей',
    role: 'Официант',
    description: 'Знает меню наизусть, подскажет идеальное сочетание и сделает вечер лёгким и приятным.'
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

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О нас | Carre Caffe</title>
      </Head>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1489515217757-5fd1be406fef"
        title="О нас"
        subtitle="Carre Caffe — кусочек России в Манавгате."
        description="Мы открылись, чтобы каждый, кто скучает по родному вкусу, мог найти здесь тепло и поддержку."
        align="left"
      />

      <Section className="bg-white/80">
        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl text-burgundy md:text-4xl">История Carre Caffe</h2>
            <p className="mt-6 text-base leading-7 text-textSecondary md:text-lg">
              Carre Caffe — это кусочек России в Турции. Мы открылись в 2023 году, чтобы подарить вам вкус родного дома. Борщ,
              пельмени, блины — всё как у бабушки. Мы верим, что еда — это язык, который понимают без слов. Приходите всей
              семьёй, с друзьями и детьми — остальное мы возьмём на себя.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl bg-cover bg-center p-8 text-cream shadow-xl"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe)' }}
            variants={itemVariants}
          >
            <div className="rounded-2xl bg-black/50 p-6">
              <h3 className="font-display text-2xl">Наш шеф-повар</h3>
              <p className="mt-4 text-sm md:text-base">
                Иван вырос в семье поваров и бережно собирал рецепты у своих бабушек и друзей. Теперь делится ими с вами в Carre
                Caffe, готовя с душой и вниманием к деталям.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-white/90 p-8 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-display text-3xl text-burgundy">Контакты и адрес</h3>
              <div className="space-y-3 text-base text-textSecondary">
                <div>
                  📍 Kazım Karabekir Cd. No:32, 07330 Manavgat/Antalya —{' '}
                  <Link
                    href="https://www.google.com/maps/place/Kaz%C4%B1m+Karabekir+Cd.+No:32,+07330+Manavgat/Antalya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy underline"
                  >
                    открыть карту
                  </Link>
                </div>
                <div>
                  📞{' '}
                  <Link href="tel:+905306021733" className="text-burgundy underline">
                    +90 530 602 17 33
                  </Link>
                </div>
                <div>
                  📸{' '}
                  <Link href="https://instagram.com/carre_caffe" target="_blank" rel="noopener noreferrer" className="text-burgundy underline">
                    @carre_caffe
                  </Link>
                </div>
                <div>
                  💬{' '}
                  <Link href="https://wa.me/905306021733" target="_blank" rel="noopener noreferrer" className="text-burgundy underline">
                    Написать в WhatsApp
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <iframe
                title="Карта Carre Caffe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.546538692779!2d31.464644515080122!3d36.78628077995124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3eb5a2c2d6e41%3A0xefaaabca9bf1c97!2sKaz%C4%B1m%20Karabekir%20Cd.%20No%3A32%2C%2007330%20Manavgat%2FAntalya!5e0!3m2!1sru!2str!4v1700000000000!5m2!1sru!2str"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="w-full rounded-2xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Команда Carre Caffe" subtitle="Люди, которые каждый день создают атмосферу тёплого дома.">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-burgundy text-3xl text-gold">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-4 font-display text-2xl text-burgundy">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
              <p className="mt-3 text-sm text-textSecondary">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
