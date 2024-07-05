import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Interface from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Interface />
  </StrictMode>
);