import React from "react";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        background: "#020617",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        width="300"
        height="300"
      >
        <defs>
          <linearGradient id="metalC" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="darkC" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <filter id="glowC">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="300" height="300" fill="#020617" />

        <g transform="translate(150,150)">
          {/* Spinning loader arc */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <circle cx="0" cy="0" r="115" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle
              cx="0"
              cy="0"
              r="115"
              fill="none"
              stroke="url(#metalC)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="180,540"
              filter="url(#glowC)"
            />
          </g>

          {/* Logo hexagon */}
          <g>
            <path
              d="M 0 -90 L 65 -32 L 65 32 L 0 90 L -65 32 L -65 -32 Z"
              fill="url(#darkC)"
              stroke="url(#metalC)"
              strokeWidth="2.5"
              strokeDasharray="500"
              strokeDashoffset="500"
            >
              <animate
                attributeName="strokeDashoffset"
                from="500"
                to="0"
                dur="1.5s"
                fill="freeze"
              />
            </path>

            <path d="M 0 -90 L 65 -32" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0">
              <animate
                attributeName="opacity"
                from="0"
                to="0.8"
                dur="0.5s"
                begin="1s"
                fill="freeze"
              />
            </path>

            <circle cx="0" cy="0" r="46" fill="#ffffff" opacity="0">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.5s"
                begin="1.2s"
                fill="freeze"
              />
            </circle>
            <circle cx="0" cy="0" r="46" fill="none" stroke="url(#metalC)" strokeWidth="2" opacity="0">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.5s"
                begin="1.2s"
                fill="freeze"
              />
            </circle>

            <text
              x="0"
              y="10"
              fontFamily="Arial Black, sans-serif"
              fontSize="30"
              fill="#0f172a"
              textAnchor="middle"
              fontWeight="900"
              letterSpacing="-1"
              opacity="0"
            >
              DGS
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="0.6s"
                begin="1.5s"
                fill="freeze"
              />
            </text>
          </g>
        </g>

        {/* Loading dots */}
        <g transform="translate(150,265)">
          <circle cx="-12" cy="0" r="3" fill="#06b6d4">
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur="1.2s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" r="3" fill="#3b82f6">
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur="1.2s"
              begin="0.2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="12" cy="0" r="3" fill="#8b5cf6">
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur="1.2s"
              begin="0.4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
