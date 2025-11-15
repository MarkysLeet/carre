import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = ({ title, subtitle, description, cta }) => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${cta?.background || ''})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" aria-hidden="true" />
      <motion.div
        className="section-container relative z-10 mx-auto text-center text-cream"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="font-serif text-5xl leading-tight md:text-7xl lg:text-8xl"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p className="mt-6 text-xl md:text-2xl" variants={itemVariants}>
          {subtitle}
        </motion.p>
        {description && (
          <motion.p className="mt-6 mx-auto max-w-2xl text-base text-cream/80 md:text-lg" variants={itemVariants}>
            {description}
          </motion.p>
        )}
        {cta?.label && (
          <motion.div className="mt-10" variants={itemVariants}>
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-burgundy px-10 py-3 text-lg font-semibold text-gold shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              {cta.label}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
