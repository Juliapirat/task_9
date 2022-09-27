import React, { useState,useEffect } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

 function handleAddClick() {
    setTotal((prev) => prev + 1)
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal((prev) => prev - 1)
    }
  }

  return (
      <ul>
      {info.map((i) => (
        <li key={i.id}>
          <div className="item">
            <img src={i.image} alt="item_image" className="rounded-xl" /> 
              <div className="mx-4 mb-2 ">
              <h2 className="my-4 font-sans font-medium text-xl">{i.name}</h2>
              <p className="font-sans text-lg">
                {i.desc}</p>
              </div>
            <div className="flex flex-row ml-2 mb-6">
              <button
                className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                disabled={total === 0}
                onClick={handleRemoveClick}
              >
                -
              </button>
              <h3 className="mt-4">{total ? total : ""}</h3>
              <button 
              className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={handleAddClick}>
                +
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    
  );
}
