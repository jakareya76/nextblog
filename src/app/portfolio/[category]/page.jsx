import Image from "next/image";
import Button from "@/components/Button";
import { CategoryItems } from "@/constants";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = CategoryItems[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <>
      <h4 className="text-4xl text-green-500 uppercase text-center font-extrabold px-2 lg:text-left">
        {params.category}
      </h4>
      {data.map((item) => (
        <div
          className="flex flex-col-reverse gap-14 mt-14 mb-28 p-5 portfolio__category-container lg:flex-row"
          key={item.id}
        >
          <div className="w-full flex flex-col gap-5 justify-center lg:w-1/2">
            <h1 className="text-[36px] font-extrabold lg:text-[50px]">
              {item.title}
            </h1>
            <p className="text-[14px] lg:text-[20px]">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="w-full relative h-[500px] lg:w-1/2 ">
            <Image className="object-cover" fill src={item.image} alt="img" />
          </div>
        </div>
      ))}
    </>
  );
};
export default Category;
