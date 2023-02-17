import { NavLink, useLoaderData } from "react-router-dom";
import { getOquvVideo } from "../../API_requests/api";
import { motion } from "framer-motion";
import { pageTransition3 } from "../../animations/animations";
import Chat from "./Chat";
import DragAndDropFile from "./DragAndDropFile";

const OquvRejaVideo = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
  const video = useLoaderData();
  return (
    <motion.div
      variants={pageTransition3}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] bg-black/30 backdrop-blur-md text-white flex"
      id="main-page"
    >
      <div className="w-[80%] p-10 overflow-y-scroll" id="change-scrollbar">
        <div className="w-full h-[500px] bg-slate-700 rounded">{video}</div>
        <div className="w-full p-5 mt-5 border rounded">
          <h1 className="font-bold text-3xl">Lorem, ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            aperiam repellat harum assumenda aliquam voluptas unde vel,
            exercitationem architecto! Distinctio quae dolore necessitatibus
            eaque magnam ducimus, nulla ut quisquam molestiae?
          </p>
        </div>
        <Chat />
        <DragAndDropFile />
      </div>
      <div className=" w-[20%] flex flex-col space-y-2 mt-10 mr-2">
        {list.map((num, index) => (
          <NavLink
            to={`../${index}`}
            key={index}
            // relative="path"
            className="text-2xl text-center border-2 rounded-lg"
          >
            {num}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default OquvRejaVideo;

export const loader = ({ params }) => {
  const videoId = params.id;
  return getOquvVideo(videoId);
};
