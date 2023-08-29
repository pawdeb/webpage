import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  // {
  //   jobPosition: `Sr. Front-end Engineer`,
  //   jobType: `Centrum Nauki Kopernik`,
  //   jobDuration: `Feb 2021 - Present`,
  //   // timeDuraton: `Full Time`,
  //   compnayName: "Google LLC",
  //   jobDescription: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
  //   sed do eiusmod tempor incididunt ut labore et dolore magna
  //   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //   ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //   Duis aute irure dolor.`,
  //   compnayName2: "Google LLC",
  //   jobDescription2: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
  //   sed do eiusmod tempor incididunt ut labore et dolore magna
  //   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  //   ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //   Duis aute irure dolor.`,
  //   delayAnimation: "",
  // },
  {
    jobPosition: `Centrum Nauki Kopernik`,
    jobDuration: `paź 2021 – obecnie`,
    compnayName: "Specjalista w Dziale Badań nad Kompetencjami Przyszłości",
    jobDescription: `Tworzenie scenariuszy zajęć i aktywności szkolnych w ramach przedłużenia doświadczenia objazdowej wystawy edukacyjnej Nauka dla Ciebie. 
    Testowanie i ewaluacja wypracowanych narzędzi dydaktycznych, pomocy naukowych oraz metod popularyzacji wiedzy.`,
    compnayName2: "Młodszy specjalista w Dziale Laboratoriów",
    jobDescription2: `Prowadzenie zajęć w laboratoriach CNK. 
    Współpraca z nauczycielami w działaniach bieżących i projektowych. Nadzór i zapewnienie sprawnego funkcjonowania laboratorium. 
    Przygotowanie i organizacja różnego typu eventów naukowych, tworzenie filmów naukowych, scenariuszy zajęć.`,
    compnayName3: "Prowadzący zajęcia w Laboratorium Fizyki",
    jobDescription3: `Bezpłatne praktyki w formie prowadzenia zajęć szkolnych oraz asystowania pracownikom CNK.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Politechnika Warszawska`,
    jobDuration: `paź 2022 – obecnie`,
    compnayName: "Asystent badawczo-dydaktyczny",
    jobDescription: `Praca badawcza w Zakładzie Strukturalnych Metod Przetwarzania Wiedzy 
    na Wydziale Matematyki i Nauk Informacyjnych (MiNI) Politechniki Warszawskiej pod kątem doktoratu w trybie eksternistycznym.
    Prowadzenie zajęć ze studentami po polsku i po angielsku z przedmiotów takich jak Inżynieria Oprogramowania, 
    Software Engineering, Computer Statistics czy Projekt Interdyscyplinarny.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Akademicki Obóz Naukowy`,
    jobDuration: `lip 2021 – obecnie`,
    compnayName: "Prowadzący warsztaty i wychowawca",
    jobDescription: `Prowadzenie autorskich zajęć podczas turnusów "Fizyka eksperymentalna", "Matematyka w eksperymencie fizycznym", "Modelowanie komputerowe w fizyce" i przygotowaniach do matury.
    Pełnienie roli wychowawcy wypoczynku dla grup młodzieży w wieku późnoszkolnym i licealnym.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `Fundacja Marsz dla Nauki`,
    jobDuration: `sie 2022 – mar 2023`,
    compnayName: "Lokalny koordynator wydarzeń",
    jobDescription: `Pełnienie funkcji koordynatora miejskiego w ramach projektów "Prawo po stronie nauki" 
    (warsztaty dla naukowców z zakresu możliwości prawnych w przypadku karalnych ataków ze strony środowisk pseudonaukowych) 
    oraz "Science Game Jam 2023" (konkurs tworzenia gier planszowych przez środowisko naukowe).`,
    delayAnimation: "300",
  },
  {
    jobPosition: `LifeTube`,
    jobDuration: `sie 2017 – gru 2020`,
    compnayName: "Partner",
    jobDescription: `Tworzenie treści video (wideo recenzje książek, vlogi, wywiady) na autorskim kanale YouTube (P42) 
    będącym częścią sieci partnerskiej LifeTube.`,
    delayAnimation: "400",
  },
  {
    jobPosition: `Joint Institute for Nuclear Research`,
    jobDuration: `sie 2019`,
    compnayName: "Praktykant w ramach programu TeFeNICA: Slow Control System 2019",
    jobDescription: `Praca w środowisku LabView oraz pomiary promieniowania kosmicznego na terenie ośrodka 
    pod kątem dalszego wykorzystania tych danych w eksperymencie TeFeNICA.`,
    delayAnimation: "500",
  },
  {
    jobPosition: `Czwarta Strona Wydawnictwo Poznańskie`,
    jobDuration: `cze 2017 – gru 2017`,
    compnayName: "Ambasador We need YA",
    jobDescription: `Pełnienie funkcji jednego z trzech ambasadorów medialnych oddziału Wydawnictwa Czwarta Strona 
    zajmującego się fantastyką młodzieżową, przeprowadzanie wywiadów z autorami, udział w panelach w księgarniach oraz na targach książki.`,
    delayAnimation: "600",
  },
];

const resumeContent2 = [
  {
    jobPosition: `KN Business in Technology`,
    jobDuration: `sty 2023 – obecnie`,
    compnayName: "Opiekun naukowy koła",
    jobDescription: `Wsparcie merytoryczne zarządu oraz członków Koła Naukowego Business in Technology w Politechnice Warszawskiej. 
    Reprezentacja organizacji na szczeblu uczelnianym.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Samorząd Studentów Politechniki Warszawskiej`,
    jobDuration: `sty 2019 – sty 2022`,
    compnayName: "Przewodniczący Wydziałowej Rady Samorządu",
    jobDescription: `Kierowanie WRSem Wydziału Fizyki Politechniki Warszawskiej. 
    Reprezentowanie interesu studentów przed gronem dziekańskim oraz w Parlamencie. 
    Praca w zakresie dydaktyki, kwaterunku, stypendiów i wymian zagranicznych na wydziale. 
    Prowadzenie zebrań oraz zarządzanie zadaniami, monitorowanie i dbanie o rozwój członków Rady. 
    Nadzór implementacji najnowszych rozwiązań w zakresie planowania oraz realizacji celów grupy.`,
    compnayName2: "Delegat do Parlamentu Studentów Politechniki Warszawskiej oraz Komisji Informacji i Promocji",
    jobDescription2: `Działanie na rzecz dobra studentów, organizowanie wydarzeń na uczelni, 
    zarządzanie pracą zespołu podczas Drzwi Otwartych PW, 
    praca przy Kalendarzu Akademickim, gadżetach SSPW i w social mediach samorządu.`,
    compnayName3: "Delegat do Komisji Informacji i Promocji",
    jobDescription3: `Praca nad Kalendarzem Akademickim oraz systemem zarządzania Świat SSPW.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Enactus Warsaw University of Technology`,
    jobDuration: `lis 2017 – sie 2021`,
    compnayName: "Vice Team Leader, Board Member",
    jobDescription: `Koordynacja pracy wewnętrznych grup roboczych organizacji, pozyskiwanie nowych partnerów oraz sponsorów dla jednostki, 
    reprezentowanie jej na zewnątrz, wsparcie organizowanych szkoleń i konferencji, tworzenie treści promocyjnych, 
    współpraca organizacji z uczelnią i jej organami.`,
    compnayName2: "Public Relations and Marketing Leader, Board Member",
    jobDescription2: `Pozyskiwanie nowych partnerów oraz sponsorów dla jednostki, reprezentowanie jej na zewnątrz, 
    tworzenie treści promocyjnych, współpraca organizacji z uczelnią i jej organami.`,
    compnayName3: "Social Media Team Leader",
    jobDescription3: `Zarządzanie zespołem odpowiedzialnym za publikacje w mediach społecznościowych, tworzenie modeli promocji 
    oraz schematów działania w social mediach. Wyróżniony nagrodą Enactus Social Media Rocket 2018.`,
    compnayName4: "Social Media Specialist",
    jobDescription4: `Przygotowanie treści do mediów społecznościowych organizacji studenckiej.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `PwC Polska`,
    jobDuration: `wrz 2018 – cze 2019`,
    compnayName: "Influencer 2018/2019",
    jobDescription: `Reprezentowanie firmy na swojej uczelni, wsparcie w organizacji targów pracy i warsztatów/szkoleń, 
    działania w mediach społecznościowych oraz tworzenie materiałów wideo w celach rekrutacyjnych.`,
    delayAnimation: "300",
  },
  {
    jobPosition: `Design Thinking Week`,
    jobDuration: `wrz 2018 – lis 2018`,
    compnayName: "Social Media Ninja zespołu Design Thinking Week Warszawa",
    jobDescription: `Praca w mediach społecznościowych i promocji wydarzenia DT Week 2018.`,
    delayAnimation: "400",
  },
];

