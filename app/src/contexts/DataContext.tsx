import React from "react";
import { createContext } from "react";

type Vault = {
  id: number;
  ratio: number;
  deposited: number;
  avail: number;
  bcusd: number;
};

interface DataProps {
  txStatus: string | any;
  authStatus: number;
  address: string | any;
  ckbBalance: number;
  txHistory: string[];
  vaults: Vault[] | any;
  updateVaults: any;
}

export const Context = createContext<DataProps>({
  txStatus: undefined,
  authStatus: 0,
  address: undefined,
  ckbBalance: 0x0,
  txHistory: [],
  vaults: [],
  updateVaults: () => null,
});

const DataProvider: React.FC = ({ children }) => {
  const [txStatus, setTxStatus] = React.useState("none");
  const [authStatus, setAuthStatus] = React.useState(0);
  const [address, setAddress] = React.useState(0x0);
  const [ckbBalance, setCkbBalance] = React.useState(0);
  const [txHistory, setTxHistory] = React.useState([]);
  const [vaults, setVaults] = React.useState([]);

  const updateVaults = (obj: never) => {
    setVaults((prevState) => [...prevState, obj]);
  };

  return (
    <Context.Provider
      value={{
        txStatus,
        authStatus,
        address,
        ckbBalance,
        txHistory,
        vaults,
        updateVaults,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default DataProvider;
