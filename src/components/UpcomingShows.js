import React from 'react'
import ReactPropTypes from 'react'

function UpcomingShows(props) {
  return (
    <div className='upcomingshows'>

    <div className="container">
        <br/>
        <h1>Upcoming Shows</h1>
        <hr />
        <br/>
    </div>
  
    <div className="container my-4">
      <div className="row mb-2">
        <div className="col-md-6">
          <div
            className="
              row
              g-0
              border
              rounded
              overflow-hidden
              flex-md-row
              mb-4
              shadow-sm
              h-md-250
              position-relative
            "
          >
            <div className="col p-4 d-flex flex-column position-static temp">
              <strong className="d-inline-block mb-2 text-primary"
                >Hajime Isayama</strong
              >
              <h3 className="mb-0">{props.UpcomingShowsone}</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="c tempard-text mb-auto">
                Genres : Action, Military, Mystery, Super Power, Drama, Fantasy,
                Shounen.
              </p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src="../cimages/aot t.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="
              row
              g-0
              border
              rounded
              overflow-hidden
              flex-md-row
              mb-4
              shadow-sm
              h-md-250
              position-relative
            "
          >
            <div className="col p-4 d-flex flex-column position-static temp">
              <strong className="d-inline-block mb-2 text-success">
                Hirohiko Araki</strong
              >
              <h3 className="mb-0">{props.UpcomingShowstwo}</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">Genres: Action, Adventure, Shounen.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src="../cimages/jjba t.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container my-4">
      <div className="row mb-2">
        <div className="col-md-6">
          <div
            className="
              row
              g-0
              border
              rounded
              overflow-hidden
              flex-md-row
              mb-4
              shadow-sm
              h-md-250
              position-relative
            "
          >
            <div className="col p-4 d-flex flex-column position-static temp">
              <strong className="d-inline-block mb-2 text-primary"
                >Makoto Yukimura</strong
              >
              <h3 className="mb-0">{props.UpcomingShowsthree}</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                Genres: Action, Adventure, Historical, Drama, Seinen.
              </p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src="../cimages/vs t.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="
              row
              g-0
              border
              rounded
              overflow-hidden
              flex-md-row
              mb-4
              shadow-sm
              h-md-250
              position-relative
            "
          >
            <div className="col p-4 d-flex flex-column position-static temp">
              <strong className="d-inline-block mb-2 text-success">
                Akiyuki Nosaka</strong
              >
              <h3 className="mb-0">{props.UpcomingShowsfour}</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">Genres: Drama, Historical.</p>
              <a href="#" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src="../cimages/gotf t.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpcomingShows