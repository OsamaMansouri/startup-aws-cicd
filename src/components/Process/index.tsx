"use client";

import { useEffect, useRef, useState } from "react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals, target audience, and market landscape. Through comprehensive research and analysis, we craft a strategic roadmap that aligns technology with your vision.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our creative team transforms concepts into stunning visual experiences. We create intuitive interfaces and interactive prototypes that captivate users and drive engagement.",
      icon: "🎨",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Leveraging cutting-edge technologies, we build robust, scalable solutions. From AI-powered systems to seamless integrations, we ensure your platform performs flawlessly.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description:
        "We don't just launch—we optimize. Continuous monitoring, performance tuning, and data-driven improvements ensure your digital presence evolves with your business.",
      icon: "🚀",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-dark dark:to-gray-900 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
            A proven methodology that transforms your vision into digital excellence.
            Every project follows our strategic approach to ensure success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="group relative h-full rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:hover:shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl">{step.icon}</span>
                  <span className="text-6xl font-bold text-primary/10 dark:text-primary/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {step.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

