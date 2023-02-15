export const pageTransition = {
  hidden: { opacity: 0, scale:0.7, },
  visible: { opacity: 1, scale: 1, transition:{type:'spring', stiffness:100} },
  exit: { opacity: 0, x: "-100%" },
};
export const pageTransition1 = {
  hidden: { rotate: 180, scale:0 },
  visible: {
    rotate: 0,
    scale:1,
    transition: { type: "spring", stiffness: 100 },
  },
  exit: { opacity: 0, x: "-100%" },
};
export const pageTransition2 = {
  hidden: { opacity: 1, x:'-150%'},
  visible: {
    opacity: 1,
    x:0,
    transition: { type: "spring", stiffness: 70 },
  },
  exit: { opacity: 0, x: "-100%" },
};
export const pageTransition3 = {
  hidden: { opacity: 1, y: "150%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70 },
  },
  exit: { opacity: 0, x: "-100%" },
};
export const pageTransition4 = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: "-100%" },
};



export const boshSahifaCardContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren : 0.2} },
};
export const boshSahifaCards = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    transition: { type: "spring", stiffness: 100 },
    whileInView: { opacity: 1, y: 0 },
  },
};