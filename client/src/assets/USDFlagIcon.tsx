import React from "react";

export const USDFlagIcon: React.FC = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="8" cy="8" r="8" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_0_6695"
            transform="translate(-0.00396825) scale(0.00793651)"
          />
        </pattern>
        <image
          id="image0_0_6695"
          width="127"
          height="126"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};