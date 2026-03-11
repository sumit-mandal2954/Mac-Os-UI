import React, { useEffect, useState } from "react";
import axios from "axios";
import Macwindow from "./Macwindow";
import SyntaxHighlighter from "react-syntax-highlighter";
import './note.scss'
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = ({windowName, setwindowstate}) => {
  const [markdown, setmarkdown] = useState(null);
  useEffect(() => {
    axios.get("/note.txt").then((response) => {
      setmarkdown(response.data);
    });
  }, []);
  return (
    <Macwindow windowName={windowName} setwindowstate={setwindowstate}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark} className='markdown'>{markdown}</SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Macwindow>
  );
};

export default Note;
