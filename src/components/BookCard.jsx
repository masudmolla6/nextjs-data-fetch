import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
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
    <div className="card bg-base-100 w-full max-w-sm shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <figure className="px-5 pt-2">
        <Image
          src=""
          alt={title}
          width={400}
          height={500}
          className="h-64 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <h2 className="card-title text-lg">{title}</h2>
          <span className="badge badge-secondary shrink-0">
            {category}
          </span>
        </div>

        <p className="text-sm text-base-content/70">
          By {author}
        </p>

        <p className="text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xl font-bold text-primary">
            ${price}
          </span>

          <span className="badge badge-outline">
            ⭐ {rating}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm text-base-content/70">
          <span>Published: {publishedYear}</span>

          <span
            className={
              inStock
                ? "font-medium text-success"
                : "font-medium text-error"
            }
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="card-actions mt-4">
          <Link href={`/books/${id}`}
            className="btn btn-primary w-full"
            disabled={!inStock}
          >
            {inStock ? "View Details" : "Unavailable"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;