import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters, totalCountersScore }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Counts:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <a className="navbar-brand">
        Counts Score:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCountersScore}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
