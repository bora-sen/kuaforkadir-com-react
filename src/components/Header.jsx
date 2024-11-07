import React from "react"

function Header() {
  return (
    <header className="z-1 bg-black text-white position-fixed top-0 container-fluid header-padding">
      <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="mx-4 navbar-brand font-hero fs-1" href="#">
            KuaforKadir
          </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" className="collapse navbar-collapse text-center">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Servislerimiz">
                Servislerimiz
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-nowrap" href="#BizeUlasin">
                Bize Ulaşın
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
