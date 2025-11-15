import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  description,
  primaryAction,
  fullHeight = false,
  align = 'center'
}) => {
  const alignmentClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <section
      className={`relative flex items-center ${fullHeight ? 'min-h-screen' : 'min-h-[60vh]'} overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="section-container relative z-10 py-24">
        <motion.div
          className={`max-w-3xl ${alignmentClass}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-display text-4xl text-cream drop-shadow md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.h2 className="mt-6 font-display text-xl text-cream/90 md:text-2xl" variants={itemVariants}>
              {subtitle}
            </motion.h2>
          )}
          {description && (
            <motion.p className="mt-6 max-w-2xl text-base text-cream/80 md:text-lg" variants={itemVariants}>
              {description}
            </motion.p>
          )}
          {primaryAction && (
            <motion.div className="mt-10" variants={itemVariants}>
              <Link
                href={primaryAction.href}
                className="inline-block rounded-full bg-burgundy px-8 py-3 font-medium text-gold shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {primaryAction.label}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
