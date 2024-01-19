import { Transition } from "framer-motion";

export const buttonTapAnimation = {
  scale: [1, 1.2, 1], // Animate from 1 to 1.1 and back to 1
  transition: {
    duration: 0.3, // Animation duration
    ease: "easeInOut", // Easing function
  },
};

export const cardAnimation = {
  hidden: { opacity: 0, y: 90 },
  visible: { opacity: 1, y: 0 },
};

export const transition= (index: number) => {
  return {
    duration: 0.5,
    delay: 0.1 * index,
    ease: "easeInOut",
  };
};
