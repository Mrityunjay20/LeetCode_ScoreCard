import React from 'react';

export default function IndividualProgress({ barColour, progress, children }) {
  // Ensure the progress value is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress * 0.75));
  // Calculate the stroke-dashoffset based on the progress value
  const dashOffset = 100 - clampedProgress;

  return (
    <div className="relative  size-56 mx-auto">
      <svg
        className="size-full"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          transform="rotate(135 18 18)"
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={"stroke-current opacity-40 text-gray-500"}
          strokeWidth="1.3"
          strokeDasharray="75"
          strokeDashoffset="0"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }} // Animation CSS
        ></circle>

        <g transform="rotate(135 18 18)">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={"stroke-current " + barColour}
            strokeWidth="1.3"
            strokeDasharray="100"
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }} // Animation CSS
          ></circle>
        </g>
      </svg>
      <div className="absolute pl:8 inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}


