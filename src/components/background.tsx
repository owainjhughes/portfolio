import React from "react";
import { AnimatedBackgroundProps } from "@/types";

const CIRCLE_SIZE = 6;
const LINE_RANGE = 60;

export default function AnimatedBackground({
  circles,
  mouse,
  containerRef,
  onEnter,
  fade,
}: AnimatedBackgroundProps) {
  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ overflow: "hidden" }}>
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {mouse && (
          <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 1,
            }}>
            {circles.map((circle) => {
              const leftPx =
                (parseFloat(circle.left) / 100) *
                (containerRef.current?.offsetWidth || window.innerWidth);
              const topPx =
                (parseFloat(circle.top) / 100) *
                (containerRef.current?.offsetHeight || window.innerHeight);
              const dx = mouse.x - leftPx;
              const dy = mouse.y - topPx;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < LINE_RANGE) {
                return (
                  <line
                    key={circle.key + "-line"}
                    x1={leftPx + CIRCLE_SIZE / 2}
                    y1={topPx + CIRCLE_SIZE / 2}
                    x2={mouse.x}
                    y2={mouse.y}
                    stroke="rgba(96,165,250,0.5)"
                    strokeWidth="1"/>
                );
              }
              return null;
            })}
          </svg>
        )}
        {circles.map((circle) => (
          <span
            key={circle.key}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-30 animate-bob"
            style={{
              left: circle.left,
              top: circle.top,
              width: circle.size,
              height: circle.size,
              animationDelay: circle.delay,
              animationDuration: circle.duration,
              zIndex: 2,
            }}/>
        ))}
      </div>
      <button
        onClick={onEnter}
        className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white text-2xl font-bold shadow-lg hover:scale-105 transition-transform z-10">
        Click Here to Enter
      </button>
      <style jsx global>{`
        @keyframes bob {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-bob {
          animation-name: bob;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}