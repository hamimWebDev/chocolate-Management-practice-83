import React from "react";
import { LuPencil } from "react-icons/lu";
import { ImCross } from "react-icons/im";
const ChocolatesTable = ({ chocolate }) => {
  const { name, country, image, category } = chocolate;

  return (
    <div className="">
      <tbody className="grid grid-cols-7 bg-white p-4  w-[70%] mx-auto mt-3 border-b-2 border-gray-500 text-lg">
        <tb className="mx-auto">
          <img src={image} alt="" />
        </tb>
        <tb className="mx-auto col-span-2">{name}</tb>
        <tb className="mx-auto">{country}</tb>
        <tb className="mx-auto">{category}</tb>
        <tb className="mx-auto col-span-2">
          <button className="p-2 bg-slate-100 rounded-md mr-3">
            <LuPencil />
          </button>
          <button className="p-2 bg-slate-100 rounded-md">
            <ImCross />
          </button>
        </tb>
      </tbody>
    </div>
  );
};

export default ChocolatesTable;
