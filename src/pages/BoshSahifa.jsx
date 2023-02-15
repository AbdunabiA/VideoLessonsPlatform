import { useLoaderData } from "react-router-dom";
import { getVideos } from "../API_requests/api";
import { motion } from "framer-motion";
import { pageTransition } from "../animations/animations";
import BoshSahifaCards from "../components/BoshSahifaComponents/BoshSahifaCards";

const BoshSahifa = () => {
  const videos = useLoaderData();

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] bg-black/30 backdrop-blur-md text-white"
      id="main-page"
    >
      <div className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto mt-10 border">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe88wV09Vym1KLihYlL3eE3-Pq6jT_3vykRl0aTChX&s"
          alt="img"
          className="w-full"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center font-bold mt-10 lg:mt-20">
        Front-end news
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 mt-8 gap-10 overflow-hidden">
        <BoshSahifaCards />
      </div>
    </motion.div>
  );
};

export default BoshSahifa;

export const loader = () => {
  return getVideos();
};
