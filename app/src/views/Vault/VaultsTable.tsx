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
