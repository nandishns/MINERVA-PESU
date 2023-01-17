import React from 'react'
import NavLogo from "../assets/top-logo.png"
import { Link } from 'react-router-dom'
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
      <a class="navbar-brand" href="#">MINERVA</a>
      <button
        className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around "
        type="button"
        id='toggle-btn'
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon top-bar " />
        <span className="toggler-icon middle-bar " />
        <span className="toggler-icon bottom-bar " />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 p-2  mb-lg-0">
          <li className="nav-item ms-1">
            <Link
              className="nav-link active  "
              aria-current="page"
              id='border'
              to="/"
            >
            
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link  " id='border' href="#timeline">
              Our Timelines
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link "  id='border' href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " id='border'  href="#featuring-pes">
              Featuring PES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " id='border'  href="#about-us">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id='border'  href="#our-team">
              Our Team
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " id='border'  href="#contact-us">
              Feedback
            </a>
          </li>
          {/* <li className="nav-item ">
            <a className="nav-link text-dark" id='border'  href="#">
              Login
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
</header>

    </>
  )
}
