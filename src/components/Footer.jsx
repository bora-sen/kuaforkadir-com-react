import React from "react"

function Footer() {
  const IconWidth = "16px"
  return (
    <footer className="container-fluid d-flex flex-column justify-content-center align-items-center footer-paddings">
      <ul className="d-flex gap-4 list-unstyled">
        <li className="">
          <a href="#">
            {/* INSTAGRAM ICON */}
            <svg
              width={IconWidth}
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
          </a>
        </li>

        <li className="">
          <a href="#">
            {/* FACEBOOK ICON */}
            <svg
              width={IconWidth}
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </li>
        <li className="">
          <a href="#">
            {/* X ICON */}
            <svg
              width={IconWidth}
              stroke="black"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 462.799"
            >
              <path
                fillRule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <span>
        Copyright &copy; -{" "}
        <a className="text-decoration-none text-black-50" href="https://borasen.info">
          Bora
        </a>
      </span>
    </footer>
  )
}

export default Footer
