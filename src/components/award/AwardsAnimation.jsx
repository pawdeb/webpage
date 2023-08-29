import React from "react";

const AwardContnet = [
  {
    img: "clad.jpg",
    awardName: "Certyfikat CLAD 2020",
    awardFor: "Dzięki uczelni mam tytuł Certified LabVIEW Associate Developer",
    delayAnimation: "0",
  },
  {
    img: "p42s.jpg",
    awardName: "5 lat prowadzenia kanału",
    awardFor: "Tworzenie P42 na YouTube zmieniło moje życie i pozwoliło się rozwinąć",
    delayAnimation: "200",
  },
  {
    img: "pw.jpg",
    awardName: "Stypendium PW",
    awardFor: "Nagroda za pasję do fizyki i działania mające na celu promocję nauki",
    delayAnimation: "400",
  },
  {
    img: "enpw.jpg",
    awardName: "Social Media Rocket 2018",
    awardFor: "Nagroda za najlepsze media społecznościowe w Enactus Poland",
    delayAnimation: "600",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
