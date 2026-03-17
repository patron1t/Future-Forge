import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set dark mode as default (if no preference saved)
if (!localStorage.getItem("theme")) {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
