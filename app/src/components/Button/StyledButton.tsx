import styled from "styled-components";
import { BaseButtonProps } from "./types";

interface TransientButtonProps extends BaseButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
        &:disabled,
        &.button--disabled {
          cursor: not-allowed;
          background-color: gray;
          border-color: gray;
          box-shadow: none;
          color: black;
          cursor: not-allowed;
        }
      `;
  }

  return `
      &:disabled,
      &.button--disabled {
        background-color: gray;
        border-color: gray;
        box-shadow: none;
        color: black;
        cursor: not-allowed;
      }
    `;
};

const StyledButton = styled.button`
  align-items: center;
  background-color: #18efb1;
  border: none;
  border-radius: 8px;
  color: black;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: fit-content;
  padding: 12px 16px;
  justify-content: space-between;

  &:hover:not(:disabled):not(.button--disabled):not(.button--disabled):not(:active) {
    opacity: 0.7;
  }

  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
`;

export default StyledButton;
