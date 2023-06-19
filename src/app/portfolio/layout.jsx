const PortfolioLayout = ({ children }) => {
  return (
    <section className="py-28">
      <div className="flex flex-col">
        <h1 className="text-6xl text-center font-extrabold mb-4 lg:mb-8 lg:text-left md:text-8xl">
          Our Work
        </h1>
        {children}
      </div>
    </section>
  );
};
export default PortfolioLayout;
