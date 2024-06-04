"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Infinitescroll({
  currentName,
  arrayData,
  path,
}: {
  currentName: string;
  arrayData: any[];
  path: string;
}) {
  const router = useRouter();
  const [timeoutId, setTimeoutId] = useState<number | NodeJS.Timeout | null>(
    null
  );

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  const currentIndex = arrayData.findIndex((item) => item.name === currentName);

  const handleRedirect = (index: number) => {
    const nextIndex = (index + 1) % arrayData.length;
    const id = setTimeout(() => {
      router.push(`${path ? path : ""}/${arrayData[nextIndex].name}`);
    }, 1500);
    setTimeoutId(id);
  };

  useEffect(() => {
    if (inView && currentIndex !== -1) {
      handleRedirect(currentIndex);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [inView, currentIndex]);

  return (
    <section ref={ref} className="text-neutral-700 text-center">
      <svg
        className="animate-spin mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="50"
        height="50"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
      >
        <g data-idx="1">
          <circle
            fill="none"
            strokeWidth="10"
            stroke="#fafafa"
            r="30"
            cy="50"
            cx="50"
            data-idx="2"
          ></circle>
          <circle
            fill="none"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="#ba0ce9"
            r="30"
            cy="50"
            cx="50"
            data-idx="3"
            transform="matrix(-0.12535141161279867,-0.9921124047237182,0.9921124047237182,-0.12535141161279867,6.66195034445402,105.87319081682585)"
            strokeDasharray="32.4214px, 156.074px"
          ></circle>
        </g>
        <text
          data-watermark="true"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeOpacity="0.1"
          fill="black"
          fillOpacity="0.1"
          stroke="white"
          strokeWidth="1"
          fontSize="5.0"
          x="50"
          y="50"
          data-idx="7"
          style={{ opacity: 1 }}
        >
          LOADING.IO
        </text>
      </svg>
    </section>
  );
}
