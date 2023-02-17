import { motion} from "framer-motion";

import { pageTransition } from '../animations/animations';
import YangiliklarCards from '../components/YangiliklarComponents/YangiliklarCards';

const Yangiliklar = () => {
    
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] text-white bg-black/30 backdrop-blur-md"
      id="main-page"
    >
      <h1 className="text-5xl text-center font-bold mt-10">Dev news</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        <YangiliklarCards />
      </div>
    </motion.div>
  );
}

export default Yangiliklar