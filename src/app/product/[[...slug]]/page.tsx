type DetailProductPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

const getData = async () => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
    next: {
      tags: ["products"],
      // revalidate: 30,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to Fetch Data");
  }
  return res.json();
};

const ProductPage = async ({ params }: DetailProductPageProps) => {
  const { slug } = await params;
  const products = await getData();
  // console.log(products);
  return (
    <div className="grid grid-cols-5 mt-4 place-items-center gap-3 p-4">
      {/* {slug ? "Detail Product Page" : "Product Page"} */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs dark:bg-gray-800 dark:border-gray-700 my-5 rounded-md"
            key={product.id}
          >
            <a href="#">
              <img
                className="rounded-base mb-6 object-cover h-96 w-full"
                src={product.image}
                alt={product.name}
              />
            </a>
            <div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight dark:text-white truncate">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center justify-between mt-6">
                <span className="text-3xl font-extrabold text-heading dark:text-white">
                  Rp.{product.price}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      {slug && (
        <>
          <h1> Detail Product Page</h1>
          <p>{`Category: ${slug[0]}`}</p>
          <p>{`Gender: ${slug[1]}`}</p>
          <p>{`Merk: ${slug[2]}`}</p>
        </>
      )}
    </div>
  );
};

export default ProductPage;
