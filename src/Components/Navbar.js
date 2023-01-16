import React from 'react'
import NavLogo from "../assets/top-logo.png"
export default function Navbar() {
  return (
    <>
    <header className="header">
  <div className=" text-center" style={{backgroundColor:"#e7e4d4"}}>
   <a href="/"> <img src={NavLogo} alt="" className='m-2'  width={50}height={50} /> </a>
  </div>
  <nav
    className="navbar navbar-expand-lg  "
    style={{ background: "#ebebeb" }}
    id="navbar_top"
  >
    <div className="container-fluid">
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <button
        className="navbar-toggler bg-light "
        type="button"
        id='toggle-btn'
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon " />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 p-2  mb-lg-0">
          <li className="nav-item ms-1">
            <a
              className="nav-link active text-dark "
              aria-current="page"
              id='border'
              href="/"
            >
            
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark " id='border' href="#">
              Our Timelines
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark"  id='border' href="#timeline">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" id='border'  href="#">
              Featuring PES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" id='border'  href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" id='border'  href="#">
              Our Team
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-dark" id='border'  href="#">
              Feedback
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-dark" id='border'  href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    </>
  )
}
