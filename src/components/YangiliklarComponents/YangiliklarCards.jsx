import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const YangiliklarCards = () => {
    const navigate = useNavigate();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {arr.map((ar, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          // animate={{opacity:0,x:0}}
          whileInView={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ y: -15 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          onClick={() => navigate(`${index}`)}
          // to={`${index}`}
          key={index}
          className="backdrop-blur-md shadow-gray-900 shadow-md border text-white p-5 rounded-lg cursor-pointer"
        >
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              alt="pic"
              className="rounded-md"
            />
          </div>
          <div className="mt-6">
            <p className="text-xl">This is a text for the picture</p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default YangiliklarCards