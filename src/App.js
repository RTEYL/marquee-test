import React from "react";
import "./App.css";
import Logo from "./abc.svg";
import Marquee from "./marquee";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
const content = require("./content.json").pages;

const App = () => {
  const getDataBySlug = (slug) => {
    return content.filter((page) => page.slug === slug)[0];
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <img src={Logo} alt="abc logo" />
            <li>
              <NavLink
                aria-current="true"
                activeStyle={{ color: "orangered" }}
                to="/industries">
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-current="true"
                activeStyle={{ color: "orangered" }}
                to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                aria-current="true"
                activeStyle={{ color: "orangered" }}
                to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button>Contact Us</button>
        <Switch>
          <Route path="/industries">
            <Marquee data={getDataBySlug("industries")} />
          </Route>
          <Route path="/services">
            <Marquee data={getDataBySlug("services")} />
          </Route>
          <Route path="/about-us">
            <Marquee data={getDataBySlug("about-us")} />
          </Route>
          <Route path="/">
            <Redirect to="/industries" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
