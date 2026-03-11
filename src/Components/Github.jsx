import React from "react";
import Macwindow from "./windows/Macwindow";
import gitdata from "../assets/github.json";
import "./github.scss";

const Card = (data) => {
  const { id, title, description, image, tag, demoLink, repositoryLink } =
    data.data;
  return (
    <div className="card">
      <img src={image} className="img" />
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <div className="tags">
        {tag.map((tag) => {
          return <p className="tag">{tag}</p>;
        })}
      </div>

      <div className="links">
        <a href={demoLink} target="_blank">
          Demo Link
        </a>
        <a href={repositoryLink} target="_blank">
          Repository
        </a>
      </div>
    </div>
  );
};

const Github = ({windowName, setwindowstate}) => {
  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
      <div className="cards">
        {gitdata.map((project) => {
          return <Card data={project} />;
        })}
      </div>
    </Macwindow>
  );
};

export default Github;
