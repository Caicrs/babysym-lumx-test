import React from "react";

interface StarProps {
  isFilled: boolean;
  props?: React.SVGProps<SVGSVGElement>;
  onChange?: () => void;
}

const StarOutlined = ({
  isFilled,
  props,
  onChange
}: StarProps) => (
  <svg
    onClick={() => onChange()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={36}
    height={36}
    fill={isFilled ? "yellow" : "none"}
    stroke={isFilled ? "none" : "yellow"}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L9.8 8.5H2.5L8.5 12.5L6.5 19L12 15.4L17.5 19L15.5 12.5L21.5 8.5H14.2L12 2Z" />
  </svg>
);

export default StarOutlined;
