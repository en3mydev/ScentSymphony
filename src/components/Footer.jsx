import { PiPhonePlus } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>SCENT</span> Symphony
              </li>
              <li>
                "Elevate moments with signature scents. Your fragrance, your
                symphony."
              </li>
              <li>
                <a href="tel:123456789">
                  <PiPhonePlus /> &nbsp; (123)-456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  danielgheorghedev@gmail.com"
                >
                  <MdMailOutline />
                  &nbsp; danielgheorghedev@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Stores</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Shipping</a>
              </li>
              <li>
                <a href="#home">Loyality Program</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 10:00AM - 10:00PM</li>
              <li>Sun: 10:00AM - 8:00PM</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
