import Image from 'next/image';
import { motion } from 'framer-motion';

const TeamCard = ({ name, role, description, image }) => {
  return (
    <motion.div
      className="rounded-3xl bg-white p-8 text-center shadow-md border border-creme"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(128,0,32,0.15)' }}
    >
      <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-creme">
        {image ? (
          <Image src={image} alt={name} width={96} height={96} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl text-burgundy">🍽</div>
        )}
      </div>
      <h3 className="mt-6 font-serif text-2xl text-charcoal">{name}</h3>
      <p className="mt-1 text-sm uppercase tracking-wide text-gold">{role}</p>
      <p className="mt-4 text-sm text-muted leading-6">{description}</p>
    </motion.div>
  );
};

export default TeamCard;
