import React, { useState } from "react";

const RotatingButton = ({ rotation = "vertical" }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <button className="relative group w-[60px] h-[200px] bg-background border-2 border-foreground overflow-hidden">
      <div
        className={`absolute inset-0 bg-buttoncolor transform ${
          rotation == "vertical"
            ? "skew-y-[30deg] group-hover:translate-y-0 translate-y-full"
            : "skew-x-[30deg] group-hover:translate-x-0 translate-x-full"
        }   transition-all duration-500 ease-in-out`}
      />
      {/* Rotated Text */}
      <span
        className={`absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 ${
          rotation == "vertical" ? "rotate-90" : ""
        }  text-foreground font-bold`}
      >
        Get A Quote
      </span>

      {/* Animated Green Overlay */}
    </button>
  );
};

export default RotatingButton;
