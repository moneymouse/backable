/// <reference types="react-scripts" />

interface Window {
  ethereum: {
    isMetaMask?: true;
    request: (...args: any[]) => Promise<void>;
    selectedAddress?: string;
  };
}

type SerializedBigNumber = string;
