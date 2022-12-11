import React from "react";
import "./Header.css";

import Burger from "../Burger/burger";

import { Link } from "react-router-dom";

import { FaGlobeAmericas } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/">
          <span className="logo">
            <FaGlobeAmericas className="header-globe" />
            Travel journal
          </span>
        </Link>
        <Burger />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link to="/">
              <li className="header-nav-list-item">Travel Plan</li>
            </Link>
            <Link to="/about">
              <li className="header-nav-list-item">Bucket List</li>
            </Link>
            <Link to="/">
              <li className="header-nav-list-item">Travel Budget</li>
            </Link>
            <Link to="/">
              <li className="header-nav-list-item">Daily Planner</li>
            </Link>
            <Link to="/">
              <li className="header-nav-list-item">Packing List</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
