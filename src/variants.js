export const TextAnimation = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const ImageAnimation = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export function CustomAnimation(direction, duration) {
  return {
    initial: {
      x: direction === "toRight" ? -50 : direction === "toLeft" ? 50 : 0,
      y: direction === "toDown" ? -50 : direction === "toUp" ? 50 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: duration,
      },
    },
  };
}
