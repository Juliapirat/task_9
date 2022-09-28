import React, { useState } from "react";
import Shop from "./Shop";
import "./index.css";

export default function App() {
  const [login, setLogin] = useState(false);

  function handleOnClick(){
    setLogin(false)
  }

  if (login) {
    return (
      <>
       <div className="flex  flex-col items-center justify-center  bg-gray-100">       
       <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 mb-10 mt-10 rounded-2xl w-50 max-w-md">
        <Shop onClickExit={handleOnClick}/>
        </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-top  bg-gray-100">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 mt-10 rounded-3xl w-50 max-w-md">
        <h2  className='font-medium self-center text-xl sm:text-3xl text-gray-800'>Нужно залогиниться!</h2>
        <div className='mt-5 '>
        <button  type ="submit" 
        className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
         onClick={() => setLogin(true)}>
          Войти
        </button>
        </div>
      </div>
      </div>
    );
  }
}


