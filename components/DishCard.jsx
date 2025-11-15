import Image from 'next/image';
import { motion } from 'framer-motion';

const DishCard = ({ title, price, description, image }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.05, y: -4 }}
      className="min-w-[260px] max-w-xs rounded-3xl bg-white shadow-md overflow-hidden border border-creme"
    >
      {image ? (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="h-48 w-full bg-creme" />
      )}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
          <span className="font-semibold text-gold">{price}</span>
        </div>
        <p className="text-sm text-muted leading-6">{description}</p>
      </div>
    </motion.article>
  );
};

export default DishCard;
