import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:16px}"
          }
        </style>
      </defs>
      <circle cx={300} cy={300} r={297.5} fill="#231f20" />
      <path
        className="prefix__cls-2"
        d="M171 228.12h129s41.45 3.51 39.69-25.49c-1.65-27.32-41.1-22.88-41.1-22.88l-139.07-.23s-16.79-3.37-17.57-19.08c-1.23-24.61 18.45-24.61 18.45-24.61h179.49c16.53 0 53.29 19.9 49.93 70.31-3.52 52.74-37.79 67.68-54.49 67.68s-152.93.88-170.5 0-24.12 3.51-24.08 24.61c0 16.74 1.23 20.21 22.32 20.21s207.49-1.8 229.39 0c9.17.75 66.79 14.84 66.79 73.83 0 38.67-32.52 71.72-75.58 71.7-122.21-.08-211.81-1.39-211.81-1.39"
      />
      <path
        className="prefix__cls-2"
        d="M157.8 371.37h236.41s16.69 0 16.7 20.22c0 22-15.82 22-15.82 22H157.8s-17.05 0-17.05-21.09 17.05-21.13 17.05-21.13z"
      />
    </Svg>
  );
};

export default Icon;
