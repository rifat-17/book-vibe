'use client'
import React, { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';

import { IBook } from '@/types/books.type';
import Image from 'next/image';
import ListedBookCards from '../components/shared/ListedBookCards';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }

        if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }

        if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    };

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishList);
    return (
        <div className='container mx-auto py-20px]' >

            <h2 className='my-4 bg-amber-100 rounded-3xl 
            py-16 font-bold text-4xl text-center' >Listed books</h2>

            <div className='text-center' >
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    defaultValue="Pick a Runtime"
                    className="select select-success">
                    <option disabled={true}> Sort By</option>
                    <option value={"rating"} >Rating</option>
                    <option value={"pages"} >Number of Pages</option>
                    <option value={"year"} >Published Year</option>
                </select>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio"
                    name="my_tabs_3" className="tab"
                    aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 
                border-base-300 p-6 space-y-[25px]">

                    {sortedReadBooks.length > 0 ? sortedReadBooks.map((book: IBook) => {
                        return <ListedBookCards key={book.bookId} book={book} />
                    }) : <p className='text-center text-lg font-semibold' >No read Books Found</p>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab"
                    aria-label={`Wishlist Books (${wishList.length})`}
                    defaultChecked />
                <div className="tab-content bg-base-100 
                border-base-300 p-6">
                    {
                        sortedWishlist.length > 0 ? sortedWishlist.map((book: IBook) => {
                            return <ListedBookCards key={book.bookId} book={book} />
                        }) : <p className='text-center text-lg font-semibold' >No Wishlist Books Found</p>
                    }
                </div>


            </div>

        </div>
    );
};

export default ListedBooks;