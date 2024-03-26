import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChocolatesTable from "./components/ChocolatesTable/ChocolatesTable";
import { FaPlus } from "react-icons/fa6";
import { GiChocolateBar } from "react-icons/gi";

const App = () => {
  const chocolates = useLoaderData();
  console.log(chocolates);
  return (
    <div className="bg-slate-100 ">
      <div className="w-[95%] pt-12 bg-white mx-auto">
        <div className="bg-yellow-950 p-5 w-[40%] mx-auto mb-20 rounded-lg">
          <h2 className="text-center text-white text-3xl font-semibold">
            Chocolate Management System
          </h2>
        </div>
        <Link to="/addChocolates">
          <div className="p-4 ml-56 w-[16%] border border-slate-300 rounded-2xl mb-8">
            <div className="flex justify-center items-center text-lg text-black font-semibold">
              <FaPlus className="mr-3" />
              <h4>New Chocolate</h4>
              <GiChocolateBar className="ml-2 text-2xl" />
            </div>
          </div>
        </Link>

        <thead className="grid grid-cols-7 bg-slate-200 p-4 rounded-xl w-[70%] mx-auto">
          <th className="mx-auto">Image</th>
          <th className="mx-auto col-span-2">Name</th>
          <th className="mx-auto">Country/Factory</th>
          <th className="mx-auto">Category</th>
          <th className="mx-auto col-span-2">Action</th>
        </thead>
        <div>
          {chocolates.map((chocolate) => (
            <ChocolatesTable
              key={chocolate._id}
              chocolate={chocolate}
            ></ChocolatesTable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
