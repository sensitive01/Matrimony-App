import React from "react";
import userIcon from "../assets/images/icon/user.png"
import gateIcon from "../assets/images/icon/gate.png";
import coupleIcon from "../assets/images/icon/couple.png";
import hallIcon from "../assets/images/icon/hall.png";
import cameraIcon from "../assets/images/icon/photo-camera.png";
import cakeIcon from "../assets/images/icon/cake.png";

const QuickAccess = () => {
  return (
    <section>
      <div className="str home-acces-main">
        <div className="container">
          <div className="row">
            {/* BACKGROUND SHAPE */}
            <div className="wedd-shap">
              <span className="abo-shap-1" />
              <span className="abo-shap-4" />
            </div>
            {/* END BACKGROUND SHAPE */}
            <div className="home-tit">
              <p style={{color:"white"}} >Quick Access</p>
              <h2>
                <span>Our Services</span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
            <div className="home-acces">
              <ul className="hom-qui-acc-sli">
                <li>
                  <div
                    className="wow fadeInUp hacc hacc1"
                    data-wow-delay="0.1s"
                  >
                    <div className="con">
                      <img src={userIcon} alt="" loading="lazy" />
                      <h4>Browse Profiles</h4>
                      <p>120+ Profilessss</p>
                      <a href="/user/show-all-profiles">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="wow fadeInUp hacc hacc2"
                    data-wow-delay="0.2s"
                  >
                    <div className="con">
                      <img src={gateIcon} alt="" loading="lazy" />
                      <h4>Wedding</h4>
                      <p>1200+ Profiles</p>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="wow fadeInUp hacc hacc3"
                    data-wow-delay="0.3s"
                  >
                    <div className="con">
                      <img src={coupleIcon} alt="" loading="lazy" />
                      <h4>All Services</h4>
                      <p>1200+ Profiles</p>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="wow fadeInUp hacc hacc4"
                    data-wow-delay="0.4s"
                  >
                    <div className="con">
                      <img src={hallIcon} alt="" loading="lazy" />
                      <h4>Join Now</h4>
                      <p>Start for free</p>
                      <a href="#">Get started</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="wow fadeInUp hacc hacc3"
                    data-wow-delay="0.3s"
                  >
                    <div className="con">
                      <img src={cameraIcon} alt="" loading="lazy" />
                      <h4>Photo gallery</h4>
                      <p>1200+ Profiles</p>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="wow fadeInUp hacc hacc4"
                    data-wow-delay="0.4s"
                  >
                    <div className="con">
                      <img src={cakeIcon} alt="" loading="lazy" />
                      <h4>Blog &amp; Articles</h4>
                      <p>Start for free</p>
                      <a href="#">Get started</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
