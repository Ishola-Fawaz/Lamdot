import React from "react";
import { Truck, Shield, ArrowLeftRight, Clock } from "lucide-react";

const BrandPillars: React.FC = () => {
  const pillars = [
    {
      icon: Truck,
      title: "Free Shipping",
      description:
        "Free shipping on all orders over ₦100. Express delivery available.",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description:
        "We use industry-standard encryption to ensure your payment information is safe.",
    },
    {
      icon: ArrowLeftRight,
      title: "Easy Returns",
      description:
        "Not satisfied with your purchase? Return it within 30 days for a full refund.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Our customer service team is available around the clock to assist you.",
    },
  ];

  return (
    <section id="sale" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden p-10 h-80 md:h-auto bg-white/80"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-gray-100 rounded-2xl">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 font-medium max-w-md mx-auto group-hover:text-gray-800 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;

