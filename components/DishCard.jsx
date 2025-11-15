import { motion } from 'framer-motion';

const DishCard = ({ name, price, description }) => {
  return (
    <motion.div
      className="min-w-[260px] rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="font-display text-2xl text-burgundy">{name}</h3>
      <p className="mt-2 text-lg font-semibold text-gold">{price}</p>
      <p className="mt-4 text-sm text-textSecondary">{description}</p>
    </motion.div>
  );
};

export default DishCard;
