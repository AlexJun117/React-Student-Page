import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import axios from "axios";
import StudentAPI from "./services/student_api";

const httpClient = axios.create({
  baseURL: "https://194.56.34.22/student/",
  headers: {
    "Content-type": "application/json",
  },
});
const studentAPI = new StudentAPI(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App studentAPI={studentAPI} />
  </React.StrictMode>,
  document.getElementById("root")
);
