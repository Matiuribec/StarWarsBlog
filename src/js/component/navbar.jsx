import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [links, setLinks] = useState([
    { text: "Home", link: "/home" },
    { text: "Planets", link: "/planets" },
    { text: "Films", link: "/films" },
    { text: "Species", link: "/species" },
    { text: "Characters", link: "/characters" },
    { text: "Vehicles", link: "/vehicles" },
    { text: "Starships", link: "/starships" },
  ]);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div>Star Wars Blog</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={link.link}>
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                {store.favorites.map((favorite, index) => (
                  <li key={index} className="d-flex align-items-center me-2">
                    <Link className="dropdown-item" to={favorite.link}>
                      {favorite.name}
                    </Link>
                    <i
                      role="button"
                      class="bi bi-trash3-fill"
                      onClick={() => actions.deleteFav(index)}
                    ></i>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
