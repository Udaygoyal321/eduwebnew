"use client";
import Image from "next/image";
<<<<<<< HEAD
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Slide4Page2() {
  // amplitude adapts based on viewport width so motion remains pleasant on small screens
  const [amplitude, setAmplitude] = useState<number>(80);
=======
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Slide4Page2() {
  const [amplitude, setAmplitude] = useState(80);
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState(0);

  // Shared motion value (used by all cards)
  const t = useMotionValue(0);
  const speed = 0.7; // 👈 lower = slower motion (1 = normal speed)

>>>>>>> 54e5b2b (Initial commit)

  useEffect(() => {
    function updateAmplitude() {
      const w = window.innerWidth;
<<<<<<< HEAD
      if (w < 640) {
        // mobile
        setAmplitude(30);
      } else if (w < 1024) {
        // tablet
        setAmplitude(50);
      } else {
        // desktop
        setAmplitude(80);
      }
    }

=======
      if (w < 640) setAmplitude(30);
      else if (w < 1024) setAmplitude(50);
      else setAmplitude(80);
    }
>>>>>>> 54e5b2b (Initial commit)
    updateAmplitude();
    window.addEventListener("resize", updateAmplitude);
    return () => window.removeEventListener("resize", updateAmplitude);
  }, []);

<<<<<<< HEAD
  // helpers to build motion arrays preserving original direction patterns
  const upDownUp = (a: number) => [0, -a, 0, a, 0];
  const downUpDown = (a: number) => [0, a, 0, -a, 0];
=======
  // ⏱️ Animate time manually using requestAnimationFrame
  useAnimationFrame((_, delta) => {
    if (!isHovered) {
      // Only progress time when not hovered
      setTime((prev) => prev + (delta / 1000) * speed);
    }
  });

  // Create smooth sine-wave motion based on time
  const cardYUp = useTransform(t, () => Math.sin(time * Math.PI) * amplitude);
  const cardYDown = useTransform(t, () => Math.sin(time * Math.PI + Math.PI) * amplitude);
>>>>>>> 54e5b2b (Initial commit)

  return (
    <section className="w-full mt-60 md:mt-65 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-26 md:mb-30">
<<<<<<< HEAD
          Why Choose AI Guidance & Counselor Support?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Card 1 (Up → Down → Up) */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
            animate={{ y: upDownUp(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
=======
          Why Choose AI-Powered Tests?
        </h2>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card 1 */}
          <motion.div
            style={{ y: cardYUp }}
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
>>>>>>> 54e5b2b (Initial commit)
          >
            <Image
              src="/images/slide4page2Img1.png"
              alt="Smarter Decisions"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

<<<<<<< HEAD
          {/* Card 2 (Down → Up → Down) */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
            animate={{ y: downUpDown(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
=======
          {/* Card 2 */}
          <motion.div
            style={{ y: cardYDown }}
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
>>>>>>> 54e5b2b (Initial commit)
          >
            <Image
              src="/images/slide4page2Img2.png"
              alt="Save Time & Effort"
              fill
              className="object-contain"
            />
          </motion.div>

<<<<<<< HEAD
          {/* Card 3 (Up → Down → Up) */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
            animate={{ y: upDownUp(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
=======
          {/* Card 3 */}
          <motion.div
            style={{ y: cardYUp }}
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
>>>>>>> 54e5b2b (Initial commit)
          >
            <Image
              src="/images/slide4page2Img3.png"
              alt="Personalized for You"
              fill
              className="object-contain"
            />
          </motion.div>

<<<<<<< HEAD
          {/* Card 4 (Down → Up → Down) */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
            animate={{ y: downUpDown(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
=======
          {/* Card 4 */}
          <motion.div
            style={{ y: cardYDown }}
            className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[180px] sm:h-[210px] md:h-[250px]"
>>>>>>> 54e5b2b (Initial commit)
          >
            <Image
              src="/images/slide4page2Img4.png"
              alt="Future-Proof Choices"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
