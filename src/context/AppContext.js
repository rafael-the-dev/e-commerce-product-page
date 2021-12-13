import React, { createContext, useCallback, useState, useRef } from 'react';
import image1 from '../assets/images/image-product-1.jpg'

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
   
    const [ currentPage, setCurrentPage ] = useState('');
    const [ openCartDialog, setOpenCartDialog ] = useState(false);
    const [ cartList, setCartList ] = useState([]);

    const toggleCartDialog = useCallback(() => setOpenCartDialog(s => !s), []);
    const closeCartDialog = useCallback(() => setOpenCartDialog(false), []);

    const getCartList = useCallback(() => [ ...cartList ], [ cartList ]);

    const products = useRef([
        {
            id: 1,
            name: 'Fall Limited Edition Sneakers',
            price: 125.00,
            image: image1
        }
    ]);

    const getProducts = useCallback(() => [ ...products.current ], []);

    const addProductToCart = useCallback((id, quantity) => {
        const product = getProducts().find(item => item.id = id);
        if(product) {
            setCartList(oldList => {
                return [ ...oldList, { id: oldList.length + 1, product, quantity, totalPrice: product.price * quantity }]
            });
        }
    }, [ getProducts ]);

    const removeProductFromCart = useCallback((id) => () => {
        const product = getProducts().find(item => item.id = id);
        if(product) {
            setCartList(oldList => oldList.filter(item => item.id !== id));
        }
    }, [ getProducts ]);

    return (
        <AppContext.Provider value={{ addProductToCart, closeCartDialog, currentPage, getProducts, getCartList, openCartDialog, 
            setCurrentPage, toggleCartDialog, removeProductFromCart }}>
            { children }
        </AppContext.Provider>
    );
}