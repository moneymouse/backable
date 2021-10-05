import React from "react";
import styled from "styled-components";
import axios from "axios";

import { NervosIcon } from "../../components/Svg";
import {
  Box,
  Card,
  CardMedia,
  Button,
  TextField,
  Slider,
  CardContent,
} from "@mui/material";
import { Container } from "../../components/Layout";
import Table from "./Table";
import VaultsTable from "./VaultsTable";
import Overview from "./Overview";

import { CkbPriceContext, DataContext } from "../../contexts";
import PriceBanner from "./PriceBanner";

const Wrapper = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(22, 206, 185, 0.08) 0,
    rgba(255, 255, 255, 0) 100%
  );
  min-height: 600px;
  width: 100%;
`;

const Vault = () => {
  const [ckbAmount, setCkbAmount] = React.useState(100000);
  const [ckbSelected, setCkbSelected] = React.useState(0);

  const { ckbPrice, updateCkbPrice } = React.useContext(CkbPriceContext);
  const { updateVaults } = React.useContext(DataContext);

  React.useEffect(() => {
    setInterval(() => {
      getCkbPrice();
      // Just to use set CKBAmount and skip warnings, then remove or use
      setCkbAmount(100000);
    }, 5000);
  });

  const getCkbPrice = async () => {
    try {
      const price = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=nervos-network&vs_currencies=usd"
      );

      updateCkbPrice(price.data["nervos-network"]["usd"]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setCkbSelected(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCkbSelected(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const calculateMaxAmount = (value: number): number => {
    return value * 0.6;
  };

  const calculateMaxAmountToMint = (value: number): string => {
    return (calculateMaxAmount(value) * ckbPrice).toFixed(0);
  };

  return (
    <Wrapper>
      <Container>
        <PriceBanner ckbPrice={ckbPrice} />
        <Overview price={ckbPrice} />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ marginTop: 4, width: 600 }}>
            <CardMedia
              component="img"
              height="100"
              image="https://www.nervos.org/wp-content/uploads/2021/01/Homepage-Header_1-1.gif"
              alt="nervosVault"
            />
            <CardContent>
              <h3>Create Vault</h3>
              <TextField
                sx={{ color: "white", outline: "white", width: "100%" }}
                required
                label={"max: " + ckbAmount}
                type="number"
                value={ckbSelected}
                onChange={handleInputChange}
              >
                <NervosIcon />
                <h2>Hey</h2>
              </TextField>
              <Slider
                min={0}
                max={ckbAmount}
                size="small"
                value={ckbSelected}
                onChange={handleChange}
              />
              <Button
                onClick={() => updateVaults({
                  id: 4001,
                  ration: 166.6,
                  ckb: 50,
                  bcusd: 150,
                })}
                disabled={
                  Math.floor(calculateMaxAmount(ckbSelected)) <= 0 ||
                  ckbSelected > ckbAmount
                }
                sx={{ width: "100%" }}
                color="primary"
                variant="contained"
              >
                Create {calculateMaxAmountToMint(ckbSelected)} BCUSD
              </Button>
            </CardContent>
          </Card>
        </Box>

        <VaultsTable />
        <Table />
      </Container>
    </Wrapper>
  );
};

export default Vault;
