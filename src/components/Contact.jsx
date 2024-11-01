import React from "react"
import * as Icons from "../assets/icons"

function Contact() {
  return (
    <div className="container contact-margin">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <img width="60px" src={Icons.Map} alt="" />
            <div className="d-flex flex-column justify-content-center mx-4 gap-2">
              <span className="fw-bold font-display">ADRES</span>
              <span>790 FOLSOM AVE, SAN FRANCISCO</span>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <img width="60px" src={Icons.Email} alt="" />
            <div className="d-flex flex-column justify-content-center mx-4 gap-2">
              <span className="fw-bold font-display">E-POSTA</span>
              <span className="text-uppercase">place@placeholder.com</span>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <img width="60px" src={Icons.Phone} alt="" />
            <div className="d-flex flex-column justify-content-center mx-4 gap-2">
              <span className="fw-bold font-display">TELEFON</span>
              <span>+90 555 555 55 55</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
