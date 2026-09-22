import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBooksCardProps {
    book: IBook;
}

const ListedBookCards = ({ book }: IListedBooksCardProps) => {
    return (
        <div>
            <div className="container mx-auto px-4">

                <div className="card bg-base-100 shadow-lg border border-base-200 hover:shadow-xl transition-all duration-300">
                    {/* Book Image */}
                    <figure className="h-80 bg-base-200 p-6 flex items-center justify-center">
                        <Image
                            width={400}
                            height={500}
                            src={book.image}
                            alt={book.bookName}
                            className="h-full w-auto max-w-full object-contain rounded-lg shadow-md"
                        />
                    </figure>

                    <div className="card-body">

                        {/* Category & Rating */}
                        <div className="flex items-center justify-between">
                            <span className="badge badge-primary badge-outline">
                                {book.category}
                            </span>

                            <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★</span>
                                <span className="font-semibold">
                                    {book.rating}
                                </span>
                            </div>
                        </div>

                        {/* Book Name */}
                        <h2 className="card-title text-xl mt-2">
                            {book.bookName}
                        </h2>

                        {/* Author */}
                        <p className="text-base-content/60">
                            by <span className="font-medium text-base-content">
                                {book.author}
                            </span>
                        </p>

                        {/* Review */}
                        <p className="text-sm text-base-content/60 line-clamp-3 mt-2">
                            {book.review}
                        </p>

                        {/* Book Info */}
                        <div className="grid grid-cols-2 gap-3 mt-4">

                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="text-xs text-base-content/50">
                                    Pages
                                </p>
                                <p className="font-semibold">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div className="bg-base-200 rounded-lg p-3">
                                <p className="text-xs text-base-content/50">
                                    Published
                                </p>
                                <p className="font-semibold">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {book.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="badge badge-ghost"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="card-actions mt-5">
                            <Link href={`/books/${book.bookId}`} > 
                            <button className="btn btn-primary w-full">
                                View Details
                            </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCards;