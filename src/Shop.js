import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop(props) {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    //   fetch("https://covid-shop-mcs.herokuapp.com")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       setItems(data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    //     .finally(() => setLoader(false));
    // }, []);
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  if (loader) {
    return (
    <p>Загружаем товары...</p>
    );
  } else {
  return (
    <div className="shop">
      <ul>
      {items.map((item) => (
        <Item info={item} loader={loader}/>
      ))}
      </ul>
      <div className="flex flex-col">
      <button  type ="submit" className="flex items-center justify-center  focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition  duration-150"
        onClick={props.onClickExit}>
          Выйти
        </button>
        </div>
    </div>
  );}
}
