import { motion } from 'framer-motion';

const DishCard = ({ name, price, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="min-w-[240px] rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5"
    >
      <h3 className="font-serif text-2xl text-dark">{name}</h3>
      <p className="mt-2 text-lg font-semibold text-gold">{price}</p>
      <p className="mt-4 text-sm text-muted">{description}</p>
    </motion.div>
  );
};

export default DishCard;
