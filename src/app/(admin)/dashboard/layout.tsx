const Layout = ({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) => {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <div>{products}</div>
        <div>{analytics}</div>
      </div>
      <div className="mt-5">{payments}</div>
    </div>
  );
};

export default Layout;
