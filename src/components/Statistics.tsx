"use client"
import React, { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

type StatisticsType = {
  stat: number;
  heading: string;
};

const Statistics: React.FC<StatisticsType> = ({ stat = 0, heading = "" }) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });
  useEffect(() => {
    if (isInView) {
      const progressText = progressRef.current?.textContent;
      if (progressText != null) {
        animate(0, stat, {
          duration: 1,
          onUpdate: (cv) => {
            progressRef.current.textContent = cv.toFixed(0);
          },
        });
      }
    }
  }, [isInView,stat]);
  return (
    <div className="p-[40px] post_shadow flex flex-col justify-center items-center w-[250px]">
      <h3 className="text-black font-semibold text-[69px] leading-[69px] text-center">
        <span className="progress-number w-0 " ref={progressRef}>
          0
        </span>
        +
      </h3>
      <h3 className="text-red uppercase text-[19px] leading-[48px] font-robotoSlab text-center">
        {heading}
      </h3>
    </div>
  );
};

export default Statistics;
