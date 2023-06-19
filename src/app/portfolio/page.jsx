import Card from "@/components/Card";
import background1 from "/public/illustration.png";
import background2 from "/public/websites.jpg";
import background3 from "/public/apps.jpg";

const PortfolioPage = () => {
  return (
    <>
      <h4 className="text-2xl text-center font-extrabold px-2 lg:text-left">
        Choose a gallery
      </h4>
      <div className="flex justify-center lg:justify-start">
        <div className="grid grid-cols-1 py-5 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Card background={background1} text={"illustrations"} />
          <Card background={background2} text={"websites"} />
          <Card background={background3} text={"applications"} />
        </div>
      </div>
    </>
  );
};
export default PortfolioPage;
