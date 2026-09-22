'use client';
import { BooksContext } from '@/app/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { setReadBooks } = useContext(BooksContext) as {
        setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handleReadBook = () => {
        setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
        toast.success(`You have read "${book.bookName}"`);
    }

    return (
        <div>
            <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>
                Read
            </button>
        </div>
    );
};

export default ReadButton;