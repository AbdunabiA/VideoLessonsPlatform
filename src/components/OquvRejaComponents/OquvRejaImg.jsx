import { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const OquvRejaImg = ({src, id, title, des}) => {
    const [div, setDiv] = useState(false);
    const navigate = useNavigate()
  return (
    <motion.div
      onMouseEnter={() => {
        setDiv(true);
      }}
      onMouseLeave={() => {
        setDiv(false);
      }}
      className="relative shadow-md shadow-black rounded-md overflow-hidden cursor-pointer"
      animate={{ y: div ? -30 : 0 }}
      onClick={() => navigate(`${id}`)}
    >
      <motion.img
        // transition={{ duration: 0.7 }}
        src={src}
        alt="img"
        className='w-full h-full'
      />
      <div
        className={`absolute bottom-0 right-0 w-full ${
          div ? "h-full" : "h-0"
        } bg-gradient-to-t from-blue-700 text-center overflow-hidden transition-all duration-500 flex items-center justify-center `}
      >
        <div>
          <h1 className="text-3xl">{title}</h1>
          <p>{des}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default OquvRejaImg