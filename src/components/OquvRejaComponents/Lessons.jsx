import { useNavigate } from "react-router-dom";
import { pageTransition3 } from "../../animations/animations";
import { motion } from "framer-motion";

const Lessons = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
  const navigate = useNavigate();
  return (
    <motion.div
      variants={pageTransition3}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] bg-black/30 backdrop-blur-md text-white"
      id="main-page"
    >
      {arr.map((e, index) => {
        return (
          <div
            onClick={() => navigate(`${index}`)}
            key={index}
            className="p-5 border cursor-pointer"
          >
            <p>{index}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Lessons;
