import { useState } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/animations";
import OquvRejaImg from "./OquvRejaImg";

const OquvReja = () => {
  const [stats, setStats] = useState(false);

  const imgs = [
    {
      src: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
    },
    {
      src: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
    },
    {
      src: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
    },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] relative bg-black/30 backdrop-blur-md text-white"
      id="main-page"
    >
      <div
        onClick={() => {
          setStats(!stats);
        }}
        className="w-[20%] sm:w-[10%] h-[10%] bg-slate-800 absolute right-0 top-0 flex items-center justify-center rounded z-20 cursor-pointer overflow-hidden group"
      >
        <span className="absolute w-0 h-full top-0 left-0 bg-blue-500 group-hover:w-full duration-500"></span>
        <span className="absolute w-0 h-full top-0 left-0 bg-black group-hover:w-full duration-1000"></span>
        <p className="text-white font-bold relative">STATS</p>
      </div>
      <div
        className={` h-screen bg-slate-700/80 rounded-b absolute right-0 top-0 backdrop-blur-md overscroll-none z-10 ${
          stats ? "w-[80%]" : "w-[0]"
        } duration-1000`}
      ></div>
      {/* //? 1-3 OY */}
      <div>
        <h1 className="text-center mt-8 text-4xl font-extrabold">1-3 OY</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 border-2 border-slate-600 p-4 m-4 shadow-lg shadow-slate-700 rounded-lg">
          {imgs.map((img, index) => (
            <OquvRejaImg
              key={index}
              src={img.src}
              id={index}
              title="something"
              des="something something"
            />
          ))}
        </div>
      </div>
      {/* //? 3-6 OY */}
      <div>
        <h1 className="text-center mt-8 text-4xl font-extrabold">3-6 OY</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 border-2 border-slate-600 p-4 m-4 shadow-lg shadow-slate-700 rounded-lg">
          {imgs.map((img, index) => (
            <OquvRejaImg
              key={index}
              src={img.src}
              id={index}
              title="something"
              des="something something"
            />
          ))}
        </div>
      </div>
      {/* //? BIG PROJECT */}
      <div>
        <h1 className="text-center mt-8 text-4xl font-extrabold">7 OY</h1>
        <div className="flex items-center justify-around mt-5 border-2 border-slate-600 p-4 m-4 shadow-lg shadow-slate-700 rounded-lg">
          <p className="text-center text-3xl font-bold">BIG PROJECT</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OquvReja;
