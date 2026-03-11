import React, { useState } from "react";
import Dock from "./Components/Dock";
import "./app.scss";
import Navbar from "./Components/Navbar";
import Macwindow from "./Components/windows/Macwindow";
import Github from "./Components/Github";
import Note from "./Components/windows/Note";
import Resume from "./Components/Resume";
import Spotify from "./Components/windows/Spotify";
import Cli from "./Components/windows/Cli";

function App() {
  const [windowstate, setwindowstate] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <main>
      <Navbar />
      <Dock setwindowstate={setwindowstate}/>
      {windowstate.note && <Note windowName="note" setwindowstate={setwindowstate} />}
      {windowstate.spotify && <Spotify windowName="spotify" setwindowstate={setwindowstate} />}
      {windowstate.cli && <Cli windowName="cli" setwindowstate={setwindowstate} />}
      {windowstate.resume && <Resume windowName="resume" setwindowstate={setwindowstate} />}
      {windowstate.github && <Github windowName="github" setwindowstate={setwindowstate} />}
    </main>
  );
}

export default App;
