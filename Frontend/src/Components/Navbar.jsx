import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">
            <NavLink className="navbar-brand text-primary" to="/">Tech-Teach💻</NavLink>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active text-info " to="/" aria-current="page"
                            >Home🏚️
                            <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link text-warning" to="/add">Add Courses➕</NavLink>
                    </li>
                     </ul>
            </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
