import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const ExpoLogo = require("../assets/logos/ExpoLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="lg:w-3/5 mt-32 mb-10 text-justify mx-12 lg:mr-80 lg:ml-20"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-md mt-5">
          <code>
            Hi, I'm Rory Sweeney. I like frontend development 
            (I ❤️ React.js) and building applications to help people
            navigate the internet more easily. <br />
            {/* Projects I am proud of include   */}
            When I'm not staring at a screen, I like keeping fit with running
            and drowning my sorrows playing a bit of indie rock 🤘.
          </code>
          <br />
          <br />
          <code>My weapons of choice are:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={TypescriptLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>TypeScript</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ExpoLogo}
                alt="Expo Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Expo</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
