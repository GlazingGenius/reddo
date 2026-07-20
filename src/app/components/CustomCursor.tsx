import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, {
    stiffness: 220,
    damping: 22,
    mass: 0.5,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 220,
    damping: 22,
    mass: 0.5,
  });

  const dotX = useSpring(mouseX, {
    stiffness: 900,
    damping: 45,
  });

  const dotY = useSpring(mouseY, {
    stiffness: 900,
    damping: 45,
  });

  const [cursorColor, setCursorColor] = useState("#178B4C");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Hover detection
      const target = e.target as HTMLElement;

      setHover(
        !!target.closest(
          "a,button,input,textarea,select,[role='button']"
        )
      );

      // Detect dark sections
      let el = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;

     while (el) {
  const bg = getComputedStyle(el).backgroundColor;

  if (bg !== "rgba(0, 0, 0, 0)") {
    const rgb = bg.match(/\d+/g);

    if (rgb) {
      const [r, g, b] = rgb.map(Number);

      // Check if cursor is over the header/navbar
      const isHeader =
        el.closest("header") ||
        el.closest("nav") ||
        el.closest(".header") ||
        el.closest(".navbar");

      if (isHeader) {
        setCursorColor("#178B4C");
      } else if (g > r && g > b) {
        setCursorColor("#ffffff");
      } else {
        setCursorColor("#178B4C");
      }
    }

    break;
  }

  el = el.parentElement;
}
    };

    window.addEventListener("mousemove", move);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: cursorColor,
        }}
        animate={{
  scale: hover ? 1.2 : 1,
}}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 20,
        }}
        className="fixed left-0 top-0 w-10 h-10 rounded-full border-2 pointer-events-none z-[999999]"
      />

      {/* Glow */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            cursorColor === "#ffffff"
              ? "rgba(255,255,255,.12)"
              : "rgba(23,139,76,.12)",
        }}
        animate={{
          width: hover ? 70 : 40,
          height: hover ? 70 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="fixed left-0 top-0 rounded-full pointer-events-none z-[999998]"
      />

      {/* Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: cursorColor,
        }}
        animate={{
          scale: hover ? 1.4 : 1,
        }}
        className="fixed left-0 top-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[999999]"
      />
    </>
  );
}