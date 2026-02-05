import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <embed
          src={`${import.meta.env.BASE_URL}MyResume.pdf`}
          frameborder="0"
        ></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
