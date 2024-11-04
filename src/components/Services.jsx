import React, { useRef } from "react"
import SideImage from "../assets/images/services-side.webp"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Power3 } from "gsap"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)
import { Chair, Razor, Soap, Clipper } from "../assets/icons"

function Services() {
  const AnimationContainer = useRef()
  const AnimationTrigger = useRef()

  useGSAP(
    () => {
      gsap.from(".gsap_scroll_go_up", {
        yPercent: 120,
        opacity: 0,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: AnimationTrigger.current,
          start: "top center",
          end: "center center",
          scrub: 1.2,
        },
      })
    },
    {
      scope: AnimationContainer.current,
    }
  )

  return (
    <div ref={AnimationTrigger} className="container-fluid">
      <div ref={AnimationContainer} className="container mb-4 py-5 overflow-hidden">
        <div id="services-section" className="row gsap_scroll_go_up">
          <div className="col-auto">
            <img height={600} src={SideImage} alt="" />
          </div>
          <div className="col d-flex flex-column align-items-start justify-content-center">
            <div className="row lh-sm my-5">
              <span className="fs-1 font-display mb-2">Servislerimiz</span>
              <p className="fs-5 w-75">
                Size en kaliteli hizmeti sunmak için buradayız! Güncel teknikleri ve en iyi ürünleri kullanarak ihtiyaçlarınıza özel çözümler sunuyoruz. İster
                klasik bir kesim ister modern bir görünüm arayın, saç ve cilt bakımınız için her detayı düşünüyoruz.
              </p>
            </div>

            {/* FIRST ROW */}
            <div className="row mx-auto d-flex justify-content-center align-items-center w-100">
              {/* LEFT COLUMN */}
              <div className="col p-4 d-flex gap-4">
                <div className="h-100">
                  <img width="65px" src={Clipper} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span className="fs-4 font-display">Saç Kesimi</span>
                  <p>
                    Modern ve klasik saç kesimleriyle tarzınıza uygun bir görünüm kazandırıyoruz. Herkes için en uygun saç stilini belirliyor ve özenle
                    uyguluyoruz.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col p-4 d-flex gap-4">
                <div className="h-100">
                  <img width="65px" src={Razor} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span className="fs-4 font-display">Sakal Kesimi & Şekillendirme</span>
                  <p>
                    Yüz hatlarınıza en uygun sakal stilini bulmanıza yardımcı oluyoruz. Sakal kesimi ve şekillendirme ile her detayda profesyonel bir dokunuş
                    sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* SECOND ROW */}
            <div className="row mx-auto d-flex justify-content-center align-items-center w-100">
              {/* LEFT COLUMN */}
              <div className="col p-4 d-flex gap-4">
                <div className="h-100">
                  <img width="65px" src={Chair} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span className="fs-4 font-display">Saç ve Sakal Bakımı</span>
                  <p>Canlı ve sağlıklı saç ve sakallar için özel bakım ürünleri kullanıyoruz. Saç ve sakalınıza ihtiyaç duyduğu nemi ve bakımı sağlıyoruz.</p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col p-4 d-flex gap-4">
                <div className="h-100">
                  <img width="65px" src={Soap} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span className="fs-4 font-display">Saç Yıkama ve Fön</span>
                  <p>Saçınızı profesyonelce yıkıyor, ardından dilediğiniz tarzda fön çekerek mükemmel bir görünüm elde etmenizi sağlıyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
