import React from "react";

function Navbar(props) {
  return (
    <nav id="nav-menu" className="navbar navbar-expand-lg navbar-dark  " style={{position:"fixed",width:"100%",zIndex:"100"}}>
      <div class="container">
        <a class="navbar-brand" href="#">
          Aayan Ahmad
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-primary"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" >
              <a class="nav-link home" aria-current="page" href="#">
                Home<span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link skills" href="#skills">
                Skills <span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link about" href="#academics">
                About Me <span className=" ms-2 span"></span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link projects" href="#projects">
                Projects <span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link resume" target="_blank" href="https://drive.google.com/file/d/10801Zi9IRPd_OB-Vo7qznzE3kl4fbV4b/view?usp=sharing">
                Resume <span className=" ms-2 span"></span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link contact btn btn-outline-dark btn-sm rounded-pill"
                href="#connect"
              >
                Connect <i class=" ms-2 fas fa-envelope-open-text"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
