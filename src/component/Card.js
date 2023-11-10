import React from "react";

function Card(props) {
  return (
    <section className=" max-w-lg mr-4 l text-gray-600 body-font py-7 justify-between flex-wrap inline-block ">
      <div className="container  mx-auto md: w-60 ">
        <div className="  grid grid-flow-dense">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-4 rounded-md w-full h-full">
            <a
              href="card"
              className="block relative h-48 rounded overflow-hidden"
            >
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.res.cloudinaryImageId}`}
              />
            </a>
            <div className="mt-4  ">
              <h2 className="text-gray-900 title-font text-lg font-medium ">
                {props.res.name}
              </h2>
              <p>{props.res.avgRating}</p>
              <p className="mt-1">{props.res.cuisines.join(", ")}</p>
              <p className="mt-1">{props.res.costForTwo}</p>
              <p className="mt-1">{props.res.locality}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
