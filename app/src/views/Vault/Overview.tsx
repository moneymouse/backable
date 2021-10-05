import React from "react";
import {
    Card,
    CardContent,
    Grid,
  } from "@mui/material";


interface OverviewProps {
    price: number;
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { price } = props;

  const calculatePriceLiquidation = (price: number) => {
    return (price * 0.7).toFixed(8);
  }

  return (
    <Grid sx={{ marginTop: 4 }} container spacing={5}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
              <h3>Liquidation Price</h3>
              <span style={{ fontSize: 32 }}>${calculatePriceLiquidation(price)} USD</span>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h3>Collateralization Ratio</h3>
            <span style={{ fontSize: 32 }}>{166.6} %</span>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h3>Collateral Locked</h3>
            <span style={{ fontSize: 32 }}>{200} CKB</span>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Overview;
