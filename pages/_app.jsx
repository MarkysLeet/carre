import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-creme text-charcoal font-sans">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="pt-20 flex flex-col min-h-screen"
        >
          <Component {...pageProps} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
