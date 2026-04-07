import React from "react";
import cliSvg from "../../public/docs-icons/cli.svg";
import noteSvg from "../../public/docs-icons/note.svg";
import spotifySvg from "../../public/docs-icons/spotify.svg";
import calenderSvg from "../../public/docs-icons/calender.svg";
import linkSvg from "../../public/docs-icons/link.svg";
import mailSvg from "../../public/docs-icons/mail.svg";
import pdfSvg from "../../public/docs-icons/pdf.svg";
import githubSvg from "../../public/docs-icons/github.svg";

// etc...
import "./dock.scss";
const Doks = ({ setwindowstate }) => {
  return (
    <footer className="dock">
      <div
        className=" icon cli"
        onClick={() => {
          setwindowstate((prev) => ({ ...prev, cli: true }));
        }}
      >
        <img src={cliSvg} />
      </div>
      <div
        className=" icon notes"
        onClick={() => {
          setwindowstate((prev) => ({ ...prev, note: true }));
        }}
      >
        <img src={noteSvg} />
      </div>
      <div
        className=" icon spotify"
        onClick={() => {
          setwindowstate((prev) => ({ ...prev, spotify: true }));
        }}
      >
        <img src={spotifySvg} />
      </div>
      <div
        className=" icon calender"
        onClick={() => {
          window.open("https://calendar.google.com/calendar/u/0/r?pli=1");
        }}
      >
        <img src={calenderSvg} />
      </div>
      <div
        className=" icon link"
        onClick={() => {
          window.open("https://www.linkedin.com/in/sumit-kumar-56197a246/");
        }}
      >
        <img src={linkSvg} />
      </div>
      <div
        className=" icon mail"
        onClick={() => {
          window.open("mailto:sumitmandal2954@gmail.com", "_blank");
        }}
      >
        <img src={mailSvg} />
      </div>
      <div
        className=" icon pdf"
        onClick={() => {
          setwindowstate((prev) => ({ ...prev, resume: true }));
        }}
      >
        <img src={pdfSvg} />
      </div>
      <div
        className=" icon github"
        onClick={() => {
          setwindowstate((prev) => ({ ...prev, github: true }));
        }}
      >
        <img src={githubSvg} loading="eager" />
      </div>
    </footer>
  );
};

export default Doks;
