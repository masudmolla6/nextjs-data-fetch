import Image from "next/image";

const Product = ({ product }) => {
  const { title, description, price, category, image, rating } = product;

  return (
    <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <Image
          src=""
          alt={title}
          width={400}
          height={300}
          className="h-56 w-full rounded-xl object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between gap-2">
          <h2 className="card-title text-lg">{title}</h2>
          <div className="badge badge-secondary">{category}</div>
        </div>

        <p className="text-sm text-base-content/70">{description}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-primary">
            ${price}
          </p>

          <div className="badge badge-outline">
            ⭐ {rating}
          </div>
        </div>

        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary btn-sm">
            View Details
          </button>
          <button className="btn btn-outline btn-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;