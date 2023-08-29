import React from "react";
// import TextLoop from "react-text-loop";

const conctInfo = {
  //phone: "+04 6545-9535-6515",
  //email: "pawdeb42@gmail.com",
};

const sliderContent = {
  name: "Paweł Dębowski",
  designation: "Full-stack Developer",
  description: `TODO? mgr inż. fizyki | dokt. MiNI PW | 
  popularyzator nauki i edukator | Centrum Nauki Kopernik | 
  prowadzący i wychowawca | Alumn Enactus i SSPW | JINR | 
  P42 na YouTube | eksploracja danych i modelowanie interdyscyplinarne`,
  btnText: "Zobacz CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">PL</a>
              </li>
              <li>
                <a href="#">EN?</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                   Cześć, to moja strona
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {/* <TextLoop>
                    <p className="loop-text lead"> magister inżynier fizyki</p>
                    <p className="loop-text lead"> popularyzator nauki</p>
                    <p className="loop-text lead"> prowadzący warsztaty</p>
                  </TextLoop> */}
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner2.jpg"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
