import React from "react";
import user1 from "../assets/images/profiles/1.jpg"
import user2 from "../assets/images/profiles/2.jpg"
import user3 from "../assets/images/profiles/3.jpg"
import user4 from "../assets/images/profiles/4.jpg"
import user5 from "../assets/images/profiles/5.jpg"

const TrustBrands = () => {
  return (
    <section>
      <div className="hom-cus-revi">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p style={{ color: "black" }}>trusted brand</p>
              <h2>
                <span>
                  Trust by <b className="num">1500</b>+ Couples
                </span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
            <div className="slid-inn cus-revi">
              <ul className="slider3">
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img
                        src={user1}
                        alt=""
                        loading="lazy"
                      />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 style={{ color: "#a020f0" }}>Jack danial</h5>
                    <span>New york</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img
                        src={user2}
                        alt=""
                        loading="lazy"
                      />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 style={{ color: "#a020f0" }}>Jack danial</h5>
                    <span>New york</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img
                        src={user4}
                        alt=""
                        loading="lazy"
                      />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 style={{ color: "#a020f0" }}>Jack danial</h5>
                    <span>New york</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img
                        src={user3}
                        alt=""
                        loading="lazy"
                      />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h5 style={{ color: "#a020f0" }}>Jack danial</h5>
                    <span>New york</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cta-full-wid">
              <a
                href="#!"
                className="cta-dark"
                style={{ background: "#a020f0" }}
              >
                More customer reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBrands;
