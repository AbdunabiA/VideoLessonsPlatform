import { motion } from 'framer-motion';
import { pageTransition } from '../animations/animations';
import Carousel from '../components/FoydaliKontentComponents/Carousel';

const kontent = [
  {
    img: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
  },
  {
    img: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
  },
  {
    img: "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20-1536x1024.jpg",
  },
];
const kontent1 = [
  {
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B853/production/_126978174_02.jpg.webp",
  },
  {
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B853/production/_126978174_02.jpg.webp",
  },
  {
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/B853/production/_126978174_02.jpg.webp",
  },
];

const FoydaliKontent = () => {

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={"foydaliKontent"}
      className="w-full overflow-y-scroll h-[90vh] text-white bg-black/30 backdrop-blur-md"
      id="main-page"
    >
      <div className="flex items-center justify-center mt-10">
        <select
          name="filter"
          id="filter"
          className="py-1 px-6 text-xl border-2 rounded-md focus:outline-none bg-slate-700"
        >
          <option value="">Filter</option>
          <option value="animation">Animation</option>
          <option value="loader">Loader</option>
          <option value="react">React</option>
        </select>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-3xl font-bold mb-5">Animations</h1>
        <Carousel kontent={kontent} />
        <h1 className="text-center text-3xl font-bold mb-5 mt-20">Loaders</h1>
        <Carousel kontent={kontent1} />
      </div>
    </motion.div>
  );
}

export default FoydaliKontent