import Product from "@/components/Product";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", { next: { revalidate: 10} });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Our Products
        </h1>
        <p className="mt-2 text-base-content/70">
          Explore our latest collection of products.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;