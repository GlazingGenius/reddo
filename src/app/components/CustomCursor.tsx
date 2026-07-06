import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Ring */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
       className="fixed w-9 h-9 rounded-full border-2 border-white mix-blend-difference pointer-events-none z-[99999]"
      />

      {/* Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "tween",
          duration: 0.05,
        }}
        className="fixed w-2 h-2 rounded-full bg-white mix-blend-difference pointer-events-none z-[99999]"
      />
    </>
  );
}