import React from 'react'
import ReactPropTypes from 'react'

function TopSection(props) {
  return (
    <>
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
//           <img src="../cimages/warriorf.jpg" className="d-block w-100" alt="img" />
          <img src={require('./cimages/warriorf.jpg')} className="d-block w-100" alt="img"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to {props.CompanyTitle}</h5>
            <p>An immersive {props.CompanyType} experience.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./cimages/tanjirof.jpg" className="d-block w-100" alt="img" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Demon Slyer</h5>
            <p>Breath taking animations with amazing storyline.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../cimages/movief.jpg" className="d-block w-100" alt="img" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Ghibli Movies</h5>
            <p>As beautiful as it gets.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default TopSection
