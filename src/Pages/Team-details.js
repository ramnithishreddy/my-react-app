import React, { useEffect } from "react";
import { data } from "./data";
import { useDetails } from "./DetailsProvider";

const Team = () => {
  const {
    Teamid,
    Portfolioitem,
    setTeamId,
    setPortfolioitem,
    status,
    match,
    setMatch,
  } = useDetails();
  useEffect(() => {
    if (Teamid.length !== 0 && status === "Team") {
      setPortfolioitem("");
    }
    if (Portfolioitem.length !== 0 && status === "Port") {
      setTeamId("");
    }
  });

  const Match = (e) => {
    Object.keys(e).forEach((a) => {
      for (const c in e[a]) {
        [...Array(e[a][c])].forEach((v) => {
          if (v === Portfolioitem) {
            setMatch(true);
          }
        });
      }
    });
  };
  Match(data.Details);
  return (
    <>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>
                {Teamid.length !== 0 ? "Team Details" : "Portfolio Details"}
              </h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">{Teamid.length !== 0 ? "Team" : "Portfolio"}</a>
                </li>
                <li>
                  {Teamid.length !== 0 ? "Team Details" : "Portfolio Details"}
                </li>
              </ol>
            </div>
          </div>
        </section>

        {data.Team.map((Teamd) =>
          Teamd.team === Teamid ? (
            <section
              id="portfolio-details"
              className="portfolio-details"
              key={Teamd.team}
            >
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper">
                      <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                          <img src={Teamd.img} alt="" />
                        </div>
                      </div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>Person information</h3>
                      <ul>
                        <li>
                          <strong>Category</strong>: {Teamd.Role}
                        </li>
                        <li>
                          <strong>Client</strong>: Resource Company
                        </li>
                        <li>
                          <strong>Project date</strong>: 01 March, 2020
                        </li>
                        <li>
                          <strong>Education URL</strong>:{" "}
                          <a href={Teamd.Link} target="_blank" rel="noreferrer">
                            {Teamd.LinkContent}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>About {Teamd.Name}</h2>
                      <p>{Teamd.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : null
        )}

        {data.Portfolio.map((item) =>
          item.Name === Portfolioitem && match ? (
            <section
              id="portfolio-details"
              className="portfolio-details"
              key={item.Name}
            >
              {data.Details.map((Details) => (
                <div className="container" key={Details.Tech}>
                  {match && Details.Tech === Portfolioitem ? (
                    <div className="row gy-4">
                      <div className="col-lg-8">
                        <div className="portfolio-details-slider swiper">
                          <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src={Details.img1} alt="" />
                            </div>

                            <div className="swiper-slide">
                              <img src={Details.img2} alt="" />
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="portfolio-info">
                          <h3>Portfolio information</h3>
                          <ul>
                            <li>
                              <strong>Category</strong>: {Details.Tech}
                            </li>
                            <li>
                              <strong>Client</strong>: Resource Company
                            </li>
                            <li>
                              <strong>Project date</strong>: {Details.Date}
                            </li>
                            <li>
                              <strong>Education URL</strong>:{" "}
                              <a
                                href={Details.Link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {Details.LinkContent}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="portfolio-description">
                          <h2>About {Details.Project}</h2>
                          <p>{Details.about}</p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </section>
          ) : null
        )}
      </main>
    </>
  );
};

export default Team;
