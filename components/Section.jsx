import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const Section = ({ eyebrow, title, description, children, align = 'center' }) => {
  return (
    <section className="section-container section-spacing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className={`mx-auto max-w-4xl ${alignClasses[align]}`}
      >
        {eyebrow && (
          <motion.span
            variants={childVariants}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy"
          >
            {eyebrow}
          </motion.span>
        )}
        {title && (
          <motion.h2
            variants={childVariants}
            className="mt-4 font-serif text-3xl font-semibold text-dark md:text-4xl"
          >
            {title}
          </motion.h2>
        )}
        {description && (
          <motion.p variants={childVariants} className="mt-6 text-base text-muted md:text-lg">
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div variants={childVariants} className="mt-12">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Section;
