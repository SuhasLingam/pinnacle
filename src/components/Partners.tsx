"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4,
    },
  },
};

interface SponsorLogo {
  src: string;
  label: string;
  className?: string; // Optional custom class for size
  url?: string; // Optional company link
  shadowClass?: string; // Optional custom shadow class
}

interface SponsorSectionProps {
  height: string;
  count: number;
  color: string;
  logos?: SponsorLogo[]; // Array of logo objects with src and label
  mode?: "grid" | "carousel";
}

function SponsorSection({
  height,
  count,
  color,
  logos = [],
  mode = "grid",
}: SponsorSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (mode === "carousel") {
    // Carousel mode: horizontal scroll with infinite auto-scroll
    // Duplicate logos for seamless infinite effect
    const allLogos = [...logos, ...logos];
    return (
      <motion.div
        className="mb-12 sm:mb-16 last:mb-0 px-4 sm:px-6 lg:px-8"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{
          once: true,
          margin: "0px 0px -100px 0px", // Trigger animation earlier
        }}
      >
        <div
          className="overflow-x-auto overflow-y-visible w-full scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="carousel-infinite gap-6 py-2">
            {(mode === "carousel" ? allLogos : logos).map((logo, i) =>
              logo.url ? (
                <motion.a
                  key={i}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={prefersReducedMotion ? {} : itemVariants}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { scale: 1.05, boxShadow: `0 0 30px ${color}30` }
                  }
                  className={`
                    ${height}
                    min-w-[80vw] sm:min-w-[40vw] lg:min-w-[28vw] max-w-[90vw] sm:max-w-[40vw] lg:max-w-[28vw]
                    bg-[#1A1A1A] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center relative group overflow-hidden will-change-transform
                  `}
                  style={{
                    border: `1px solid ${color}20`,
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  {/* Hover Glow */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
                      }}
                    />
                  )}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                      src={logo.src}
                      alt={logo.label || i + " logo"}
                      width={logo.className ? 180 : 120}
                      height={logo.className ? 90 : 60}
                      className={`object-contain max-h-full max-w-full ${logo.className || ""
                        } ${logo.shadowClass || ""}`}
                    />
                  </div>
                  <div className="mt-auto w-full text-center pb-3 pt-2">
                    <span className="block text-xs sm:text-sm text-white/70 font-mono-rubik group-hover:underline">
                      {logo.label}
                    </span>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  variants={prefersReducedMotion ? {} : itemVariants}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { scale: 1.05, boxShadow: `0 0 30px ${color}30` }
                  }
                  className={`
                    ${height}
                    min-w-[80vw] sm:min-w-[40vw] lg:min-w-[28vw] max-w-[90vw] sm:max-w-[40vw] lg:max-w-[28vw]
                    bg-[#1A1A1A] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center relative group overflow-hidden will-change-transform
                  `}
                  style={{
                    border: `1px solid ${color}20`,
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  {/* Hover Glow */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
                      }}
                    />
                  )}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                      src={logo.src}
                      alt={logo.label || i + " logo"}
                      width={logo.className ? 180 : 120}
                      height={logo.className ? 90 : 60}
                      className={`object-contain max-h-full max-w-full ${logo.className || ""
                        } ${logo.shadowClass || ""}`}
                    />
                  </div>
                  <div className="mt-auto w-full text-center pb-3 pt-2">
                    <span className="block text-xs sm:text-sm text-white/70 font-mono-rubik">
                      {logo.label}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default grid mode
  return (
    <motion.div
      className="mb-12 sm:mb-16 last:mb-0 px-4 sm:px-6 lg:px-8"
      variants={prefersReducedMotion ? {} : containerVariants}
      initial={prefersReducedMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{
        once: true,
        margin: "0px 0px -100px 0px", // Trigger animation earlier
      }}
    >
      <div
        className={`grid grid-cols-1 ${count === 1
          ? "max-w-2xl mx-auto"
          : count === 2
            ? "sm:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3"
          } gap-4 sm:gap-6 lg:gap-8`}
      >
        {Array(count)
          .fill(0)
          .map((_, i) =>
            logos[i] && logos[i].src && logos[i].url ? (
              <motion.a
                key={i}
                href={logos[i].url}
                target="_blank"
                rel="noopener noreferrer"
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                      scale: 1.02,
                      boxShadow: `0 0 30px ${color}30`,
                    }
                }
                className={`
                ${height} 
                bg-[#1A1A1A] 
                rounded-xl sm:rounded-2xl 
                flex flex-col items-center justify-center 
                relative group overflow-hidden
                will-change-transform
                ${count === 1 ? "sm:h-56 md:h-64" : ""}
              `}
                style={{
                  border: `1px solid ${color}20`,
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                {/* Hover Glow - Only render when not using reduced motion */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
                    }}
                  />
                )}
                {/* Animated Border - Only render when not using reduced motion */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
                      transform: "translateX(-100%)",
                    }}
                    animate={{
                      transform: ["translateX(-100%)", "translateX(100%)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                <div className="flex-1 flex items-center justify-center w-full">
                  <Image
                    src={logos[i].src}
                    alt={logos[i].label || i + " logo"}
                    width={logos[i].className ? 180 : 120}
                    height={logos[i].className ? 90 : 60}
                    className={`object-contain max-h-full max-w-full ${logos[i].className || ""
                      } ${logos[i].shadowClass || ""}`}
                  />
                </div>
                <div className="mt-auto w-full text-center pb-3 pt-2">
                  <span className="block text-xs sm:text-sm text-white/70 font-mono-rubik group-hover:underline">
                    {logos[i].label}
                  </span>
                </div>
              </motion.a>
            ) : (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                      scale: 1.02,
                      boxShadow: `0 0 30px ${color}30`,
                    }
                }
                className={`
                ${height} 
                bg-[#1A1A1A] 
                rounded-xl sm:rounded-2xl 
                flex flex-col items-center justify-center 
                relative group overflow-hidden
                will-change-transform
                ${count === 1 ? "sm:h-56 md:h-64" : ""}
              `}
                style={{
                  border: `1px solid ${color}20`,
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                {/* Hover Glow - Only render when not using reduced motion */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
                    }}
                  />
                )}
                {/* Animated Border - Only render when not using reduced motion */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
                      transform: "translateX(-100%)",
                    }}
                    animate={{
                      transform: ["translateX(-100%)", "translateX(100%)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {/* Sponsor Logo or Placeholder */}
                {logos[i] && logos[i].src ? (
                  <>
                    <div className="flex-1 flex items-center justify-center w-full">
                      <Image
                        src={logos[i].src}
                        alt={logos[i].label || i + " logo"}
                        width={logos[i].className ? 180 : 120}
                        height={logos[i].className ? 90 : 60}
                        className={`object-contain max-h-full max-w-full ${logos[i].className || ""
                          } ${logos[i].shadowClass || ""}`}
                      />
                    </div>
                    <div className="mt-auto w-full text-center pb-3 pt-2">
                      <span className="block text-xs sm:text-sm text-white/70 font-mono-rubik">
                        {logos[i].label}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-white/30 text-sm sm:text-base">
                    Logo Placeholder
                  </span>
                )}
              </motion.div>
            )
          )}
      </div>
    </motion.div>
  );
}

