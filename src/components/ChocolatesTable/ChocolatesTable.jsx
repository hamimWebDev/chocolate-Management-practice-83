import React from "react";
import { LuPencil } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ChocolatesTable = ({ chocolate, chocolates, setChocolates }) => {
  const { _id, name, country, image, category } = chocolate;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = chocolates.filter((cho) => cho._id !== _id);
              setChocolates(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <tbody className="grid grid-cols-7 bg-white p-4  w-[70%] mx-auto mt-3 border-b-2 border-gray-500 text-lg items-center">
        <tb className="mx-auto">
          <img className="h-24 rounded-2xl" src={image} alt="" />
        </tb>
        <tb className="mx-auto col-span-2">{name}</tb>
        <tb className="mx-auto">{country}</tb>
        <tb className="mx-auto">{category}</tb>
        <tb className="mx-auto col-span-2">
          <Link to={`/updateChocolates/${_id}`}>
            <button className="p-2 bg-slate-100 rounded-md mr-2">
              <LuPencil />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="p-2 bg-slate-100 rounded-md"
          >
            <ImCross />
          </button>
        </tb>
      </tbody>
    </div>
  );
};

export default ChocolatesTable;
