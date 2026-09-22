'use client';

import React, { createContext, ReactNode, useState } from 'react';

export const BooksContext = createContext({});


const BooksProvider = ({children} : {children : ReactNode}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setwishList] = useState([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setwishList,
    };

    return  <BooksContext.Provider value={sharedData}> {children} </BooksContext.Provider>
};

export default BooksProvider; 