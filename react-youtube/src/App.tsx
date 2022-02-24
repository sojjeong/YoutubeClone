import React from "react";

import Header from "./components/Header";
import resetStyles from "./styles/resetStyles";

import { Global } from "@emotion/react";
import VideoPlayer from "./components/VideoPlayer";
import VideoInfo from "./components/VideoInfo";

function App() {
  return (
    <div>
      <Global styles={resetStyles} />
      <Header />
      <VideoPlayer />
      <VideoInfo />
    </div>
  );
}

export default App;
