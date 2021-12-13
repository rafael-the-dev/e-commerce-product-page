import React, { createContext, useCallback, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
   
    const [ currentPage, setCurrentPage ] = useState('');
    const [ openCartDialog, setOpenCartDialog ] = useState(false);
    const [ cartList, setCartList ] = useState([]);

    const toggleCartDialog = useCallback(() => setOpenCartDialog(s => !s), []);
    const closeCartDialog = useCallback(() => setOpenCartDialog(false), []);

    const getCartList = useCallback(() => [ ...cartList ], [ cartList ]);

    return (
        <AppContext.Provider value={{ closeCartDialog, currentPage, getCartList, openCartDialog, setCurrentPage, toggleCartDialog }}>
            { children }
        </AppContext.Provider>
    );
}