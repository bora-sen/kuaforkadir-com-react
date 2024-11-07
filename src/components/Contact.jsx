import React from "react"
import * as Icons from "../assets/icons"
const address = import.meta.env.VITE_ADDRESS
const mail = import.meta.env.VITE_MAIL
const phone = import.meta.env.VITE_PHONE_NUMBER

function Contact() {
  return (
    <section id="BizeUlasin" className="container-fluid contact-margin bg-secondary-subtle py-5">
      <div className="container">
        <div className="row gap-5 gap-lg-0">
          <div className="col-lg-4 col-12 d-lg-flex align-items-center justify-content-center">
            <div className="d-flex">
              <img width="60px" src={Icons.Map} alt="" />
              <div className="d-flex flex-column justify-content-center mx-4 gap-2">
                <span className="fw-bold font-display">ADRES</span>
                <span>{address}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-lg-flex align-items-center justify-content-center">
            <div className="d-flex">
              <img width="60px" src={Icons.Email} alt="" />
              <div className="d-flex flex-column justify-content-center mx-4 gap-2">
                <span className="fw-bold font-display">E-POSTA</span>
                <span className="text-uppercase">{mail}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-lg-flex align-items-center justify-content-center">
            <div className="d-flex">
              <img width="60px" src={Icons.Phone} alt="" />
              <div className="d-flex flex-column justify-content-center mx-4 gap-2">
                <span className="fw-bold font-display">TELEFON</span>
                <span>{phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
