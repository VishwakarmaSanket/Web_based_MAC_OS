import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          console.log(windowsState);
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img
          src={`${import.meta.env.BASE_URL}doc-icons/github.svg`}
          alt="GitHub"
        />
      </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src={`${import.meta.env.BASE_URL}doc-icons/note.svg`} alt="Note" />
      </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src={`${import.meta.env.BASE_URL}doc-icons/pdf.svg`} alt="PDF" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
        className="icon calender"
      >
        <img
          src={`${import.meta.env.BASE_URL}doc-icons/calender.svg`}
          alt="Calender"
        />
      </div>
      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, spotify: true }))
        }
        className="icon spotify"
      >
        <img
          src={`${import.meta.env.BASE_URL}doc-icons/spotify.svg`}
          alt="Spotify"
        />
      </div>
      <div
        onClick={() => {
          window.open("mailto:sanketvkarma10@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src={`${import.meta.env.BASE_URL}doc-icons/mail.svg`} alt="Mail" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/sanket-vishwakarma-361224338/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src={`${import.meta.env.BASE_URL}doc-icons/link.svg`} alt="Link" />
      </div>
      <div
        onClick={() => setWindowsState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src={`${import.meta.env.BASE_URL}doc-icons/cli.svg`} alt="CLI" />
      </div>
    </footer>
  );
};

export default Dock;
