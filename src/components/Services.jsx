import React from "react"

function Services() {
  return (
    <div className="container my-4">
      <div className="row bg-info">
        <div className="col-auto bg-success">
          <img src="https://placehold.co/400x600" alt="" />
        </div>
        <div className="col d-flex flex-column align-items-start justify-content-center">
          <div className="row lh-sm my-5">
            <span className="fs-1 font-display">BIG TITLE</span>
            <span className="fs-4">Description</span>
          </div>

          {/* LEFT SIDE - FIRST ROW */}
          <div className="row mx-auto d-flex justify-content-center align-items-center bg-danger w-100">
            {/* LEFT COLUMN */}
            <div className="col p-4 d-flex gap-4">
              <img src="https://placehold.co/50x50" alt="" />
              <div className="d-flex flex-column">
                <span className="fs-4 font-display">HEADER TEXT</span>
                <span>TEXT2</span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col p-4 d-flex gap-4">
              <img src="https://placehold.co/50x50" alt="" />
              <div className="d-flex flex-column">
                <span className="fs-4 font-display">HEADER TEXT</span>
                <span>TEXT2</span>
              </div>
            </div>
          </div>

          {/* LEFT SIDE - SECOND ROW */}
          <div className="row mx-auto d-flex justify-content-center align-items-center bg-danger w-100">
            {/* LEFT COLUMN */}
            <div className="col p-4 d-flex gap-4">
              <img src="https://placehold.co/50x50" alt="" />
              <div className="d-flex flex-column">
                <span className="fs-4 font-display">HEADER TEXT</span>
                <span>TEXT2</span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col p-4 d-flex gap-4">
              <img src="https://placehold.co/50x50" alt="" />
              <div className="d-flex flex-column">
                <span className="fs-4 font-display">HEADER TEXT</span>
                <span>TEXT2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
