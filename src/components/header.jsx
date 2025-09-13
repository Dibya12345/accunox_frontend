import React from "react";
import { Settings, MoreVertical } from "lucide-react";
import NextButton from "../assets/nextbutton.svg";
import "./header.scss";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="dashboard-header">
      <section className="dashboard-header__left">
        <div className="dashboard-header__left__breadcrumb-group">
          <span className="dashboard-header__left__breadcrumb">Home</span>
          <span className="dashboard-header__left__separator">
            <img src={NextButton} alt="Next" />
          </span>
          <span className="dashboard-header__left__active">Dashboard UI</span>
        </div>
      </section>

      <section className="dashboard-header__right">
        <input
          type="text"
          placeholder="Search anything..."
          className="dashboard-header__right__search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="dashboard-header__right__actions">
          <button className="dashboard-header__right__actions__icon-btn">
            <Settings size={16} />
          </button>
          <button className="dashboard-header__right__actions__icon-btn">
            <MoreVertical size={16} />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
