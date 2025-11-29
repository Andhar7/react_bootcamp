import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
//import "../src/tasks/indexTask.css"
//import AppSecond from "./tasks/AppSecond";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
