import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 207.677 206.318"
      {...props}
    >
      <path
        data-name="logoMark &lt;PathItem&gt;"
        d="M0 0v206.318h53.151V93.897h40.745L0 0zM154.525 0v112.422h-40.744l93.895 93.896V0h-53.151z"
      />
    </Svg>
  );
};

export default Icon;
