import React from "react";

const ServiceContent = [
  {
    icon: "icon-book-open",
    title: "Asystent badawczo-dydaktyczny",
    descriptions: `Praca badawcza w Zakładzie Strukturalnych Metod Przetwarzania Wiedzy 
    na Wydziale Matematyki i Nauk Informacyjnych (MiNI) Politechniki Warszawskiej pod kątem doktoratu w trybie eksternistycznym.
    Prowadzenie zajęć ze studentami po polsku i po angielsku z przedmiotów takich jak Inżynieria Oprogramowania, Software Engineering, Computer Statistics czy Projekt Interdyscyplinarny.`,
    delayAnimation: "",
  },
  {
    icon: "icon-toolbox",
    title: "Specjalista w Dziale Badań nad Kompetencjami Przyszłości CNK",
    descriptions: `Tworzenie scenariuszy zajęć i aktywności szkolnych w ramach przedłużenia doświadczenia objazdowej wystawy edukacyjnej Nauka dla Ciebie. 
    Testowanie i ewaluacja wypracowanych narzędzi dydaktycznych, pomocy naukowych oraz metod popularyzacji wiedzy.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Prowadzący na Akademickim Obozie Naukowym",
    descriptions: `Prowadzenie autorskich zajęć podczas turnusów "Fizyka eksperymentalna", "Matematyka w eksperymencie fizycznym", "Modelowanie komputerowe w fizyce" i przygotowaniach do matury.
    Pełnienie roli wychowawcy wypoczynku dla grup młodzieży w wieku późnoszkolnym i licealnym.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
