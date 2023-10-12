/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { data } from "./data";
import { useNavigate } from "react-router-dom";
import { useDetails } from "./DetailsProvider";
import hero from "./assets/img/hero.jpg";
import about from "./assets/img/about.jpg";
import "./assets/img/favicon.png";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
export default function Home() {
  const [userSignUp, setUserSignUp] = useState([]);
  const [login, setLogin] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [teamdata, setTeamData] = useState(data);
  const { setStatus, setTeamId, setPortfolioitem } = useDetails();
  const nav = useNavigate();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    const store1 = JSON.parse(localStorage.getItem("login")) || [];

    setUserSignUp(store);
    setLogin(store1);

    const store2 = localStorage.getItem("isLogin");
    setIsLogin(store2 === "true");
  }, []);

  const match = userSignUp.find(
    (user) =>
      user.Username === login.Username && user.Password === login.Password
  );

  const match1 = login.Username === "admin" && login.Password === "admin";

  const handleClick = (Team) => {
    setTeamId(Team);
    setStatus("Team");
    nav(`/Team`, { state: Team });
  };

  const handlePortfolioClick = (item) => {
    setPortfolioitem(item);
    setStatus("Port");
    nav("/Team");
  };

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              {isLogin && match ? (
                <h1>
                  Welcome {match.Name}, Organize your work and life, finally.
                </h1>
              ) : isLogin && match1 ? (
                <h1>Welcome Admin, Organize your work and life, finally.</h1>
              ) : (
                <h1>
                  Welcome, SignUp to Organize your work and life, finally.
                </h1>
              )}
              <h2>
                Become focused, organized, and calm with Todoist. The world’s #1
                task manager and to-do list app.
              </h2>
              {!isLogin ? (
                <div>
                  <a className="btn-get-started scrollto" href="/Signup">
                    Get Started
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={hero} className="img-fluid animated" alt="hero-img" />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img img-fluid">
                <img src={about} alt="about" />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3>Organise your step</h3>
                <p>
                  The fastest way to get tasks out of your head. Type just about
                  anything into the task field and Todoist’s one-of-its-kind
                  natural language recognition will instantly fill your to-do
                  list.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Colabrate to your daily life</h4>
                    <p>
                      Your tasks are automatically sorted into Today, Upcoming,
                      and custom Filter views to help you prioritize your most
                      important work.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Make Reach to your goals</h4>
                    <p>
                      Tons of tasks, just one app. With workspaces, your
                      personal, work, and team tasks can all live harmoniously
                      under the same roof. (Sigh of relief).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>Check out the great services we offer</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4 className="title">
                    <span>Organise your step</span>
                  </h4>
                  <p className="description">
                    The fastest way to get tasks out of your head. Type just
                    about anything into the task field and Todoist’s
                    one-of-its-kind natural language recognition will instantly
                    fill your to-do list.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <span>Colabrate to your daily life</span>
                  </h4>
                  <p className="description">
                    Your tasks are automatically sorted into Today, Upcoming,
                    and custom Filter views to help you prioritize your most
                    important work.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4 className="title">
                    <span>Make Reach to your goals</span>
                  </h4>
                  <p className="description">
                    Tons of tasks, just one app. With workspaces, your personal,
                    work, and team tasks can all live harmoniously under the
                    same roof. (Sign of relief).
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4 className="title">
                    <span>Hurry up</span>
                  </h4>
                  <p className="description">
                    Become focused, organized, and calm with Todoist. The
                    world’s #1 task manager and to-do list app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check out our portfolio</p>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li className="filter-active">All</li>
                  <li>App</li>
                  <li>Card</li>
                  <li>Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              {teamdata.Portfolio.map((item) => (
                <div
                  className="col-lg-4 col-md-6 portfolio-item filter-app"
                  key={item.Name}
                  onClick={() => handlePortfolioClick(item.Name)}
                >
                  <div className="portfolio-wrap">
                    <img src={item.img} className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a>
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                    <div className="portfolio-info">
                      <h4>{item.Name}</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="team" className="team">
          <div className="container">
            <div className="section-title">
              <h2>Team</h2>
              <p>Our team is always here to help</p>
            </div>

            <div className="row">
              {teamdata.Team.map((Team) => (
                <div
                  key={Team.team}
                  className="col-xl-3 col-lg-4 col-md-6"
                  onClick={() => handleClick(Team.team)}
                >
                  <div className="member">
                    <img src={Team.img} className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>{Team.Name}</h4>
                        <span>{Team.Role}</span>
                      </div>
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
