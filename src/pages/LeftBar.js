import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const JSXIcon = require("../assets/icons/JSXIcon.png");

const LeftBar = () => {
  const [showPages, SetShowPages] = useState(true);
  const [showSRC, SetShowSRC] = useState(true);
  const [showProjects, SetShowProjects] = useState(true);
  const [showProjectsList2, SetShowProjectsList2] = useState(true);

  const Pages = () => (
    <div>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JSX Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>About.js</p>
        </div>
      </a>
      <a href="/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Resume.js</p>
        </div>
      </a>
      <a href="/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Contact.js</p>
        </div>
      </a>
    </div>
  );

  const Projects = () => (
    <div>
      <a href="https://github.com/ReqApp/Req" target="_blank">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JSX Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Req</p>
        </div>
      </a>
      <a href="https://github.com/Rorysweeney99/FYP_Frontend" target="_blank">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSXIcon}
            alt="JSX Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>FYP - Frontend</p>
        </div>
      </a>
      <a href="https://github.com/Rorysweeney99/FYP_Backend" target="_blank">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>FYP - Backend</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-4 flex bg-[#262526] h-full">
      <div>
        <div className="ml-8 mb-3 whitespace-nowrap">
          <code className="table-cell text-[#e6f1ff] text-1xl">
            EXPLORER
          </code>
        </div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowSRC(!showSRC)}
        >
          {showSRC ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>src</p>
        </div>
        {showSRC ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowPages(!showPages)}
            >
              {showPages ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>website pages</p>
            </div>
            {showPages ? <Pages /> : null}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowProjects(!showProjects)}
            >
              {showProjects ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>git projects</p>
            </div>
            {showProjects ? <Projects /> : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default LeftBar;
