import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// export const generateStaticParams=async()=>{
//     const res = await fetch(`http://localhost:5000/books`);
//     const books=await res.json();

//     return books.slice(1,3).map(book=>({bookId:book.id}))

// }

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(
    `http://localhost:5000/books/${bookId}`);

  if (!res.ok) {
    notFound();
  }

  const book = await res.json();

  const {
    id,
    title,
    author,
    price,
    category,
    description,
    image,
    rating,
    publishedYear,
    inStock,
  } = book;

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/books"
          className="btn btn-ghost mb-6"
        >
          ← Back to Books
        </Link>

        <div className="card overflow-hidden bg-base-100 shadow-xl lg:card-side">
          <figure className="bg-base-200 p-6 lg:w-2/5">
            {image ? (
              <Image
                src=""
                alt={title}
                width={400}
                height={550}
                className="max-h-[500px] w-full rounded-xl object-contain"
              />
            ) : (
              <div className="flex h-80 w-full items-center justify-center">
                <p>No cover image available</p>
              </div>
            )}
          </figure>

          <div className="card-body gap-4 lg:w-3/5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="badge badge-secondary badge-lg">
                {category}
              </span>

              <span className="badge badge-outline">
                Published: {publishedYear}
              </span>
            </div>

            <h1 className="card-title text-3xl font-bold md:text-4xl">
              {title}
            </h1>

            <p className="text-lg text-base-content/70">
              By {author}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xl text-warning">★</span>
              <span className="font-semibold">{rating}</span>
              <span className="text-sm text-base-content/60">
                Book Rating
              </span>
            </div>

            <div className="divider my-0" />

            <div>
              <h2 className="mb-2 text-lg font-semibold">
                About This Book
              </h2>

              <p className="leading-7 text-base-content/80">
                {description}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="text-3xl font-bold text-primary">
                ${price}
              </span>

              <span
                className={`badge badge-lg ${
                  inStock
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="card-actions mt-4">
              <button
                type="button"
                className="btn btn-primary w-full"
                disabled={!inStock}
              >
                {inStock ? "Buy This Book" : "Currently Unavailable"}
              </button>
            </div>

            <p className="text-xs text-base-content/50">
              Book ID: {id ?? bookId}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;