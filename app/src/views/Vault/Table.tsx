import React from "react";
import {
  Table as TableStyled,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const Table: React.FC = () => {

  const createData = (date: string, hash: string) => {
    return { date, hash };
  };

  const rows = [
    createData(
      "2021/10/05 14:38:08",
      "0x9e6732dc5812b70b46608fcd57acd063f4613eacfa8e8b235a0132548177df34"
    ),
  ];

  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <TableStyled>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Hash ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hash}
              sx={{ "&:last-child td, &:last-child tg": { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <a
                  href={
                    "https://explorer.nervos.org/aggron/transaction/" + row.hash
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {row.hash}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};

export default Table;
