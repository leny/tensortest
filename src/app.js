/* leny/tensortest
 *
 * /src/app.js - Client entry point
 *
 * coded by leny@flatLand!
 * started at 31/03/2020
 */

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Root from "./components/root";

const $app = document.querySelector("#app");

ReactDOM.render(<Root />, $app);