const educatonContent = [
  {
    passingYear: "2021 – 2022",
    degreeTitle: "Magister inżynier fizyki technicznej (Eksploracja danych i modelowanie interdyscyplinarne)",
    instituteName: "Politechnika Warszawska",
  },
  {
    passingYear: "2020-2021",
    degreeTitle: "Certificate in Business for Engineers",
    instituteName: "Szkoła Biznesu Politechniki Warszawskiej",
  },
  {
    passingYear: "2017 – 2021",
    degreeTitle: "Inżynier fizyki technicznej (Materiały i nanostruktury)",
    instituteName: "Politechnika Warszawska",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Doświadczenie zawodowe</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                    <div className="rb-right">
                      <h6>{val.compnayName2}</h6>
                      <p>{val.jobDescription2}</p>
                      <h6>{val.compnayName3}</h6>
                      <p>{val.jobDescription3}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Doświadczenie non-profit</h3>
          </div>
          {/* End title */}

          <div className="resume-box">
            {resumeContent2.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      {/* <label>{val.jobType}</label> */}
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                    <div className="rb-right">
                      <h6>{val.compnayName2}</h6>
                      <p>{val.jobDescription2}</p>
                      <h6>{val.compnayName3}</h6>
                      <p>{val.jobDescription3}</p>
                      <h6>{val.compnayName4}</h6>
                      <p>{val.jobDescription4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Wykształcenie i języki</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
