import React from "react";

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <div className="m-[1.2rem] flex justify-between items-center">
        <label className="text-[1.3rem] font-bold" htmlFor="billAmount">How much was the bill?</label>
        <input
          className="mr-10 p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 w-[10rem]"
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        ></input>
      </div>
    </>
  );
}

export default BillInput;

