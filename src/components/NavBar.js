import React from 'react'
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <div className='nbar'>
    <header className=" navbar-sticky  header-static">
      
      {/* <!-- Logo Nav START --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo START --> */}
          <a className="navbar-brand" href="index.html">
           <div className="headingg"><h2>{props.title}</h2></div>			
          </a>
          {/* <!-- Logo END --> */}
    
          {/* <!-- Responsive navbar toggler --> */}
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
            <span className="navbar-toggler-icon"></span>
          </button>
    
          {/* <!-- Main navbar START --> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll mx-auto">
    
              {/* <!-- Nav item 1 Demos --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                  <li> <a className="dropdown-item active" href="index.html">Home default</a></li>
                  <li> <a className="dropdown-item" href="index-2.html">Magazine classNameic</a></li>
                  <li> <a className="dropdown-item" href="index-3.html">Magazine</a></li>
                  <li> <a className="dropdown-item" href="index-4.html">Home cards</a></li>
                  <li> <a className="dropdown-item" href="index-5.html">Blog classNameic</a></li>
                </ul>
              </li>
    
              {/* <!-- Nav item 2 Pages --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  <li> <a className="dropdown-item" href="about-us.html">About</a></li>
                  <li> <a className="dropdown-item" href="contact-us.html">Contact</a></li>
                  {/* <!-- Dropdown submenu --> */}
                  <li className="dropdown-submenu dropend"> 
                    <a className="dropdown-item dropdown-toggle" href="/">Other Archives</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      <li> <a className="dropdown-item" href="author.html">Author Page</a> </li>
                      <li> <a className="dropdown-item" href="categories.html">Category page 1</a> </li>
                      <li> <a className="dropdown-item" href="categories-2.html">Category page 2</a> </li>
                      <li> <a className="dropdown-item" href="tag.html"># tag</a> </li>
                      <li> <a className="dropdown-item" href="search-result.html">Search result</a> </li>
                    </ul>
                  </li>
                  <li> <a className="dropdown-item" href="404.html">Error 404</a></li>
                  <li> <a className="dropdown-item" href="signin.html">signin</a></li>
                  <li> <a className="dropdown-item" href="signup.html">signup</a></li>
                  {/* <!-- Dropdown submenu levels --> */}
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="/">Dropdown levels</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      {/* <!-- dropdown submenu open right --> */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="/">Dropdown (end)</a>
                        <ul className="dropdown-menu" data-bs-popper="none">
                          <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                          <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                        </ul>
                      </li>
                      <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                      {/* <!-- dropdown submenu open left --> */}
                      <li className="dropdown-submenu dropstart">
                        <a className="dropdown-item dropdown-toggle" href="/">Dropdown (start)</a>
                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                          <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                          <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                        </ul>
                      </li>
                      <li> <a className="dropdown-item" href="/">Dropdown item</a> </li>
                    </ul>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li> 
                    <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                      <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                    </a> 
                  </li>
                  <li> 
                    <a className="dropdown-item" href="docs/index.html" target="_blank">
                      <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                    </a> 
                  </li>
                  <li className="dropdown-divider"></li>
                  <li> 
                    <a className="dropdown-item" href="https://blogzine.webestica.com/rtl" target="_blank">
                      <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                    </a> 
                  </li>
                  <li> 
                    <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                      <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!
                    </a> 
                  </li>
                </ul>
              </li>
    
              {/* <!-- Nav item 3 Post --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
                <ul className="dropdown-menu" aria-labelledby="postMenu">
                  {/* <!-- dropdown submenu --> */}
                  <li className="dropdown-submenu dropend"> 
                    <a className="dropdown-item dropdown-toggle" href="/">Post grid</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      <li> <a className="dropdown-item" href="post-grid.html">Post grid</a> </li>
                      <li> <a className="dropdown-item" href="post-grid-4-col.html">Post grid 4 col</a> </li>
                      <li> <a className="dropdown-item" href="post-grid-masonry.html">Post grid masonry</a> </li>
                      <li> <a className="dropdown-item" href="post-grid-masonry-filter.html">Post grid masonry filter</a> </li>
                      <li> <a className="dropdown-item" href="post-large-and-grid.html">Post mixed large than grid</a> </li>
                    </ul>
                  </li>
                  <li> <a className="dropdown-item" href="post-list.html">Post list</a> </li>
                  <li> <a className="dropdown-item" href="post-list-2.html">Post list 2</a> </li>
                  <li> <a className="dropdown-item" href="post-cards.html">Post card</a> </li>
                  <li> <a className="dropdown-item" href="post-overlay.html">Post overlay</a> </li>
                  <li className="dropdown-divider"></li>
                  <li> <a className="dropdown-item" href="post-single.html">Post single magazine</a> </li>
                  <li> <a className="dropdown-item" href="post-single-2.html">Post single classNameic</a> </li>
                  <li> <a className="dropdown-item" href="post-single-3.html">Post single minimal</a> </li>
                  <li> <a className="dropdown-item" href="post-single-4.html">Post single card</a> </li>
                  <li> <a className="dropdown-item" href="post-single-5.html">Post single review</a> </li>
                  <li> <a className="dropdown-item" href="post-single-6.html">Post single video</a> </li>
                  <li className="dropdown-divider"></li>
                  <li> <a className="dropdown-item" href="pagination-styles.html">Pagination styles</a> </li>
                </ul>
              </li>
              <li className="nav-item">	<a className="nav-link" href="../docs/alerts.html">Components</a></li>
            </ul>
          </div>
          {/* <!-- Main navbar END --> */}
    
          {/* <!-- Nav right START --> */}
          <div className="nav flex-nowrap align-items-center">
            {/* <!-- Nav Button --> */}
            <div className="nav-item d-none d-md-block">
              <a href="/" className="btn btn-sm btn-danger mb-0 mx-2">Subscribe!</a>
            </div>
            {/* <!-- Nav Search --> */}
            <div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
              <a className="nav-link dropdown-toggle" role="button" href="/" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-search fs-4"> </i>
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
                <form className="input-group">
                  <input className="form-control border-success" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-success m-0" type="submit">Search</button>
                </form>
              </div>
            </div>
            {/* <!-- Offcanvas menu toggler --> */}
            <div className="nav-item">
              <a className="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                <i className="bi bi-text-right rtl-flip fs-2" data-bs-target="#offcanvasMenu"> </i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Logo Nav END --> */}
    </header>
    </div>
  )
}

export default NavBar