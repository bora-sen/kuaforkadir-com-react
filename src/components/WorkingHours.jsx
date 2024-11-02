import React from "react"

function WorkingHours() {
  const Days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  return (
    <div className="container px-5">
      <div className="row text-center mt-5">
        <span className="fs-2 font-display">Çalışma Saatlerimiz</span>
      </div>

      <div className="row p-5 w-50 mx-auto">
        {Days.map((day, index) => (
          <div key={index} className="py-4 border-bottom border-dark-subtle working-hour-item mb-2">
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
