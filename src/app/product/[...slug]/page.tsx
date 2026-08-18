type DetailProductPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const DetailProductPage = async ({ params }: DetailProductPageProps) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      {slug ? (
        <>
          <h1> Detail Product Page</h1>
          <p>{`Category: ${slug[0]}`}</p>
          <p>{`Gender: ${slug[1]}`}</p>
          <p>{`Merk: ${slug[2]}`}</p>
        </>
      ) : (
        <h1>Product Page</h1>
      )}
    </div>
  );
};

export default DetailProductPage;
