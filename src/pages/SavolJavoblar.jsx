import { motion, useIsPresent, usePresence } from 'framer-motion';
import { pageTransition } from '../animations/animations';
import Accordion from '../components/BoglanishComponents/Accordion';
import { Collapse } from "antd";

const SavolJavoblar = () => {
  const questions = [
    {
      question: "This is a question 1",
      answer: `A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.`,
    },
    {
      question: "This is a question 2",
      answer: `A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.`,
    },
    {
      question: "This is a question 3",
      answer: `A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.`,
    },
  ]; 

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={"savolJavoblar"}
      className="w-full overflow-y-scroll h-[90vh] relative bg-black/30 backdrop-blur-md text-white"
      id="main-page"
    >
      <div className="mt-10 p-10">
        <Accordion questions={questions}/>
      </div>
      <div className="mt-14">
        <h1 className="text-center text-4xl font-bold">Boshqa savol bormi?</h1>

        <form className="bg-slate-700 flex items-center justify-between mt-10 mx-auto w-[70%] border border-black p-2 rounded-md">
          <input
            type="text"
            className="focus:outline-none p-1 border w-[70%] rounded-md text-black"
            placeholder="Savol..."
          />
          <button className="relative border-2 border-white p-1 rounded-md m-2 text-center group overflow-hidden px-8 py-1">
            <span className="absolute w-0 h-full top-0 left-0 bg-blue-500 group-hover:w-full duration-300"></span>
            <span className="absolute w-0 h-full top-0 left-0 bg-black group-hover:w-full duration-700"></span>
            <span className="relative text-white font-bold">Send</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
  
}

export default SavolJavoblar