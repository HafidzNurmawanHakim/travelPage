import * as React from "react";
import { SVGProps } from "react";
const SpiralArrow = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 100 125"
      width="1em"
      height="1em"
      {...props}
   >
      <g fill="#e86317">
         <path d="M17.64 21.915c11.75-4.63 27.44-3.5 33.7 9.2 2.92 5.9 2.24 13.64-2.32 18.55-3.54 3.81-9.65 4-11.39-1.5A12.56 12.56 0 0 1 40 36.895c9.57-11.91 25.28-1.44 30.57 8.91 6.15 12 5.58 26.47-.5 38.32-.88 1.72 1.71 3.24 2.59 1.52 6.59-12.85 7.17-28.39.5-41.36-5.42-10.57-17.59-19.31-29.66-13.86a15.82 15.82 0 0 0-9.25 13.12c-.38 4.56 1.4 10.38 6.18 12 5.46 1.89 10.83-2.94 13.28-7.38a20 20 0 0 0 1.22-16.28c-5.66-15.57-24.36-18.28-38.09-12.86-1.77.7-1 3.6.8 2.89Z" />
         <path d="M81.65 74.945a134.38 134.38 0 0 1-11.08 11.17l2.35.31a105.47 105.47 0 0 0-9.91-15.66c-1.16-1.51-3.77 0-2.59 1.52a104.86 104.86 0 0 1 9.91 15.65 1.52 1.52 0 0 0 2.36.31 134.48 134.48 0 0 0 11.08-11.13c1.27-1.44-.85-3.58-2.12-2.12v-.05Z" />
      </g>
   </svg>
);
export default SpiralArrow;
