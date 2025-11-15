import { motion } from 'framer-motion';

const Section = ({ title, subtitle, children, background = 'bg-transparent', centered = false }) => {
  return (
    <motion.section
      className={`${background} section-padding`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={`container-default ${centered ? 'text-center' : ''}`}>
        {title && (
          <div className={centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
          </div>
        )}
        <div className={`mt-10 ${centered ? 'mx-auto' : ''}`}>{children}</div>
      </div>
    </motion.section>
  );
};

export default Section;
