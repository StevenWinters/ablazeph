import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// git reflog expire --expire=now --all
// git gc --prune=now --aggressive

// incase of tracked & cached large files,
// use this command to remove cache
// stage, commit, & push after
