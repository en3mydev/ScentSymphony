import { PERFUME_DATA } from "./PerfumeData";
import PerfumeBox from "./PerfumeBox";
import { useState } from "react";

function PickPerfume() {
  const [active, setActive] = useState("SecondPerfume");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section" id="pick-sectionid">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Perfume</h3>
              <h2>Best Sellers</h2>
              <p>
                Discover an array of captivating scents tailored for your
                adventures or workdays. Explore our diverse collection and find
                your perfect fragrance companion today!
              </p>
            </div>
            <div className="pick-container__perfume-content">
              {}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondPerfume");
                    btnID("btn1");
                  }}
                >
                  Tom Ford
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstPerfume");
                    btnID("btn2");
                  }}
                >
                  Maison Margiela
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdPerfume");
                    btnID("btn3");
                  }}
                >
                  Chanel
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthPerfume");
                    btnID("btn4");
                  }}
                >
                  Dior
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthPerfume");
                    btnID("btn5");
                  }}
                >
                  Yves Saint Laurent
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthPerfume");
                    btnID("btn6");
                  }}
                >
                  Carolina Herrera
                </button>
              </div>

              {active === "FirstPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={0} />
              )}
              {active === "SecondPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={1} />
              )}
              {active === "ThirdPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={2} />
              )}
              {active === "FourthPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={3} />
              )}
              {active === "FifthPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={4} />
              )}
              {active === "SixthPerfume" && (
                <PerfumeBox data={PERFUME_DATA} perfumeID={5} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickPerfume;
