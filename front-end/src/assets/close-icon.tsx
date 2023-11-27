import React from "react";

interface CloseIconProps {
  onClose: () => void;
}

function CloseIcon({ onClose }: CloseIconProps) {
  return (
    <svg
      onClick={() => onClose()}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="-0.5 0 25 25"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 21.32l18-18M3 3.32l18 18"
      ></path>
    </svg>
  );
}

export default CloseIcon;
