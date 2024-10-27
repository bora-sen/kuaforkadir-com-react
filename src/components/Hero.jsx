import React from "react"
import FrontIllustration from "../assets/images/hero-section-illustration.png"
import StillImage from "../assets/images/video-background-still.webp"

function Hero() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 hero-section">
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/video/video-background.mp4" type="video/mp4" />
          <source src={StillImage} type="image/" />
          Üzgünüm, Tarayıcınız video etiketini çalıştıramıyor. :(
        </video>
      </div>
      <div className="d-flex flex-column justify-items-center align-items-center p-4">
        <img width="400px" src={FrontIllustration} alt="" />
        <span className="cursor-default text-white font-display fw-bold font-hero fs-1">Kuafor Kadir</span>
      </div>
    </div>
  )
}

export default Hero