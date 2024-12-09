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
    <div className="bg-background py-2">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 lg:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className="text-center relative">
            {/* Circle and Line */}
            <div className="flex justify-center items-center mb-4"></div>

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
