import React from "react"

function GoogleMaps() {
  return (
    <div className="maps-container min-h-50vh">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d752.7502305896943!2d28.696454269674774!3d41.003353010302625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzEyLjEiTiAyOMKwNDEnNDkuNiJF!5e0!3m2!1str!2str!4v1730019600261!5m2!1str!2str"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMaps
