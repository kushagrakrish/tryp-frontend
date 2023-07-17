import React from "react";

const TableFallbackUI = () => {
  return (
    <>
      <div className='bg-gray-200 w-full h-[50vh] flex flex-col justify-center items-center uppercase mt-10'>
        <h1 className='text-3xl text-gray-700 font-bold'>
          Oops! No such data found!
        </h1>
      </div>
    </>
  );
};

export default TableFallbackUI;
