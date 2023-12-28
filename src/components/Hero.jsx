import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroP from "../images/hero/hero-perfume.png";

function Hero() {
  const bookBtn = () => {
    document
      .querySelector("#pick-sectionid")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape} alt="bg-shape" />
        <div className="hero-content">
          <div className="hero-content__text">
            <h1>
              Discover your <span>signature</span> scent
            </h1>
            <p>
              Explore a spectrum of aromas designed to resonate with your unique
              personality and style, guiding you to find the fragrance that
              truly embodies your essence.
            </p>
            <div className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="/"
              >
                Find Yours
              </Link>
              <Link className="hero-content__text__btns__learn-more" to="/">
                Learn More
              </Link>
            </div>
          </div>
          <img
            src={HeroP}
            alt="maisonmargiela"
            className="hero-content__perfume-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
