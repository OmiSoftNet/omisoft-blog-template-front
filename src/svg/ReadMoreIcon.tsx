import React from "react";

type Props = {
  width?: number;
};

const ReadMore: React.FC<Props> = ({ width = 13 }) => {
  return (
    <svg
      width={width}
      height="21"
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11 10.5L1 20"
        stroke="#2196F3"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ReadMore;
