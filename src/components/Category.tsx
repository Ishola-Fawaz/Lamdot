import React from "react";
import { ChevronRight } from "lucide-react";

const Category: React.FC = () => {
  const categories = [
    {
      id: 1,
      img: "/assets/basketball.jpg",
      title: "Basketball",
      subtitle: "High performance street-ready kicks",
      count: "Shop now",
    },
    {
      id: 2,
      img: "/assets/sandals.jpg",
      title: "Sandals",
      subtitle: "Breathable comfort for warmer days",
      count: "Shop now",
    },
    {
      id: 3,
      img: "/assets/running.jpg",
      title: "Running",
      subtitle: "Lightweight maximum comfort",
      count: "Shop now",
    },
    {
      id: 4,
      img: "/assets/casual.jpg",
      title: "Casual",
      subtitle: "Everyday style meets all-day comfort",
      count: "Shop now",
    },
    {
      id: 5,
      img: "/assets/sneakers.jpg",
      title: "Sneakers",
      subtitle: "Classic and contemporary styles for every occasion",
      count: "Shop now",
    },
  ];

  return (
    <section id="categories" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 sm:mb-20">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-4">
              Shop by category
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Find the perfect pair for every occasion
            </p>
          </div>

          <a
            href="/#categories"
            className="inline-flex items-center gap-2 group cursor-pointer hover:gap-4 transition-all duration-300 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg"
            aria-label="View all categories"
          >
            <span className="text-lg font-medium tracking-wide">View All</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
          </a>
        </div>

        {/* Mobile Carousel + Desktop Grid */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4 -mb-4">
          <div className="flex gap-5 sm:gap-6 min-w-max snap-x snap-center">
            {categories.map((category) => (
              <a
                key={category.id}
                href="/shop"
                aria-label={`Shop ${category.title}`}
                className="group relative overflow-hidden rounded-3xl w-[78vw] max-w-sm h-[340px] sm:h-[420px] flex-shrink-0 shadow-2xl hover:shadow-3xl hover:-translate-y-2 cursor-pointer transition-all duration-500 border-4 border-white/30 hover:border-orange-200 snap-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${category.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-2xl group-hover:text-orange-400 transition-all duration-500">
                      {category.title}
                    </h3>

                    <p className="text-base text-gray-200 mb-4 leading-relaxed drop-shadow-lg whitespace-pre-line">
                      {category.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-orange-400 font-semibold drop-shadow-lg">
                      <span className="text-lg">{category.count}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            ))}

          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl h-72 sm:h-80 lg:h-96 bg-gradient-to-b from-black/20 hover:from-black/10 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 cursor-pointer border-4 border-white/50 hover:border-orange-200"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${category.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-10">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-tight group-hover:text-orange-400 transition-colors duration-500">
                    {category.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed drop-shadow-lg whitespace-pre-line">
                    {category.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 font-semibold drop-shadow-lg">
                    <span>{category.count}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
