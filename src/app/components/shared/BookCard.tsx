import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook;
}


const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

            {/* Image */}
            <div className="relative h-[300px] overflow-hidden bg-slate-100">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow backdrop-blur">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow backdrop-blur">
                    <span className="text-yellow-500">★</span>
                    <span>{book.rating}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                    by{" "}
                    <span className="font-medium text-slate-700">
                        {book.author}
                    </span>
                </p>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Info */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4 text-sm">

                    <div>
                        <p className="text-xs text-slate-400">
                            Pages
                        </p>
                        <p className="font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Published
                        </p>
                        <p className="font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Publisher
                        </p>
                        <p className="font-semibold text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Rating
                        </p>
                        <p className="font-semibold text-slate-700">
                            ⭐ {book.rating}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`} >
                    <button className="btn mt-5 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                        View Details →
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;