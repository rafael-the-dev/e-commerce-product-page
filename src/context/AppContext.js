import React, { createContext, useCallback, useState, useRef, useEffect } from 'react';
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
    const localStorageName = useRef('e-commerce-product-page');
    const addItemsToLocalStorage = useCallback(items => {
        localStorage.setItem(localStorageName.current, JSON.stringify(items));
    }, [])

    const addProductToCart = useCallback((id, quantity) => {
        const product = getProducts().find(item => item.id = id);
        if(product) {
            setCartList(oldList => {
                let result = oldList.find(item => item.product.id === product.id);
                const items =  [ ...oldList ];

                if(result) {
                    result.quantity = result.quantity + quantity;
                    result.totalPrice = result.totalPrice + (product.price * quantity);
                } else {
                    result = { id: oldList.length + 1, product, quantity, totalPrice: product.price * quantity };
                    items.push(result);
                }

                addItemsToLocalStorage(items);
                return items;
            });
        }
    }, [ addItemsToLocalStorage, getProducts ]);

    const removeProductFromCart = useCallback((id) => () => {
        const product = getProducts().find(item => item.id = id);
        if(product) {
            setCartList(oldList => {
                const items = oldList.filter(item => item.id !== id);
                addItemsToLocalStorage(items);
                return items;
            });
        }
    }, [ addItemsToLocalStorage, getProducts ]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(localStorageName.current));
        if(Array.isArray(items)) {
            setCartList(items);
        }
    }, [])

    return (
        <AppContext.Provider value={{ addProductToCart, closeCartDialog, currentPage, getProducts, getCartList, openCartDialog, 
            setCurrentPage, toggleCartDialog, removeProductFromCart, setCartList }}>
            { children }
        </AppContext.Provider>
    );
}