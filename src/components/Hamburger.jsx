"use client";

const Hamburger = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div
      className={`absolute top-5 right-5 md:hidden ${toggleMenu && "top-7"}`}
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <div
        className={`w-8 h-[2px] bg-white my-2 duration-300 ${
          toggleMenu && "-rotate-45 absolute"
        }`}
      />
      <div className={`w-8 h-[2px] bg-white my-2 ${toggleMenu && "hidden"}`} />
      <div
        className={`w-8 h-[2px] bg-white my-2 duration-300 ${
          toggleMenu && "rotate-45"
        }`}
      />
    </div>
  );
};
export default Hamburger;
