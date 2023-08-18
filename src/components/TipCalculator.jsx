import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import OutPut from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [precentage1, setPrecentage1] = useState(0);
  const [precentage2, setPrecentage2] = useState(0);

  function handleReset() {
    setBill("");
    setPrecentage1(0);
    setPrecentage2(0);
  }

  const tip = bill * ((precentage1 + precentage2) / 2 / 100);
  return (
    <>
      <div className="bg-blue-200 container p-5 shadow-md rounded-xl">
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage precentage={precentage1} onSelect={setPrecentage1}>
          How did you like the service
        </SelectPercentage>
        <SelectPercentage precentage={precentage2} onSelect={setPrecentage2}>
          How did your friend like te service
        </SelectPercentage>

        {bill > 0 && (
          <>
            <OutPut bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </>
  );
}

export default TipCalculator;
