'use client';

import React, { useContext } from 'react';
import { BooksContext } from '@/app/context/BooksContext';
import { IBook } from '@/types/books.type';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
    const { wishList, setwishList } = useContext(BooksContext);

    const handleAddToWishList = () => {
        setwishList([...wishList, book]);
        toast.success(`You have added "${book.bookName}" to your wishlist`)
    };

    return (
        <div>
            <button className="btn btn-outline" onClick={() => handleAddToWishList()}>
                Add to Wishlist
            </button>
        </div>
    );
};

export default WishListButton;