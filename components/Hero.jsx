import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Hero = ({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonHref,
  backgroundUrl
}) => {
  return (
    <section
      className="relative flex items-center justify-center text-center text-creme min-h-screen"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${backgroundUrl})`
      }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <motion.div
        className="relative z-10 container-default max-w-3xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-serif font-semibold text-5xl md:text-7xl lg:text-8xl leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-creme/80" variants={itemVariants}>
          {subtitle}
        </motion.p>
        {description && (
          <motion.p className="text-base md:text-lg text-creme/80" variants={itemVariants}>
            {description}
          </motion.p>
        )}
        {buttonLabel && buttonHref && (
          <motion.div variants={itemVariants}>
            <Link
              href={buttonHref}
              className="inline-block rounded-full bg-burgundy px-8 py-3 text-lg font-medium text-gold shadow-lg transition-transform duration-200 hover:scale-105"
            >
              {buttonLabel}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
