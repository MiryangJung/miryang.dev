"use client";

import { useRef, useState } from "react";

/**
 * GoldTrophySprite
 * 금색 트로피 스프라이트시트를 자동 재생하는 컴포넌트
 * 2000x800px, 5프레임 (각 400x800px), 표시 크기 200x400px
 */
export function GoldTrophySprite() {
  return (
    <div className="not-prose my-4 flex justify-center">
      <img
        src="https://www.joshwcomeau.com/images/sprites/gold-trophy-sprite.png"
        alt="A gold trophy with flickering flames"
        draggable={false}
        style={{
          width: 200,
          height: 400,
          objectFit: "cover",
          objectPosition: "0% 0%",
          animation:
            "gold-trophy-sprite 1s steps(5, jump-none) infinite",
        }}
      />
      <style>{`
        @keyframes gold-trophy-sprite {
          from { object-position: 0% 0%; }
          to { object-position: 100% 0%; }
        }
      `}</style>
    </div>
  );
}

/**
 * TwitterLikeSprite
 * 트위터 좋아요 스프라이트시트를 자동 재생하는 컴포넌트
 * 2900x100px, 29프레임 (각 100x100px)
 */
export function TwitterLikeSprite() {
  return (
    <div className="not-prose my-4 flex justify-center">
      <img
        src="https://www.joshwcomeau.com/images/sprites/twitter-like-sprite.webp"
        alt="Twitter like animation sprite"
        draggable={false}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          objectPosition: "0% 0%",
          animation: "twitter-like-sprite 800ms steps(29, jump-none) infinite",
        }}
      />
      <style>{`
        @keyframes twitter-like-sprite {
          from { object-position: 0% 0%; }
          to { object-position: 100% 0%; }
        }
      `}</style>
    </div>
  );
}



/**
 * Demo 3: StepsTimingDemo
 * linear / ease-in / steps(5) 타이밍 함수를 그래프로 비교하는 데모
 */
type TimingType = "linear" | "ease-in" | "steps";

function getEaseInValue(t: number) {
  return t * t;
}

export function StepsTimingDemo() {
  const [timing, setTiming] = useState<TimingType>("steps");
  const STEPS = 5;

  const tabs: { key: TimingType; label: string }[] = [
    { key: "linear", label: "linear" },
    { key: "ease-in", label: "ease-in" },
    { key: "steps", label: "steps(5)" },
  ];

  // SVG 경로 생성
  const getPath = () => {
    if (timing === "steps") {
      const points: string[] = [];
      for (let i = 0; i < STEPS; i++) {
        const x1 = (i / STEPS) * 200;
        const x2 = ((i + 1) / STEPS) * 200;
        const y = 200 - (i / STEPS) * 200;
        points.push(`${x1},${y}`);
        points.push(`${x2},${y}`);
      }
      return points.join(" ");
    }
    if (timing === "ease-in") {
      const points: string[] = [];
      for (let i = 0; i <= 50; i++) {
        const t = i / 50;
        const x = t * 200;
        const y = 200 - getEaseInValue(t) * 200;
        points.push(`${x},${y}`);
      }
      return points.join(" ");
    }
    return "0,200 200,0";
  };

  return (
    <div className="not-prose my-8 overflow-hidden rounded-xl bg-gray-900 p-6">
      <div className="flex flex-col items-center gap-5">
        {/* 타이틀 */}
        <span className="text-sm font-semibold text-white">
          Timing function:
        </span>

        {/* 탭 */}
        <div className="flex gap-1">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTiming(key)}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
              style={{
                color: timing === key ? "#fff" : "#9ca3af",
              }}
            >
              {label}
              {timing === key && (
                <div
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                  style={{ backgroundColor: "#eab308" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 그래프 */}
        <div className="relative w-full max-w-md">
          {/* Y축 레이블 */}
          <div
            className="absolute -left-2 top-1/2 -translate-x-full -translate-y-1/2 text-xs tracking-widest text-gray-500"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg) translateX(50%)",
              letterSpacing: "0.15em",
            }}
          >
            -- PROGRESSION --
          </div>

          <div className="relative ml-8">
            <div
              className="relative w-full overflow-hidden rounded border border-gray-700"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* 그리드 */}
              {[0.2, 0.4, 0.6, 0.8].map((v) => (
                <div
                  key={v}
                  className="absolute left-0 right-0 border-t border-gray-800"
                  style={{ top: `${v * 100}%` }}
                />
              ))}
              {[0.2, 0.4, 0.6, 0.8].map((v) => (
                <div
                  key={v}
                  className="absolute bottom-0 top-0 border-l border-gray-800"
                  style={{ left: `${v * 100}%` }}
                />
              ))}

              {/* 경로 */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                <polyline
                  points={getPath()}
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

            </div>

            {/* X축 레이블 */}
            <div className="mt-2 text-center text-xs tracking-widest text-gray-500">
              -- TIME --
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Demo 4: LikeButtonDemo
 * 클릭할 때마다 랜덤한 파티클이 생성되는 좋아요 버튼
 */
interface Particle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  delay: number;
}

