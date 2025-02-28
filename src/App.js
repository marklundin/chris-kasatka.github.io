import "./App.css";
const App = () => {
  return (
    <div className="App">
      <header>
        <ul className="nav" id="navvy">
          <div className="divvy divvy1">
            <li className="nav-item">
              <a href="google.com">
                <img
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUzpq0sXQMAE8LcdYKochNGwIRCg_ePf6cPBaXAURANs_EckbgG6UBlWkXepbSJhnYiGkM2bwbgGNmlh-ic8EnlH-dJ9rtGSgepfO2R--QLMzydns1HQa14mEHagIPXq5VJrdMrA3jQmQl9w-uowkDV=s824-no?authuser=0"
                  alt="Z"
                  className="eye"
                />
              </a>
            </li>
          </div>
          <div className="divvy divvy2">
            <li className="nav-item">
              <a className="nav-link nav-links" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-links" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-links" href="#contact">
                Contact
              </a>
            </li>
          </div>
          <div className="divvy divvy3">
            <li className="nav-item">
              <a
                className="nav-link nav-links nav-icons"
                href="https://github.com/Chris-Kasatka"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-links nav-icons"
                href="https://www.instagram.com/csradose/"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-links nav-icons"
                href="https://www.linkedin.com/in/anthony-radose-35a969236/"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </div>
        </ul>
      </header>

      <main>
        <section className="Intro">
          <div className="container intro-container" id="heading">
            <div id="h-divs">
              <h1 className="display-1">Anthony Radose</h1>
              <h2>Front-end Developer</h2>
            </div>
            <div class="arrow-container">
              <div class="arrow1"></div>
              <div class="arrow2"></div>
              <div class="arrow3"></div>
            </div>
          </div>
        </section>
        <section className="projects" id="projects">
          <div className="container projects-container">
            <h3>Projects</h3>
            <div className="container" id="cards-div">
              <div className="card">
                <a href="https://github.com/Chris-Kasatka/CyberDyne">
                  <img
                    src="https://live.staticflickr.com/65535/52174848461_e6d925ae6d_b.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy">
                  <h5 className="card-title">CyberDyne</h5>
                  <p className="card-text">
                    A todo list app inspired by a 90s aesthetic using html, css
                    and vanilla Javascript.
                  </p>
                  <a href="www.google.com" className="btn bts">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card">
                <a href="https://chris-kasatka.github.io/pokemon-app/">
                  <img
                    src="https://live.staticflickr.com/65535/52175338960_0c9c21326f_b.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy">
                  <h5 className="card-title">Pokemon Pokedex</h5>
                  <p className="card-text">
                    A partial clone of the pokemon pokedex you would find on
                    google using HTML, CSS, React, the framework Material UI and
                    utilizing an API.
                  </p>
                  <a href="www.google.com" className="btn bts">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card">
                <a href="www.google.com">
                  <img
                    src="https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80"
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body cardy">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    A weather app using html, css, React, and APIs.
                  </p>
                  <a href="www.google.com" className="btn bts">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-me">
          <h3 id="about-h3">About Me</h3>
          <div className="container" id="about-container">
            <p>
              David Lee Roth is a God, Blade Runner is the greatest movie of all
              time, and video games rule!
            </p>
            <p>
              I code, play the guitar, play video games, post rad stuff on
              instagram, and drink coffee and beer.
            </p>
            <div className="container about-img-container">
              <img
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1582220107107-590dc8b0fad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1623762736174-77dccc1e571f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://live.staticflickr.com/65535/52172983922_3b925b28cb_b.jpg"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="img-fluid about-img"
                alt="..."
              />
              <img
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="img-fluid about-img"
                alt="..."
              />
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="container">
          <h2 className="footer-h2">Contact</h2>
          <div>
            <ul id="footer-list">
              <li className="footer-li">
                Email:{" "}
                <a id="email " href="www.google.com">
                  csradose@hotmail.com
                </a>
              </li>
              <li className="footer-li">
                <a
                  className="footer-link footer-links footer-icons"
                  href="https://github.com/Chris-Kasatka"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li className="footer-li">
                <a
                  className="footer-link footer-links footer-icons"
                  href="https://www.instagram.com/csradose/"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="footer-li">
                <a
                  className="footer-link footer-links footer-icons"
                  href="https://www.linkedin.com/in/anthony-radose-35a969236/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
