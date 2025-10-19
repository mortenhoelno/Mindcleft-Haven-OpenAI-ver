import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const rootEl = document.getElementById("root");
createRoot(rootEl).render(React.createElement(App));

