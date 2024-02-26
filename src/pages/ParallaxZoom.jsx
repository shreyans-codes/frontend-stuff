import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const ParallaxZoom = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "../../public/images/1.jpeg",
      scale: scale4,
      width: "25vw",
      height: "25vh",
    },
    {
      src: "../../public/images/2.jpeg",
      scale: scale5,
      top: "-30vh",
      left: "5vw",
      width: "35vw",
      height: "30vh",
    },
    {
      src: "../../public/images/3.jpg",
      scale: scale6,
      top: "-10vh",
      left: "-25vw",
      width: "20vw",
      height: "45vh",
    },
    {
      src: "../../public/images/4.jpg",
      scale: scale5,
      left: "27.5vw",
      width: "25vw",
      height: "25vh",
    },
    {
      src: "../../public/images/5.jpg",
      scale: scale6,
      top: "27.5vh",
      left: "5vw",
      width: "20vw",
      height: "25vh",
    },
    {
      src: "../../public/images/6.jpg",
      scale: scale8,
      top: "27.5vh",
      left: "-22.5vw",
      width: "30vw",
      height: "25vh",
    },
    {
      src: "../../public/images/7.jpeg",
      scale: scale9,
      top: "22.5vh",
      left: "25vw",
      width: "15vw",
      height: "15vh",
    },
  ];
  return (
    <div className="mt-32 mb-40">
      <div ref={container} className="h-[300vh] relative">
        <div className=" sticky h-[100vh] top-0 overflow-hidden">
          {pictures.map(({ src, scale, top, left, width, height }, index) => {
            return (
              <motion.div
                style={{
                  scale: scale,
                }}
                key={index}
                className="el h-full w-full absolute top-0 flex justify-center items-center"
              >
                <div
                  style={{
                    top: top,
                    left: left,
                    width: width,
                    height: height,
                  }}
                  className="img-container relative "
                >
                  <img
                    src={src}
                    className=" object-cover h-full w-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ParallaxZoom;
