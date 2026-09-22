'use client';

import React, { useContext } from 'react';
import { BooksContext } from '@/app/context/BooksContext';
import { IBook } from '@/types/books.type';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
    const { wishList, setwishList } = useContext(BooksContext) as {
        wishList: IBook[];
        setwishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

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