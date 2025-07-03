import React from "react";
import PreLoader from "../components/PreLoader";
import PopUpSearch from "../components/PopUpSearch";
import TopMenu from "../components/TopMenu";
import MenuPopUp1 from "../components/MenuPopUp1";
import MenuPopUp2 from "../components/MenuPopUp2";
import MainMenuBar from "../components/MainMenuBar";
import ExploreMenuPopUp from "../components/ExploreMenuPopUp";
import MobileUserProfileMenu from "../components/MobileUserProfileMenu";


const UserAllProfilePage = () => {
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
        <div class="all-pro-head">
          <div class="container">
            <div class="row">
              <h1>Lakhs of Happy Marriages</h1>
              <a href="#">
                Join now for Free{" "}
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="fil-mob fil-mob-act">
          <h4>
            Profile filters <i class="fa fa-filter" aria-hidden="true"></i>{" "}
          </h4>
        </div>
      </section>

      <section>
        <div class="all-weddpro all-jobs all-serexp chosenini">
          <div class="container">
            <div class="row">
              <div class="col-md-3 fil-mob-view">
                <span class="filter-clo">+</span>
                <div class="filt-com lhs-cate">
                  <h4>
                    <i class="fa fa-search" aria-hidden="true"></i> I'm looking
                    for
                  </h4>
                  <div class="form-group">
                    <select class="chosen-select">
                      <option value="">I'm looking for</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                    </select>
                  </div>
                </div>
                <div class="filt-com lhs-cate">
                  <h4>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>Age
                  </h4>
                  <div class="form-group">
                    <select class="chosen-select">
                      <option value="">Select age</option>
                      <option value="">18 to 30</option>
                      <option value="">31 to 40</option>
                      <option value="">41 to 50</option>
                      <option value="">51 to 60</option>
                      <option value="">61 to 70</option>
                      <option value="">71 to 80</option>
                      <option value="">81 to 90</option>
                      <option value="">91 to 100</option>
                    </select>
                  </div>
                </div>
                <div class="filt-com lhs-cate">
                  <h4>
                    <i class="fa fa-bell-o" aria-hidden="true"></i>Select
                    Religion
                  </h4>
                  <div class="form-group">
                    <select class="chosen-select">
                      <option>Religion</option>
                      <option>Any</option>
                      <option>Hindu</option>
                      <option>Muslim</option>
                      <option>Jain</option>
                      <option>Christian</option>
                    </select>
                  </div>
                </div>
                <div class="filt-com lhs-cate">
                  <h4>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>Location
                  </h4>
                  <div class="form-group">
                    <select class="chosen-select" name="addjbmaincate">
                      <option value="Chennai">Chennai</option>
                      <option value="Bangaluru">Bangaluru</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                  </div>
                </div>
                <div class="filt-com lhs-rati lhs-avail lhs-cate">
                  <h4>
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{" "}
                    Availablity
                  </h4>
                  <ul>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          class="rating_check"
                          id="exav1"
                          checked
                        />
                        <label for="exav1">All</label>
                      </div>
                    </li>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          class="rating_check"
                          id="exav2"
                        />
                        <label for="exav2">Available</label>
                      </div>
                    </li>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_avail"
                          class="rating_check"
                          id="exav3"
                        />
                        <label for="exav3">Offline</label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="filt-com lhs-rati lhs-ver lhs-cate">
                  <h4>
                    <i class="fa fa-shield" aria-hidden="true"></i>Profile
                  </h4>
                  <ul>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          class="rating_check"
                          id="exver1"
                          checked
                        />
                        <label for="exver1">All</label>
                      </div>
                    </li>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          class="rating_check"
                          id="exver2"
                        />
                        <label for="exver2">Premium</label>
                      </div>
                    </li>
                    <li>
                      <div class="rbbox">
                        <input
                          type="radio"
                          value=""
                          name="expert_veri"
                          class="rating_check"
                          id="exver3"
                        />
                        <label for="exver3">Free</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="filt-com filt-send-query">
                  <div class="send-query">
                    <h5>What are you looking for?</h5>
                    <p>We will help you to arrage the best match to you.</p>
                    <a href="#!" data-toggle="modal" data-target="#expfrm">
                      Send your queries
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="short-all">
                  <div class="short-lhs">
                    Showing <b>32</b> profiles
                  </div>
                  <div class="short-rhs">
                    <ul>
                      <li>Sort by:</li>
                      <li>
                        <div class="form-group">
                          <select class="chosen-select">
                            <option value="">Most relative</option>
                            <option value="Men">Date listed: Newest</option>
                            <option value="Men">Date listed: Oldest</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div class="sort-grid sort-grid-1">
                          <i class="fa fa-th-large" aria-hidden="true"></i>
                        </div>
                      </li>
                      <li>
                        <div class="sort-grid sort-grid-2 act">
                          <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="all-list-sh">
                  <ul>
                    <li>
                      <div
                        class="all-pro-box user-avil-onli"
                        data-useravil="avilyes"
                        data-aviltxt="Available online"
                      >
                        <div class="pro-img">
                          <a href="#">
                            <img src="images/profiles/4.jpg" alt="" />
                          </a>
                          <div class="pro-ave" title="User currently available">
                            <span class="pro-ave-yes"></span>
                          </div>
                          <div class="pro-avl-status">
                            <h5>Available Online</h5>
                          </div>
                        </div>

                        <div class="pro-detail">
                          <h4>
                            <a href="#">Ashley emyy</a>
                          </h4>
                          <div class="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div class="links">
                            <span class="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              class="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="#">More detaiils</a>
                          </div>
                        </div>
                        <span
                          class="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        <div class="pro-img">
                          <a href="#">
                            <img src="images/profiles/10.jpg" alt="" />
                          </a>
                          <div class="pro-ave" title="User currently available">
                            <span class="pro-ave-yes"></span>
                          </div>
                          <div class="pro-avl-status">
                            <span class="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span>
                          </div>
                        </div>

                        <div class="pro-detail">
                          <h4>
                            <a href="#">Elizabeth Taylor</a>
                          </h4>
                          <div class="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div class="links">
                            <span class="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              class="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="#">More detaiils</a>
                          </div>
                        </div>
                        <span
                          class="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="all-pro-box user-avil-onli"
                        data-useravil="avilyes"
                        data-aviltxt="Available online"
                      >
                        <div class="pro-img">
                          <a href="#">
                            <img src="images/profiles/11.jpg" alt="" />
                          </a>
                          <div class="pro-ave" title="User currently available">
                            <span class="pro-ave-yes"></span>
                          </div>
                          <div class="pro-avl-status">
                            <h5>Available Online</h5>
                          </div>
                        </div>

                        <div class="pro-detail">
                          <h4>
                            <a href="#">Angelina Jolie</a>
                          </h4>
                          <div class="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div class="links">
                            <span class="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              class="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="#">More detaiils</a>
                          </div>
                        </div>

                        <span
                          class="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        <div class="pro-img">
                          <a href="#">
                            <img src="images/profiles/12.jpg" alt="" />
                          </a>
                          <div class="pro-ave" title="User currently available">
                            <span class="pro-ave-yes"></span>
                          </div>
                          <div class="pro-avl-status">
                            <h5>Last login 10 mins ago</h5>
                            <span class="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span>
                          </div>
                        </div>

                        <div class="pro-detail">
                          <h4>
                            <a href="#">Olivia mia</a>
                          </h4>
                          <div class="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div class="links">
                            <span class="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              class="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="#">More detaiils</a>
                          </div>
                        </div>
                        <span
                          class="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div
                        class="all-pro-box"
                        data-useravil="avilno"
                        data-aviltxt="Offline"
                      >
                        <div class="pro-img">
                          <a href="#">
                            <img src="images/profiles/13.jpg" alt="" />
                          </a>
                          <div class="pro-ave" title="User currently available">
                            <span class="pro-ave-yes"></span>
                          </div>
                          <div class="pro-avl-status">
                            <h5>Last login 10 mins ago</h5>
                            <span class="marqu">
                              Last login 10 mins ago | I'll be available on
                              10:00 AM
                            </span>
                          </div>
                        </div>
                        /{" "}
                        <div class="pro-detail">
                          <h4>
                            <a href="#">Jennifer</a>
                          </h4>
                          <div class="pro-bio">
                            <span>B.Sc</span>
                            <span>IT Profession</span>
                            <span>29 Yeard old</span>
                            <span>Height: 155Cms</span>
                          </div>
                          <div class="links">
                            <span class="cta-chat">Chat now</span>
                            <a href="#!">WhatsApp</a>
                            <a
                              href="#!"
                              class="cta cta-sendint"
                              data-bs-toggle="modal"
                              data-bs-target="#sendInter"
                            >
                              Send interest
                            </a>
                            <a href="#">More detaiils</a>
                          </div>
                        </div>
                        <span
                          class="enq-sav"
                          data-toggle="tooltip"
                          title="Click to save this provile."
                        >
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="modal fade" id="sendInter">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title seninter-tit">
                Send interest to <span class="intename2">Jolia</span>
              </h4>
              <button type="button" class="close" data-bs-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body seninter">
              <div class="lhs">
                <img src="images/profiles/1.jpg" alt="" class="intephoto2" />
              </div>
              <div class="rhs">
                <h4>
                  Permissions: <span class="intename2">Jolia</span> Can able to
                  view the below details
                </h4>
                <ul>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_about" checked="" />
                      <label for="pro_about">About section</label>
                    </div>
                  </li>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_photo" />
                      <label for="pro_photo">Photo gallery</label>
                    </div>
                  </li>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_contact" />
                      <label for="pro_contact">Contact info</label>
                    </div>
                  </li>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_person" />
                      <label for="pro_person">Personal info</label>
                    </div>
                  </li>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_hobbi" />
                      <label for="pro_hobbi">Hobbies</label>
                    </div>
                  </li>
                  <li>
                    <div class="chbox">
                      <input type="checkbox" id="pro_social" />
                      <label for="pro_social">Social media</label>
                    </div>
                  </li>
                </ul>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="comment"
                    name="text"
                    placeholder="Comment goes here"
                  ></textarea>
                  <label for="comment">
                    Write some message to <span class="intename"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Send interest
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="chatbox">
        <span class="comm-msg-pop-clo">
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>

        <div class="inn">
          <form name="new_chat_form" method="post">
            <div class="s1">
              <img src="images/user/2.jpg" class="intephoto2" alt="" />
              <h4>
                <b class="intename2">Julia</b>,
              </h4>
              <span class="avlsta avilyes">Available online</span>
            </div>
            <div class="s2 chat-box-messages">
              <span class="chat-wel">Start a new chat!!! now</span>
              <div class="chat-con">
                <div class="chat-lhs">Hi</div>
                <div class="chat-rhs">Hi</div>
              </div>
            </div>
            <div class="s3">
              <input
                type="text"
                name="chat_message"
                placeholder="Type a message here.."
                required=""
              />
              <button id="chat_send1" name="chat_send" type="submit">
                Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <section class="wed-hom-footer">
        <div class="container">
          <div class="row foot-supp">
            <h2>
              <span>Free support:</span> +92 (8800) 68 - 8960
              &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span>
              info@example.com
            </h2>
          </div>
          <div class="row wed-foot-link wed-foot-link-1">
            <div class="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>
                Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
              </p>
              <p>
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
            <div class="col-md-4">
              <h4>HELP &amp; SUPPORT</h4>
              <ul>
                <li>
                  <a href="#">About company</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 fot-soc">
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
          <div class="row foot-count">
            <p>
              Company name Site - Trusted by over thousands of Boys & Girls for
              successfull marriage.{" "}
              <a href="#" class="btn btn-primary btn-sm">
                Join us today !
              </a>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="cr">
          <div class="container">
            <div class="row">
              <p>
                Copyright © <span id="cry">2017-2020</span>{" "}
                <a href="#!" target="_blank">
                  Company.com
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserAllProfilePage;
