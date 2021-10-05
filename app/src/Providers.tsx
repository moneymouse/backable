import React from "react";
import { DataProvider } from "./contexts";
import { CkbPriceProvider } from "./contexts";

const Providers: React.FC = ({ children }) => {
  return (
    <DataProvider>
      <CkbPriceProvider>{children}</CkbPriceProvider>
    </DataProvider>
  );
};

export default Providers;
