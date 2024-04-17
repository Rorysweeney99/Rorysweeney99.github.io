import React, { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { Document, Page, pdfjs } from "react-pdf";
const pdf = require("../assets/RorySweeneyCV2024.pdf");
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      id="Resume"
      className="lg:w-3/5 mt-32 mb-10 text-justify mx-12 lg:mr-80 lg:ml-20 z-10"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <Document file={pdf} className="w-1/4 h-1/4">
            <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
          </Document>
        </div>
        {/* <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">University Of Galway</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Science - Computer Science and Infomation Technology
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sep 2018 - May 2022
            <br />
              • Overall Grade: 2.1
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Student Tutor</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              University Of Galway
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sep 2021 - May 2022</code>
            <br />
            <code className="text-sm">
              <br />• Teaching undergraduate class Python as well as assisting 
              <br />with any queries relating to given Python assignments.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Quality Assurance Specialist</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              SOTI{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Jun 2022 - Apr 2023</code>
            <br />
            <code className="text-sm">
              <br />• Managing different AWS hosted testing enviroments used internally by QA team
              <br />• Experience with AWS products Dynamo, S3, Lambda, EC2, Route 53 & Cloudfront
            </code>
          </div>
          </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              HPE{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Feb 2021 - Aug 2021 (Internship)</code>
            <br />
            <code className="text-xs text-brown_vs">• Apr 2023 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Based in HPE's research and development centre 
              <br />• Experience with Salesforce lightning web components & Apex
              <br />• Managing teams existing Selenium tests & creating new tests
            </code>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
