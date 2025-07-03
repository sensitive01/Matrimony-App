import React, { useEffect } from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";
import UserSideBar from "../components/UserSideBar";

const UserChatPage = () => {
  useEffect(() => {
    // jQuery equivalent functionality
    const handleChatTriggerClick = () => {
      const chatbox = document.querySelector(".chatbox");
      if (chatbox) {
        chatbox.classList.add("open");
      }
    };

    const chatTriggers = document.querySelectorAll(".db-chat-trig");
    chatTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleChatTriggerClick);
    });

    // Cleanup event listeners
    return () => {
      chatTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleChatTriggerClick);
      });
    };
  }, []);

  return (
    <>
      {/* <PreLoader /> */}
      <PopUpSearch />
      <TopMenu />
      <MenuPopUp1 />
      <MenuPopUp2 />
      <MainMenuBar />
      <ExploreMenuPopUp />
      <MobileUserProfileMenu />

      <section>
        <div className="db">
          <div className="container">
            <div className="row">
              <UserSideBar />

              <div className="col-md-8 col-lg-9">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Chat list</h2>
                    <div className="db-pro-stat">
                      <div className="db-chat">
                        <ul>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/1.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Ashley emyy</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">9:00 PM</span>
                                <span className="cont">3</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/16.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Julia Ann</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">9:00 PM</span>
                                <span className="cont">2</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/12.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Elizabeth Taylor</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">8:00 PM</span>
                                <span className="cont">3</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/13.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Angelina Jolie</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time">
                                <span className="timer">3:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/14.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Olivia mia</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time">
                                <span className="timer">5:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/1.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Ashley emyy</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">9:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/16.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Julia Ann</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">9:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/12.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Elizabeth Taylor</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">8:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/13.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Angelina Jolie</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time">
                                <span className="timer">3:00 PM</span>
                              </div>
                            </div>
                          </li>
                          <li className="db-chat-trig">
                            <div className="db-chat-pro">
                              <img src="images/profiles/14.jpg" alt="" />
                            </div>
                            <div className="db-chat-bio">
                              <h5>Olivia mia</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time">
                                <span className="timer">5:00 PM</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span>Free support:</span> +92 (8800) 68 - 8960
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>Email:</span>
              info@example.com
            </h2>
          </div>
          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>
                Phone:
                <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
              </p>
              <p>
                Email:
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <a href="#">About company</a>
                </li>
                <li>
                  <a href="#!">Contact us</a>
                </li>
                <li>
                  <a href="#!">Feedback</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <a href="#!">
                    <img src="images/social/1.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/3.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="images/social/5.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row foot-count">
            <p>
              Company name Site - Trusted by over thousands of Boys & Girls for
              successfull marriage.
              <a href="#" className="btn btn-primary btn-sm">
                Join us today !
              </a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright ©<span id="cry">2017-2020</span>
                <a href="#!" target="_blank" rel="noopener noreferrer">
                  Company.com
                </a>
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="chatbox">
        <span className="comm-msg-pop-clo">
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>

        <div className="inn">
          <form name="new_chat_form" method="post">
            <div className="s1">
              <img src="images/user/2.jpg" className="intephoto2" alt="" />
              <h4>
                <b className="intename2">Julia</b>,
              </h4>
              <span className="avlsta avilyes">Available online</span>
            </div>
            <div className="s2 chat-box-messages">
              <span className="chat-wel">Start a new chat!!! now</span>
              <div className="chat-con">
                <div className="chat-lhs">Hi</div>
                <div className="chat-rhs">Hi</div>
              </div>
              <span>Start A New Chat!!! Now</span>
            </div>
            <div className="s3">
              <input
                type="text"
                name="chat_message"
                placeholder="Type a message here.."
                required
              />
              <button id="chat_send1" name="chat_send" type="submit">
                Send <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserChatPage;
