
import Image from "next/image";
import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-[70px] px-4">

            {/* Section Header */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    Explore Our Collection
                </p>

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                    Discover Your Next{" "}
                    <span className="text-emerald-600">Favorite Book</span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                    Explore our collection of amazing books and find your next
                    great story to read.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                {booksData.slice(0,9).map((book:IBook, ind: number) => {
                    return <BookCard key={ind} book={book} />
                })}

            </div>
        </section>
    );
};

export default Books;

