import React from "react";

function OutPut({bill, tip}) {
  return (
    <>
      <h3 className="text-[1.5rem] font-bold">
        You pay {bill + tip} (${bill} + ${tip})
      </h3>
    </>
  );
}

export default OutPut;
