import styled from "styled-components";
import { space } from "styled-system";
import { SvgProps } from "./types";

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  flex-shrink: 0;
  ${space}
`;

Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;