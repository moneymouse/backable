import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Button from "../../components/Button/Button";
import { BackableWhiteIcon, MetamaskIcon } from "../../components/Svg";

const HeaderStyled = styled.div`
  align-items: center;
  backdrop-filter: blur(40px);
  border-bottom: 1px solid rgb(43, 43, 43);
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 10px 32px;
  position: sticky;
  width: 100%;

  top: 0;
  z-index: 10;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 500px;

  ul {
    color: #858587;
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: inherit;

    li {
      cursor: pointer;
      font-size: 16px;
      &:hover {
        font-weight: 600;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

const pulse = keyframes`
0% {
  transform: scale(0.70);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
}

70% {
  transform: scale(1);
  box-shadow: 0 0 0 7px rgba(0, 0, 0, 0);
}

100% {
  transform: scale(0.70);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const Blob = styled.div`
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 10px;
  height: 10px;
  width: 10px;
  transform: scale(1);
  animation: ${pulse} 2s infinite;
`;

const Header: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(false);
  return (
    <HeaderStyled>
      <BackableWhiteIcon width={40} />

      <MenuWrapper>
        <ul>
          <li style={{ color: "black", fontWeight: 600 }}>Create Vault</li>
          <li>Earn</li>
          <li>Governance</li>
          <li>
            <a href="https://github.com/Backable">GitHub</a>
          </li>
        </ul>
      </MenuWrapper>

      <Button
        onClick={() => setLogged(!logged)}
        startIcon={
          !logged ? <MetamaskIcon /> : <Blob className="blob white"></Blob>
        }
      >
        {!logged ? "Connect Wallet" : "0x65Bf.....d891"}
      </Button>
    </HeaderStyled>
  );
};

export default Header;