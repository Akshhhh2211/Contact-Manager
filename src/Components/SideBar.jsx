import React from "react";
import { Link } from "react-router-dom";
import contactImage from "../utils/contact-book.png";
import barChartImage from "../utils/bar-chart.png";

const Sidebar = () => {
  return (
    <div className="flex border-r-2">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <SidebarItem to="/" image={contactImage} text="Contacts" />
              <SidebarItem
                to="/dashboard"
                image={barChartImage}
                text="Charts And Maps"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, image, text }) => {
  return (
    <li className="rounded-sm">
      <Link to={to} className="flex items-center p-2 space-x-3 rounded-md">
        <img src={image} alt={text} />
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
