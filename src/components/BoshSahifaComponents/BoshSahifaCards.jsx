import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const BoshSahifaCards = () => {
    const navigate = useNavigate();
    const arr = [1, 2, 3, 5, 6, 7, 8, 9, 0, 1, 2, 3];
  return (
    <>
      {arr.map((ar, index) => (
        <motion.div
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -15 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100 }}
          key={index}
          className="bg-blue-700 rounded-lg p-2 text-white cursor-pointer shadow-md shadow-gray-900"
          onClick={() => navigate(`${index}`)}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe88wV09Vym1KLihYlL3eE3-Pq6jT_3vykRl0aTChX&s"
            alt="img"
            className="w-full"
          />
          <p className="text-xl font-bold my-4">This is a sample video</p>
          <p>This is a second text for this video</p>
        </motion.div>
      ))}
    </>
  );
}

export default BoshSahifaCards