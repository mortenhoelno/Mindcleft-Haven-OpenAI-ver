import React from "react";
import Game from "./components/Game.jsx";

export default function App() {
  // Ingen JSX for å slippe bygg-steg (ren ESM i nettleser)
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Game, null)
  );
}

