import React from "react";

import Header from "./views/Header/Header";
import Vault from "./views/Vault/Vault";

const App = () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else alert("Install MetaMask!");
  return (
    <>
      <Header />
      <Vault />
    </>
  );
};

export default App;
