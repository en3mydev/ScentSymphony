import { FaQuoteRight } from "react-icons/fa";
import userImg1 from "../images/testimonials/user1.jpg";
import userImg2 from "../images/testimonials/user2.png";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Explore the genuine stories shared by our valued clients to
                witness the remarkable impact of our service. Delve into
                firsthand accounts of their experiences, eagerly shared to
                highlight the exceptional results they've encountered with us.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <FaQuoteRight width={60} height={60} />
                </span>
                <p>
                  "Absolutely in love with the quality! These fragrances are
                  long-lasting and unique. I receive compliments every time I
                  wear them. Highly recommend!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={userImg1} alt="user_img" />
                    <span>
                      <h4>Daniel G.</h4>
                      <p>Bucharest</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <FaQuoteRight width={60} height={60} />
                </span>
                <p>
                  "I'm a loyal customer for a reason - this shop offers an array
                  of scents that cater to all preferences. This shop has
                  transformed my fragrance journey!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={userImg2} alt="user_img" />
                    <span>
                      <h4>Drake G.</h4>
                      <p>Toronto</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
