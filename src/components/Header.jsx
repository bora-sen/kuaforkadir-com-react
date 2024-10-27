import React from "react"

function Header() {
  return (
    <header className="bg-black text-white position-fixed top-0 container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="mx-4 navbar-brand" href="#">
            Berber
          </a>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Test1
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Test1
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
