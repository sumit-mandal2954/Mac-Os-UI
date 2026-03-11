import React from "react";
import Macwindow from "./Macwindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName, setwindowstate}) => {

  const commands = {

    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },

    date: {
      description: "Show current date and time",
      usage: "date",
      fn: () => new Date().toString(),
    },

    hello: {
      description: "Say hello",
      usage: "hello",
      fn: () => "Hello Sumit 👋 Welcome to your portfolio terminal!",
    },

    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Hi, I am Sumit Mandal. I am a Full Stack Developer building modern web apps using React, Node.js, and MongoDB.",
    },

    skills: {
      description: "Show my skills",
      usage: "skills",
      fn: () =>
        "Skills: JavaScript, React, Node.js, Express, MongoDB, SQL, HTML, CSS",
    },

    projects: {
      description: "Show my projects",
      usage: "projects",
      fn: () =>
        "Projects: LearnMore (Online Course Platform), Portfolio Website, Authentication System",
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        "Email: sumit@email.com | LinkedIn: linkedin.com/in/sumit",
    },

    whoami: {
      description: "Display current user",
      usage: "whoami",
      fn: () => "sumit@developer",
    },

    pwd: {
      description: "Print current directory",
      usage: "pwd",
      fn: () => "/home/sumit/portfolio",
    },

    ls: {
      description: "List files",
      usage: "ls",
      fn: () =>
        "about.txt  skills.txt  projects.txt  contact.txt",
    },

  };

  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={"Welcome to Sumit's Terminal Portfolio 🚀"}
         promptLabel={"sumit@portfolio:~$"}
        />
      </div>
    </Macwindow>
  );
};

export default Cli;