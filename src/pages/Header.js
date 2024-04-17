import React from "react";
import Type from "../Type";

function Header() {
  return (
    <div 
      id="Header" 
      className="lg:w-3/5 mt-32 mb-10 text-justify mx-12 lg:mr-80 lg:ml-20"
    >
      <div>
        <div className="table">
        <div className="flex flex-row">
          <code className="text-lightblue_vs table-cell mt-5 whitespace-nowrap">Hello there. <br /></code>
        </div>
        <div className="flex flex-row">
          <code className="text-[#e6f1ff] text-5xl table-cell mt-5 whitespace-nowrap">I'M RORY SWEENEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
        </div>
        <div className="flex flex-row">
        <code className="text-[#e6f1ff] text-5xl table-cell mt-5 mr-10 whitespace-nowrap">
          <Type />
        </code>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
