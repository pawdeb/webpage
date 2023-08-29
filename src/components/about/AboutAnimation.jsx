import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>mgr inż.</p>
                  <h3>Paweł Dębowski</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Parę słów o mnie</h3>
                </div>

                <div className="about-text">
                  <p>
                  Magister inżynier fizyki technicznej o specjalności Eksploracja Danych i Modelowanie Interdyscyplinarne na Politechnice Warszawskiej. 
                  Asystent badawczo-dydatkyczny Wydziału Matematyki i Nauk Informacyjnych realizujący doktorat eksternistyczny. 
                  Specjalista w Dziale Badań nad Kompetencjami Przyszłości w Pracowni Przewrotu Kopernikańskiego (Centrum Nauki Kopernik). 
                  Prowadzący warsztaty z matematyki, fizyki i programowania oraz wychowawca Akademickiego Obozu Naukowego. 
                  Badacz promieniowania kosmicznego w Zjednoczonym Instytucie Badań Jądrowych w Dubnej oraz fotoluminescencji szkieł w ramach pracy inżynierskiej. 
                  Aktywny członek społeczności akademickiej, były przewodniczący Wydziałowej Rady Samorządu, alumn organizacji studenckiej Enactus. 
                  Absolwent Szkoły Biznesu Politechniki Warszawskiej. 
                  Przez pięć lat dzieliłem się czytelniczą pasją na swoim kanale na YouTube :) 
                  W wolnym czasie, kiedy nie staram się zmieniać świata, spędzam czas aktywnie na siłowni, czytam książki nad jeziorkiem lub nadrabiam oscarowe klasyki.
                  Kiedy zaś wolna chwila trwa trochę dłużej, uciekam w świat z aparatem fotograficznym najdalej jak się da… albo przynajmniej w Tatry!
                  </p>
                </div>
                {/* <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Paweł Dębowski</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th April 1994</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>San Francisco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>info@domainname.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>Czym się zajmuję?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Osiągnięcia</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