const PARTICLE_COLORS = [
  "#e74c3c",
  "#e91e63",
  "#ff5722",
  "#ff9800",
  "#f44336",
  "#ec407a",
  "#ffeb3b",
  "#ff4081",
  "#7c4dff",
  "#00e5ff",
];

export function LikeButtonDemo() {
  const [liked, setLiked] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scale, setScale] = useState(1);
  const [ringScale, setRingScale] = useState(0);
  const nextId = useRef(0);

  const handleClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      setScale(0.6);
      setTimeout(() => setScale(1.2), 100);
      setTimeout(() => setScale(1), 250);

      setRingScale(0);
      requestAnimationFrame(() => setRingScale(1));

      const count = 10 + Math.floor(Math.random() * 6);
      const newParticles: Particle[] = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        return {
          id: nextId.current++,
          angle,
          distance: 40 + Math.random() * 50,
          size: 5 + Math.random() * 8,
          color:
            PARTICLE_COLORS[
              Math.floor(Math.random() * PARTICLE_COLORS.length)
            ],
          delay: Math.random() * 100,
        };
      });
      setParticles(newParticles);

      setTimeout(() => setParticles([]), 900);
      setTimeout(() => setRingScale(0), 500);
    } else {
      setParticles([]);
      setRingScale(0);
    }
  };

  return (
    <div
      className="not-prose my-8 flex items-center justify-center overflow-hidden rounded-lg"
      style={{ background: "rgb(13, 15, 18)", padding: 32 }}
    >
      <div className="relative">
        {/* 파티클 */}
        {particles.map((p) => (
          <div
            key={p.id}
            style={
              {
                "--px": `${Math.cos(p.angle) * p.distance}px`,
                "--py": `${Math.sin(p.angle) * p.distance}px`,
                position: "absolute",
                left: "50%",
                top: "50%",
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: p.color,
                transform: "translate(-50%, -50%)",
                animation: `like-particle-move 800ms ${p.delay}ms ease-out forwards`,
                opacity: 0,
                pointerEvents: "none" as const,
              } as React.CSSProperties
            }
          />
        ))}

        {/* 확산 링 */}
        {ringScale > 0 && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border-2 border-red-400"
            style={{
              width: 100,
              height: 100,
              transition: "transform 400ms ease-out, opacity 400ms ease-out",
              transform: `translate(-50%, -50%) scale(${ringScale})`,
              opacity: ringScale > 0.5 ? 0 : 1,
            }}
          />
        )}

        {/* 하트 버튼 */}
        <button
          type="button"
          onClick={handleClick}
          className="relative z-10 flex items-center justify-center rounded-full"
          style={{
            width: 96,
            height: 96,
            transform: `scale(${scale})`,
            transition: "transform 150ms ease-out",
          }}
          aria-label={liked ? "좋아요 취소" : "좋아요"}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width={48}
            height={48}
            fill={liked ? "#e74c3c" : "none"}
            stroke={liked ? "#e74c3c" : "#fff"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "fill 150ms, stroke 150ms" }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes like-particle-move {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--px), var(--py)) scale(0);
          }
        }
      `}</style>
    </div>
  );
}
