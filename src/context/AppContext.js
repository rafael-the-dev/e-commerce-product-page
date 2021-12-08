import React, { createContext, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
   
    const [ currentPage, setCurrentPage ] = useState('');

    return (
        <AppContext.Provider value={{ currentPage, setCurrentPage }}>
            { children }
        </AppContext.Provider>
    );
}