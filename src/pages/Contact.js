import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div 
      id="Contact" 
      className="lg:w-3/5 mt-32 mb-10 text-justify mx-12 lg:mr-80 lg:ml-20"
    >
      <div className="table">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <code>
          Currently looking for a new opportunity, you can contact me by
          clicking on the button below. <br />
          Whether you have a question or just want to say hi, feel free to
          contact me and I’ll try my best to get back to you!
        </code>
        <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <a href="mailto:youssefkizou@gmail.com">
            <code>Contact</code>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
