import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import modsen from "../assets/modsen.png"
import deccanherald from "../assets/deccanherald.png";
import pluralSight from "../assets/pluralSight.png"
function Projects(props) {
  AOS.init();
  return (
    <div data-aos="fade-right" id="projects" className="project-body my-5">
      <div>
        <h1 className="text-center">
          Projects <i class="fas fa-paper-plane ms-2"></i>
        </h1>
        <hr className=" border border-2 border-warning" />
      </div>
      {/* Mobile View */}
      <div className=" mt-3">
        <div className="row m-auto">
          <div className="col-sm-12   d-md-none mb-3  ">
            <div className="card shadow">
              <a
                className="m-auto"
                href={modsen}
                target="_blank"
              >
                <img
                  src={modsen}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">
                 Modsens
                </div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    An E-commerce app using Html,CSS
                    <br />
                    Javascript
                    <br /> Hard-Coded
                    <br />
                    Cart functionality.
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>

                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://fastidious-dusk-a78f9a.netlify.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/VaibhavBedarkar/Team-ModSena"
                >
                  Github Link <i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href={deccanherald}
                target="_blank"
              >
                <img
                  src={deccanherald}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">Deccan Chronicles</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    News App using ReactJs Using UseState Hooks.
                    <br />
                    Ui-Html,CSS,Chakra-Ui
                    <br /> You Can:- You can read real time national,international & indian states news.
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://tacky-ball-3034.vercel.app/"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/aayan269/tacky-ball-3034"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12  d-md-none mb-3">
            <div className="card shadow">
              <a
                className="m-auto"
                href={pluralSight}
                target="_blank"
              >
                <img
                  src={pluralSight}
                  class="card-img-top img-thumbnaill pt-3 rounded"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <div className="h4 text-center mb-3">PluralSight</div>
                <br />
                <div className="mb-3">
                  <span className="h5">Description:</span>
                  <span className="text-muted ms-2 fs-6">
                    UI-HTML,Css,ReactJs,Chakra-ui
                    <br />
                    api-reqres.in
                  </span>
                  <br />
                </div>
                <span className="me-3">Link</span>
                <a
                  className="btn btn-outline-success btn-sm"
                  target="_blank"
                  href="https://peppy-puppy-d6089d.netlify.app/login"
                >
                  Visit Link<i class="ms-2 fab fa-firefox"></i>
                </a>
                <a
                  className="btn btn-outline-dark ms-2 btn-sm"
                  target="_blank"
                  href="https://github.com/aayan269/aayanAhmad-spotless-gate-4639"
                >
                  Github Link<i class="fab fa-github ms-2"></i>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Mobile End */}
      <div className="timeline d-none d-md-block">
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={modsen}
              target="_blank"
            >
              <img
                src={modsen}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Modsens</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  An E-commerce app using Html,CSS
                  <br />
                  Javascript
                  <br /> Hard-Coded
                  <br />
                  Cart functionality
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>

              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://fastidious-dusk-a78f9a.netlify.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/VaibhavBedarkar/Team-ModSena"
              >
                Github Link <i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={deccanherald}
              target="_blank"
            >
              <img
                src={deccanherald}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">Deccan Chronicles</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                News App using ReactJs Using UseState Hooks.
                    <br />
                    Ui-Html,CSS,Chakra-Ui
                    <br /> You Can:- You can read real time national,international & indian states news.
                </span>
                <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://tacky-ball-3034.vercel.app/"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/aayan269/tacky-ball-3034"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="card shadow">
            <a
              className="m-auto"
              href={pluralSight}
              target="_blank"
            >
              <img
                src={pluralSight}
                class="card-img-top img-thumbnaill pt-3 rounded"
                alt="..."
              />
            </a>
            <div className="card-body">
              <div className="h4 text-center mb-3">PluralSight</div>
              <br />
              <div className="mb-3">
                <span className="h5">Description:</span>
                <span className="text-muted ms-2 fs-6">
                  UI-HTML,Css,ReactJs,Chakra-ui
                    <br />
                    api-reqres.in
                  </span>
                  <br />
              </div>
              <span className="me-3">Link</span>
              <a
                className="btn btn-outline-success btn-sm"
                target="_blank"
                href="https://peppy-puppy-d6089d.netlify.app/login"
              >
                Visit Link<i class="ms-2 fab fa-firefox"></i>
              </a>
              <a
                className="btn btn-outline-dark ms-2 btn-sm"
                target="_blank"
                href="https://github.com/aayan269/aayanAhmad-spotless-gate-4639"
              >
                Github Link<i class="fab fa-github ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i class="fas fa-car fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
