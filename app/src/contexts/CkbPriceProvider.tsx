import React, { useState, createContext } from "react";

interface CkbPriceContext {
    ckbPrice: number;
    updateCkbPrice: React.Dispatch<React.SetStateAction<number>>
}

export const Context = createContext<CkbPriceContext>({
    ckbPrice: 0,
    updateCkbPrice: () => null,
});

const CkbPriceProvider: React.FC = ({ children }) => {
    const [ckbPrice, setCkbPrice] = useState(0);

    return (
        <Context.Provider value={ {ckbPrice, updateCkbPrice: setCkbPrice} }>
            {children}
        </Context.Provider>
    )
};

export default CkbPriceProvider;