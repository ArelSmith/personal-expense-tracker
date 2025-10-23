import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <div>
      <NavigationBar brand="ExpenseTracker" />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
