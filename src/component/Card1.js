import React from "react";

const Card1 = () =>{

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-4 flex-wrap justify-between inline-block">
      <img
        src="https://via.placeholder.com/300x200" // Replace with your food image URL
        alt="Food"
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Delicious Food</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-gray-800 text-xl mt-2">$12.99</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Card1;