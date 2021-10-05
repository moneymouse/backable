import React from "react";
import {
  Button,
  Table as TableStyled,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { DataContext } from "../../contexts";

const VaultsTable: React.FC = () => {
  const { vaults } = React.useContext(DataContext);

  const createData = (
    id: number,
    ratio: number,
    deposited: number,
    avail: number,
    bcusd: number
  ) => {
    return { id, ratio, deposited, avail, bcusd };
  };

  const rows = [createData(4042, 212.65, 200, 50, 150)];

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4, padding: 4 }}>
      <TableStyled>
        <TableHead>
          <h3>Your Vaults</h3>
          <TableRow>
            <TableCell>Vault ID</TableCell>
            <TableCell>Current Ratio</TableCell>
            <TableCell>Deposited</TableCell>
            <TableCell>Avail to Withdraw</TableCell>
            <TableCell>BCUSD</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vaults.length > 0 ? (
            vaults.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child tg": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.ratio}%</TableCell>
                <TableCell>{row.deposited} CKB</TableCell>
                <TableCell>{row.avail} CKB</TableCell>
                <TableCell>{row.bcusd} BCUSD</TableCell>
                <TableCell>
                  <Button variant="outlined">Manage Vault</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div style={{ marginTop: 16 }}>
              There are no hay vaults yet. Create one with CKB to get started.
            </div>
          )}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};

export default VaultsTable;