export function Partners() {
  // State to control when animations should be rendered
  const [isVisible, setIsVisible] = useState(false);

  // Delay rendering animations until after component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="w-full max-w-7xl mx-auto py-8 sm:py-12"
      style={{
        willChange: "contents",
        transform: "translateZ(0)",
      }}
    >
      {isVisible && (
        <>
          <SponsorSection
            height="h-44 sm:h-60"
            count={2}
            color="#9D71FD"
            logos={[
              {
                src: "/partners/growbinar-4.png",
                label: "Associate Partner",
                className: "md:w-[300px] w-[250px] h-[120px]",
                url: "https://growbinar.com",
                // shadowClass: "drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]",
              },
              {
                src: "/partners/NIT-Logo.png",
                label: "Venue Partner",
                url: "https://www.nitcbe.ac.in/",
                className: "md:w-[300px] w-[200px] h-[110px] md:h-[170px]",
              },
            ]}
            mode="grid"
          />

          <SponsorSection
            height="h-32 sm:h-44"
            count={4}
            color="#40F8FF"
            logos={[
              {
                src: "/partners/media.png",
                label: "Media Partner",
                url: "https://www.instagram.com/nc.fotog?igsh=NzFlcDJzd2dncWpz",
                // Responsive: width and height adjust for mobile, tablet, desktop
                className:
                  "w-[90px] h-[50px] sm:w-[120px] sm:h-[70px] md:w-[180px] md:h-[110px] object-contain",
              },
              {
                src: "/partners/Music.jpg",
                label: "Music Partner",
                url: "https://www.instagram.com/lighthouse.eventsss?igsh=N3dkZnFocnFyaDN3",
                className:
                  "w-[90px] h-[55px] sm:w-[120px] sm:h-[75px] md:w-[180px] md:h-[120px] object-contain",
              },
              {
                src: "/partners/nutz-dark.svg",
                label: "Innovation Partner",
                url: "https://nutz.in/",
                className:
                  "w-[100px] h-[50px] sm:w-[140px] sm:h-[70px] md:w-[180px] md:h-[110px] invert object-contain",
              },
              {
                src: "/partners/sketch-design.png",
                label: "Design Partner",
                className:
                  "w-[90px] h-[60px] sm:w-[120px] sm:h-[85px] md:w-[180px] md:h-[120px] object-contain",
                url: "https://www.instagram.com/srmsketch?igsh=MTg0d3B5cGx6bnc3eQ==",
              },
              {
                src: "/partners/eventeye.png",
                label: "Outreach Partner",
                className:
                  "w-[90px] h-[60px] sm:w-[120px] sm:h-[85px] md:w-[180px] md:h-[120px] object-contain",
                url: "https://www.eventeye.in/",
              },
            ]}
            mode="carousel"
          />
        </>
      )}
    </div>
  );
}
