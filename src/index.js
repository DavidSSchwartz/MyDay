import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "tailwindcss/tailwind.css";
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
ReactDOM.render(<App />, document.getElementById("root"));