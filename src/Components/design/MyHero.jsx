import { useEffect, useState } from "react";
import { ScrollParallax, MouseParallax } from "react-just-parallax"; // Switch to ScrollParallax

export const BackgroundShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square overflow-hidden md:-top-[38.5rem] xl:-top-[32rem]">
      {/* Organic shapes with soft colors */}
      <ScrollParallax speed={0.2}>
        {" "}
        {/* Adjust speed for subtle movement */}
        <svg className="absolute w-full h-full">
          <path
            d="M200 0 Q 100 200, 200 400 L 800 200 Q 700 0, 200 0 Z"
            fill="#F0EFFF"
            opacity="0.2"
          />
          <path
            d="M400 0 C 200 100, 50 300, 400 500 C 600 300, 800 100, 400 0 Z"
            fill="#D1EFFF"
            opacity="0.3"
          />
          <path
            d="M600 400 C 800 200, 900 0, 600 0  C 400 200, 200 400, 600 400 Z"
            fill="#B3DFFF"
            opacity="0.1"
          />
          {/* Add more subtle medical shapes here */}
          <path
            d="M300 200 A 50 50 0 0 1 350 250 L 300 300 Z"
            stroke="#99D3FF"
            fill="transparent"
            strokeWidth="2"
          />
          <ellipse
            cx="500"
            cy="400"
            rx="80"
            ry="40"
            fill="#EBF5FF"
            opacity="0.1"
          />
        </svg>
      </ScrollParallax>
    </div>
  );
};
