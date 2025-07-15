import React from "react";
import couple6 from "../assets/images/couples/6.jpg"
import couple7 from "../assets/images/couples/7.jpg"
import couple8 from "../assets/images/couples/8.jpg"
import couple9 from "../assets/images/couples/9.jpg"
import couple10 from "../assets/images/couples/10.jpg"


const RecentCouples = () => {
  return (
    <section>
      <div className="hom-couples-all">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p style={{ color: "black" }}>trusted brand</p>
              <h2>
                <span>Recent Couples</span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
          </div>
        </div>
        <div className="hom-coup-test">
          <ul className="couple-sli">
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple6} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple7} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple8} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple9} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple10} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple6} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img
                  src={couple9}
                  alt=""
                  loading="lazy"
                />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img
                  src={couple8}
                  alt=""
                  loading="lazy"
                />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="#" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentCouples;
