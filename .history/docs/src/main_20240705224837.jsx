import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure this file exists in docs/src
import '@fontsource/outfit';
import '@fontsource/roboto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
