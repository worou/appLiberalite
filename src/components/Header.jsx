import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
<div className="container pb-5">
    <div className='row offset-3 col-6 bg-dark'>
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Charisma</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Charisma</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">Calendrier</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              A dérouler
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/">Accueil</Link></li>
              <li><Link className="dropdown-item" to="/calendar">Mon calendrier</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Calendrier</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Recherche" />
          <button className="btn btn-success" type="submit">Rechercher</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  </div>
</div>
  )
}

export default Header