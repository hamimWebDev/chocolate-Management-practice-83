import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddChocolates = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const country = from.country.value;
    const category = from.category.value;
    const image = from.image.value;
    const newChocolate = { name, country, image, category };
    console.log(newChocolate);

    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Save",
          });
        }
      });
  };
  return (
    <div className="h-auto bg-slate-200 flex justify-center items-center">
      <div className="w-[90%] h-[1000px] bg-white rounded-lg mt-12 mb-12">
        <div className="bg-yellow-950 p-5 w-[40%] mx-auto mt-12 rounded-lg">
          <h2 className="text-center text-white text-3xl font-semibold">
            Chocolate Management System
          </h2>
        </div>
        <Link to="/">
          <div className="mt-5 text-xl ml-[20%] flex items-center">
            <FaArrowLeft className="text-gray-700 " />
            <h5 className=" text-gray-700 font-semibold ml-3">
              All Chocolates
            </h5>
          </div>
        </Link>
        <hr className="my-8 border-gray-400 border-solid border-t-2 mb-8 w-[60%] mx-auto " />
        <div className="w-[60%] h-auto mx-auto bg-slate-200 rounded-md">
          <h1 className="text-center text-2xl font-semibold text-black pt-10">
            New Chocolates
          </h1>
          <p className="text-center text-lg font-semibold text-gray-500 pt-2">
            Use the below form to create a new product
          </p>
          <form onSubmit={handleSubmit} className="p-14">
            <div className="mb-5">
              <h4 className="text-lg mb-2 text-black font-semibold">Name</h4>
              <input
                required
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered input-success w-full  bg-white"
              />
            </div>
            <div className="mb-5">
              <h4 className="text-lg mb-2 text-black font-semibold">Country</h4>
              <input
                required
                type="text"
                name="country"
                placeholder="Type here"
                className="input input-bordered input-success w-full  bg-white"
              />
            </div>
            <div className="mb-5">
              <h4 className="text-lg mb-2 text-black font-semibold">
                Image URL
              </h4>
              <input
                required
                type="text"
                name="image"
                placeholder="Type here"
                className="input input-bordered input-success w-full  bg-white"
              />
            </div>
            <div className="mb-5">
              <h4 className="text-lg mb-2 text-black font-semibold">
                Category
              </h4>
              <select
                name="category"
                className="input input-bordered input-success w-full  bg-white text-black font-semibold select"
                required
              >
                <option value="" disabled selected>
                  Select your category
                </option>
                <option value="premium">Premium</option>
                <option value="cheap">Cheap</option>
                <option value="luxury">Luxury</option>
                <option value="low-cost">Low-cost</option>
              </select>
            </div>
            <input
              className="bg-yellow-950 p-3 w-full text-xl text-white font-semibold rounded-lg mt-5"
              type="submit"
              value="Save"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChocolates;
