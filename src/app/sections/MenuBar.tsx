"use client";
import React from "react";

export default function MenuBar() {
  // Smooth scroll function with speed control
  const smoothScroll = (targetId, duration = 800, offset = 0) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start - offset;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  return (
    <div className="text-secondary flex justify-between mx-8 mt-5">
      <p className="font-bold">7afidhou</p>
      <div className="flex gap-4">
        <button
          onClick={() => smoothScroll("home", 600)}
          className="cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => smoothScroll("about", 1200, 0)}
          className="cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => smoothScroll("contact", 1200, 0)} // offset for fixed navbar
          className="cursor-pointer"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
