import React from "react"

function WorkingHours() {
  const Days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  return (
    <div className="container bg-info px-5">
      <div className="row text-center mb-4">
        <span className="fs-2 font-display">MAIN TITLE</span>
        <span className="fs-4">Subtitle</span>
      </div>

      <div className="row bg-success p-5 w-50 mx-auto">
        {Days.map((day, index) => (
          <div key={index} className="py-4 border border-dark working-hour-item my-2">
            <div className="d-flex justify-content-between align-items-center w-100">
              <span>{day}</span>
              <span>{(day == "Pazar") ? "Kapalı" : "08:00 - 20:00"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkingHours
