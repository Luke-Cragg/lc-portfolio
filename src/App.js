import "./App.css";
import LCLogo from "./Images/LComputing-1.png";

function App() {
  return (
    <div className="App">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body>
        <nav class="navbar" id="navbar">
          <ul class="navigation">
            <li>
              <img src={LCLogo} alt="logo" id="logo" />
            </li>
            <li>
              <a href="#navbar">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <hr />
        <div class="hero-image">
          <div class="hero-text">
            <h1>Luke Cragg</h1>
            <p>Software Engineering</p>
          </div>
        </div>
        <section class="about" id="about">
          <h2 class="about-header">About Me</h2>
          <div class="about-grid">
            <div class="row">
              <div class="flipBox" id="square1">
                <div class="flipbox-inner">
                  <div class="front">
                    <h2>Introduction</h2>
                    <h1>
                      <i class="fa-solid fa-turn-up"></i>
                    </h1>
                  </div>
                  <div class="back" id="backSquare">
                    <p>
                      <br />
                      Hi! My names Luke. I'm a final year Software Engineering
                      Student, studying at the University of Central Lancashire.
                      <br />
                      <br />
                      My main computing interests mainly include web/app design
                      and development. With my Skills ranging from React/HTML to
                      Flutter and Dart.
                      <br />
                      <br />
                      However, this does not limit me from implementing skills
                      such as Python, C# and PowerShell Scripting
                    </p>
                  </div>
                </div>
              </div>
              <div class="flipBox" id="square2">
                <div class="flipbox-inner">
                  <div class="front">
                    <h2>Work</h2>
                    <h1>
                      <i class="fa-solid fa-turn-up"></i>
                    </h1>
                  </div>
                  <div class="back" id="backSquare">
                    <p>
                      <br />
                      I've had the opportunity to work in multiple software /
                      computing workplaces and positions.
                      <br />
                      <br />
                      These positions include a front end web development
                      position as a college placement, aswell as a University
                      Industrial Placement with{" "}
                      <a target="_blank" href="https://www.cgi.com/uk/en-gb">
                        CGI IT UK
                      </a>
                      <br />
                      <br />
                      These positions have allowed me to get hands on
                      programming and client collaboration experience. I have
                      been able to gain professional experience in HTML, CSS,
                      WordPress, PowerShell and C#.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flipBox" id="square3">
                <div class="flipbox-inner">
                  <div class="front">
                    <h2>Education</h2>
                    <h1>
                      <i class="fa-solid fa-turn-up"></i>
                    </h1>
                  </div>
                  <div class="back" id="backSquare">
                    <p>
                      <br />
                      I have been studying computing for over 5 years. This
                      includes a BTEC in computing and IT, and my current
                      Software Engineering degree.
                      <br />
                      <br />
                      During my education, I have worked on skills such as HCI
                      design, Xunit testing, C++, Agile development, App
                      development, and many more.
                      <br />
                      <br />
                      In my working experience, I have also been able to achieve
                      a{" "}
                      <a
                        target="_blank"
                        href="https://www.credly.com/badges/b3d82a3f-609f-4d1d-8cfc-4915460f5550"
                      >
                        SAFE 6.0 Practioner{" "}
                      </a>
                      accreditation. As well as taking part in a QA C# course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="work" id="work">
          <h1 class="work-header">My work</h1>
          <div class="grid">
            <div class="grid-item">
              <a
                target="_blank"
                href="https://github.com/LCragg/WeatherApp_Assignment_CO2509"
              >
              <div class="project-image" id="project1">
                <div class="project-text">
                  <h2>Weather App</h2>
                </div>
              </div>
              </a>
            </div>
            <div class="grid-item">
            <a target="_blank" href="https://github.com/Luke-Cragg/Dockd">
              <div class="project-image" id="project2">
                <div class="project-text">
                  <h2>Dockd</h2>
                </div>
              </div>
              </a>
            </div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
          </div>
        </section>
        <section class="contact-section" id="contact">
          <h2 class="contact-header">Lets Work Together</h2>
          <div class="social-links">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luke-cragg/"
              class="footer-btn"
            >
              <i class="fab fa-linkedin"></i> Linkedin
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/luke.cragg/"
              class="footer-btn"
            >
              <i class="fab fa-instagram"></i> Instagram
            </a>
            <a
              target="_blank"
              href="mailto:lukecragg@zohomail.eu"
              class="footer-btn"
            >
              <i class="fas fa-at"></i> Email
            </a>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
