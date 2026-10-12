import BookCard from "@/components/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {next: {revalidate: 10}});

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Explore Our Books
        </h1>

        <p className="mt-3 text-base-content/70">
          Discover your next favorite book from our collection.
        </p>

        <div className="badge badge-primary mt-4">
          {books.length} Books Available
        </div>
      </div>

      {/* Books Grid */}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <h2 className="text-2xl font-semibold">
            No Books Found
          </h2>

          <p className="mt-2 text-base-content/70">
            Please check back later for new books.
          </p>
        </div>
      )}
    </section>
  );
};

export default BooksPage;