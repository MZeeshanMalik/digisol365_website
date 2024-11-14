import React from "react";

function ExperienceBadge() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 bg-green-500 rounded-full shadow-lg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
          >
            <path d="M0,0 L10,10 M10,0 L0,10" stroke="#000" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Circular Text */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="absolute w-[150%] h-[150%] rotate-[100deg]"
        >
          <path
            id="textcircle"
            d="
              M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0
            "
            fill="none"
          />
          <text fontSize="10" fontWeight="bold" fill="#00A86B">
            <textPath href="#textcircle" startOffset="0" letterSpacing="3">
              # WE ARE # PROVIDED # IT SERVICES # WE ARE #
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Text */}
      <div className="z-10 flex flex-col items-center text-center">
        <span className="text-black text-6xl font-extrabold">10</span>
        <span className="text-black text-xl">Years</span>
      </div>
    </div>
  );
}

export default ExperienceBadge;
