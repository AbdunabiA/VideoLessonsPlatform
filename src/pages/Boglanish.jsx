import { motion } from 'framer-motion';
import { pageTransition } from '../animations/animations';

const Boglanish = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] bg-black/30 backdrop-blur-md text-white"
      id='main-page'
    >
      Boglanish
    </motion.div>
  );
}

export default Boglanish