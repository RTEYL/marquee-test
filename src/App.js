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
import { makeStyles } from "@material-ui/core/styles";

const content = require("./content.json").pages;

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    maxWidth: "100vw",
    minHeight: "100vh",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  container: {
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  li: {
    listStyle: "none",
  },
  btn: {
    backgroundColor: "transparent",
    color: "white",
    border: ".1rem solid white",
  },
});

const App = () => {
  const getDataBySlug = (slug) => {
    return content.filter((page) => page.slug === slug)[0];
  };

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.app + " app-container"}>
        <div className={classes.container}>
          <nav>
            <ul className={classes.li}>
              <img src={Logo} alt="abc logo" />
              <li>
                <NavLink
                  aria-current="true"
                  activeStyle={{ color: "#ffc004" }}
                  to="/industries">
                  Industries
                </NavLink>
              </li>
              <li>
                <NavLink
                  aria-current="true"
                  activeStyle={{ color: "#ffc004" }}
                  to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  aria-current="true"
                  activeStyle={{ color: "#ffc004" }}
                  to="/about-us">
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className={classes.btn}>Contact Us</button>
        </div>
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
