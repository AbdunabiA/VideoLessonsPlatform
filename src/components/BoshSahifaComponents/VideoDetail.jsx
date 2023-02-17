import { useLoaderData, defer, Await, useAsyncValue } from "react-router-dom";
import { getVideo } from "../../API_requests/api";
import { motion } from "framer-motion";
import { pageTransition3 } from "../../animations/animations";
import { Suspense } from "react";

const VideoDetail = () => {
  const video = useLoaderData();

  return (
    <motion.div
      variants={pageTransition3}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-[90vh] bg-black/30 backdrop-blur-md text-white"
    >
      VideoDetail
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={video.Video}
          errorElement={<p>Error loading a video</p>}
        >
          {(Video) => <p>{Video}</p>}
        </Await>
      </Suspense>
    </motion.div>
  );
};

export default VideoDetail;

export const loader = ({ params }) => {
  const videoPromise = getVideo(params.id);
  return defer({ Video: videoPromise });
};
