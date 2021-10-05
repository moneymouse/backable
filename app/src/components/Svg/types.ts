import { SVGAttributes } from "react";
import { SpaceProps } from "styled-system";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {}

export type IconComponentType = {
  iconName: string;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
} & SvgProps;