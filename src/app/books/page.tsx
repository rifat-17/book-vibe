
import { IBook } from '@/types/books.type';
import BookCard from '../components/shared/BookCard';

// Fetch Books
const getBooks = async () => {
    try {

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books data:", error);
        return [];
    }
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-17.5 px-4">

            {/* Section Header */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    Explore All Books
                </p>

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                    Discover Your Next{' '}
                    <span className="text-emerald-600">
                        Favorite Book
                    </span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                    Explore our collection of amazing books and find your next
                    great story to read.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book:IBook) => (
                    <BookCard
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </div>

        </section>
    );
};

export default Books;
