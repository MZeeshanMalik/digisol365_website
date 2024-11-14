import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Customized Solutions",
      description: "Services are professional with offerings provided.",
    },
    {
      title: "Quality Reliability",
      description: "Services are professional with offerings provided.",
    },
  ];

  return (
    <div className="bg-background py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 lg:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className="text-center relative">
            {/* Circle and Line */}
            <div className="flex justify-center items-center mb-4">
              <div className="relative">
                {/* <div className="absolute top-1/2 -translate-y-1/2 left-0  right-0 h-[2px]  bg-red-700"></div> */}
                <div className="w-6 h-6 bg-green-500 rounded-full border-[4px] border-white mx-auto"></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-foreground text-xl font-bold mb-2">
              {feature.title}
            </h2>

            {/* Description */}
            <p className="text-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
