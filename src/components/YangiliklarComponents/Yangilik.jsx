import React from "react";
import { useLoaderData } from "react-router-dom";
import { getYangilik } from "../../API_requests/api";
import { motion } from "framer-motion";
import { pageTransition3 } from "../../animations/animations";

const Yangilik = () => {
  const news = useLoaderData();

  return (
    <motion.div
      variants={pageTransition3}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-[90vh] bg-black/30 backdrop-blur-md text-white"
    >
      Yangilik
      <p>{news}</p>
    </motion.div>
  );
};

export default Yangilik;

export const loader = ({ params }) => {
  const newsId = params.id;
  //   console.log(newsId);
  return getYangilik(newsId);
};
