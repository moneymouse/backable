import React from "react";
import styled from "styled-components";

import { Button, CircularProgress } from "@mui/material";
import { NervosIcon } from "../../components/Svg";

const PriceBannerStyled = styled.div`
  align-items: center;
  background: white;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px;
  width: 100%;
`;

const Circle = styled.div`
  background-color: rgb(22, 206, 185);
  display: grid;
  border-radius: 50%;
  height: 40px;
  place-items: center;
  width: 40px;
`;

interface PriceBannerProps {
  ckbPrice: number;
}

const PriceBanner: React.FC<PriceBannerProps> = (props) => {
  const { ckbPrice } = props;

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <PriceBannerStyled>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Circle>
          <NervosIcon/>
        </Circle>
        <div style={{ marginLeft: 8 }}>
          <h6>CKB</h6>
          <span>Nervos</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <span>Price USD</span>
          <h4>
            {ckbPrice <= 0 ? (
              <CircularProgress color="success" size={20} />
            ) : (
              "$" + ckbPrice
            )}
          </h4>
        </div>
        <Button
          onClick={() =>
            openInNewTab("https://www.binance.com/es/trade/CKB_USDT?layout=pro")
          }
          sx={{ marginLeft: 4 }}
          variant="outlined"
          color="success"
        >
          Get CKB
        </Button>
      </div>
    </PriceBannerStyled>
  );
};

export default PriceBanner;
