import React from "react";

function SelectPercentage({children, precentage, onSelect}) {
  return (
    <>
      <div className="my-4">
        <label className="text-lg" htmlFor="precentage">{children}</label>
        <select 
          value={precentage}
          onChange={(e) => onSelect(Number(e.target.value))}
          className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 my-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
        <option value='0'>Dissatisfide (0%)</option>
        <option value='5'>It was ok (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolut (20%)</option>
        </select>
      </div>
    </>
  );
}

export default SelectPercentage;
