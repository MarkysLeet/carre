import { motion } from 'framer-motion';

const Section = ({ title, subtitle, children, className = '' }) => {
  return (
    <motion.section
      className={`section-spacing ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        {title && <h2 className="font-display text-3xl md:text-4xl">{title}</h2>}
        {subtitle && <p className="mt-4 max-w-2xl text-base text-textSecondary md:text-lg">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </motion.section>
  );
};

export default Section;
