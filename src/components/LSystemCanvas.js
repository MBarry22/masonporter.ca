import React, { useEffect, useRef } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

// Simple L-system (e.g., a plant-like structure) drawn on a canvas.
// Tuned for subtle, low-contrast lines as a background accent.
export default function LSystemCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const reduced = typeof window !== "undefined" ? usePrefersReducedMotion() : true;

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;

    const width = (canvas.width = canvas.offsetWidth * 2);
    const height = (canvas.height = canvas.offsetHeight * 2);
    ctx.scale(2, 2);

    // L-system config
    const axiom = "F";
    const rules = { F: "F[+F]F[-F]F" };
    const iterations = 3;
    const angle = (22.5 * Math.PI) / 180;
    let sentence = axiom;
    for (let i = 0; i < iterations; i++) {
      let next = "";
      for (const ch of sentence) {
        next += rules[ch] || ch;
      }
      sentence = next;
    }

    const startX = canvas.offsetWidth / 2;
    const startY = canvas.offsetHeight - 20;
    const stack = [];
    let length = 6;
    let t = 0;

    function drawFrame() {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.save();
      ctx.translate(startX, startY);
      ctx.strokeStyle = "rgba(14,31,74,0.18)";
      ctx.lineWidth = 0.8;

      // Oscillate slight length to create subtle motion
      const len = length * (1 + 0.15 * Math.sin(t));
      for (const ch of sentence) {
        switch (ch) {
          case "F":
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.stroke();
            ctx.translate(0, -len);
            break;
          case "+":
            ctx.rotate(angle);
            break;
          case "-":
            ctx.rotate(-angle);
            break;
          case "[":
            stack.push([ctx.getTransform()]);
            ctx.save();
            break;
          case "]":
            ctx.restore();
            break;
          default:
            break;
        }
      }
      ctx.restore();
      raf = requestAnimationFrame(drawFrame);
    }

    drawFrame();
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute left-1/2 top-0 h-[320px] w-[600px] -translate-x-1/2 sm:h-[380px] sm:w-[800px]" />
    </div>
  );
}


