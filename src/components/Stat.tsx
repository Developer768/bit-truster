"use client";
import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

type StatType = {
  progress: number;
  heading: string;
  description: string;
};

const Stat: React.FC<StatType> = ({
  progress = 0,
  heading = "",
  description = "",
}) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });
  useEffect(() => {
    if (isInView) {
      const progressText = progressRef.current?.textContent;
      if (progressText != null) {
        animate(0, progress, {
          duration: 1,
          onUpdate: (cv) => {
            progressRef.current.textContent = cv.toFixed(0);
          },
        });
      }
    }
  }, [isInView,progress]);

  return (
    <div className="w-full animate-progress">
      <h6 className="pregress-number font-black text-[45px] leading-[45px] ">
        {/* <span className="progress-number" ref={progressRef}>0</span>% */}
        <span className="progress-number w-0 " ref={progressRef}>
          0
        </span>
        %
      </h6>
      <div className="progressbar-container pb-[20px]">
        <div className="progressbar my-[10px] w-full h-[5px] flex flex-row justify-start items-stretch bg-lightGrey rounded-full overflow-hidden">
          <motion.div
            className="progress w-[0%] bg-red "
            whileInView={{
              width: `${progress}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          ></motion.div>
        </div>
      </div>
      <h6 className="heading font-bold text-[27px] leading-[27px] ">
        {heading}
      </h6>
      <p className="heading text-textGrey mb-[10px]  text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px] xl:text-[18px] xl:leading-[27px] 2xl:text-[18px] 2xl:leading-[27px] 3xl:text-[18px] 3xl:leading-[27px]">
        {description}
      </p>
    </div>
  );
};

export default Stat;
