
import Image from 'next/image';
import React from 'react';

import ReadButton from '@/app/components/bookDetails/ReadButton';
import WishListButton from '@/app/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

// Fetch Books
const getBooks = async (): Promise<IBook[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch books data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

const BookDetailsPage = async ({
    params,
}: IBookDetailsPageProps) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id)
    );

    if (!book) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold">
                    Book Not Found
                </h1>

                <p className="mt-3 text-base-content/60">
                    The book you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-10">

            {/* ==================== Book Card ==================== */}
            <div className="card lg:card-side overflow-hidden border border-base-200 bg-base-100 shadow-xl">

                {/* ==================== Book Image ==================== */}
                <figure className="flex items-center justify-center bg-base-200 p-8 lg:w-2/5">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={800}
                        height={600}
                        className="h-125 w-full max-w-sm rounded-2xl object-cover shadow-lg"
                    />
                </figure>

                {/* ==================== Book Details ==================== */}
                <div className="card-body p-6 lg:w-3/5 lg:p-10">

                    {/* Category */}
                    <div>
                        <span className="badge badge-primary badge-outline">
                            {book.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="mt-3 text-3xl font-bold leading-tight lg:text-5xl">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-lg text-base-content/60">
                        By{' '}
                        <span className="font-semibold text-base-content">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-3">

                        <div className="rating rating-sm">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked={
                                        Math.round(book.rating) === star
                                    }
                                    readOnly
                                />
                            ))}
                        </div>

                        <span className="font-semibold">
                            {book.rating}
                        </span>

                        <span className="text-base-content/50">
                            / 5
                        </span>
                    </div>

                    {/* Review */}
                    <p className="mt-5 leading-7 text-base-content/70">
                        {book.review}
                    </p>

                    {/* ==================== Book Information ==================== */}
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">

                        {/* Pages */}
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm text-base-content/50">
                                Pages
                            </p>

                            <p className="text-lg font-bold">
                                {book.totalPages}
                            </p>
                        </div>

                        {/* Published */}
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm text-base-content/50">
                                Published
                            </p>

                            <p className="text-lg font-bold">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        {/* Publisher */}
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm text-base-content/50">
                                Publisher
                            </p>

                            <p className="text-sm font-bold">
                                {book.publisher}
                            </p>
                        </div>

                        {/* Book ID */}
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-sm text-base-content/50">
                                Book ID
                            </p>

                            <p className="text-lg font-bold">
                                #{book.bookId}
                            </p>
                        </div>

                    </div>

                    {/* ==================== Tags ==================== */}
                    <div className="mt-6">

                        <p className="mb-3 font-semibold">
                            Tags
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="badge badge-ghost px-4 py-3"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* ==================== Actions ==================== */}
                    <div className="card-actions mt-8">

                        <ReadButton book={book} />

                        <WishListButton book={book} />

                    </div>

                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;
