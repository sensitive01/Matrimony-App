import React, { useEffect } from "react";
import { Chart } from "chart.js";
import logo from "../../components/admin/images/logo.png";
import img1 from "../../assets/images/profiles/1.jpg";


export default function AdminNewUserRequest() {
  useEffect(() => {
    // Chart.js functionality
    const loadCharts = () => {
      // Check if Chart is available
      if (typeof Chart !== "undefined") {
        // EARNING CHART
        const earningCanvas = document.getElementById("Chart_earni");
        if (earningCanvas) {
          Chart.defaults.global.defaultFontSize = 14;

          const earningsData = {
            labels: ["Premium Plus", "Premium"],
            datasets: [
              {
                data: [50, 60],
                backgroundColor: ["#8463FF", "#6384FF"],
              },
            ],
          };

          new Chart(earningCanvas, {
            type: "pie",
            data: earningsData,
          });
        }

        // USER CHART
        const usersCanvas = document.getElementById("Chart_users");
        if (usersCanvas) {
          const usersData = {
            labels: ["Premium Plus", "Premium", "Free"],
            datasets: [
              {
                data: [40, 30, 30],
                backgroundColor: ["#198754", "#ffc107", "#6c757d"],
              },
            ],
          };

          new Chart(usersCanvas, {
            type: "pie",
            data: usersData,
          });
        }

        // EARNINGS RECEIVED CHART
        const ctx = document.getElementById("Chart_earni_rece");
        if (ctx) {
          new Chart(ctx.getContext("2d"), {
            type: "bar",
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "data-1",
                  data: [
                    4000, 5000, 4550, 6005, 8550, 9008, 3220, 4880, 6550, 2500,
                  ],
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 2,
                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  hoverBorderColor: "rgba(255,99,132,1)",
                },
              ],
            },
          });
        }
      }
    };

    // Load charts after component mounts
    setTimeout(loadCharts, 100);
  }, []);

  return (
    <>
      {/* HEAD */}
      <section className="head">
        <div className="container">
          <div className="row header">
            <div className="col-md-3">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-sarch">
                <input type="text" placeholder="Search here" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-set">
                <ul>
                  <li>
                    <div className="sett-out smenu-pare">
                      <span className="smenu">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open top-noti">
                        <ul>
                          <li>
                            <div>
                              <p>
                                <strong>4</strong> New users joined today
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong>6</strong> New users waiting for the
                                Admin approve
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong>200</strong> Users visiting our website
                                in last day
                              </p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>
                                <strong>20</strong> Users send{" "}
                                <strong>Interest request</strong> in last day
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sett-out smenu-pare">
                      <span className="smenu">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a
                              href="admin-all-users.html"
                              className="waves-effect"
                            >
                              <i className="fa fa-male" aria-hidden="true"></i>{" "}
                              All Profiles
                            </a>
                          </li>
                          <li>
                            <a href="admin-price.html" className="waves-effect">
                              <i className="fa fa-usd" aria-hidden="true"></i>{" "}
                              Pricing details
                            </a>
                          </li>
                          <li>
                            <a
                              href="admin-all-payments.html"
                              className="waves-effect"
                            >
                              <i className="fa fa-money" aria-hidden="true"></i>{" "}
                              Payments
                            </a>
                          </li>
                          <li>
                            <a
                              href="admin-enquiry.html"
                              className="waves-effect"
                            >
                              <i
                                className="fa fa-envelope-o"
                                aria-hidden="true"
                              ></i>{" "}
                              Enquiries
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sett-out smenu-pare">
                      <span className="smenu">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a
                              href="admin-setting.html"
                              className="waves-effect"
                            >
                              <i className="fa fa-cogs" aria-hidden="true"></i>
                              Site Setting
                            </a>
                          </li>
                          <li>
                            <a
                              href="seo-google-analytics-code.html"
                              className="waves-effect"
                            >
                              <i
                                className="fa fa-list-ul"
                                aria-hidden="true"
                              ></i>{" "}
                              SEO Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="admin-profile-filters.html"
                              className="waves-effect"
                            >
                              <i
                                className="fa fa-building-o"
                                aria-hidden="true"
                              ></i>{" "}
                              All profile filters
                            </a>
                          </li>
                          <li>
                            <a
                              href="admin-export.html"
                              className="waves-effect"
                            >
                              <i className="fa fa-undo" aria-hidden="true"></i>{" "}
                              Backup Data
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sett-out smenu-pare">
                      <span className="smenu">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a href="#" className="waves-effect">
                              <i
                                className="fa fa-sign-out"
                                aria-hidden="true"
                              ></i>{" "}
                              Log out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section>
        <div className="main">
          <div className="incon">
            <div className="row">
              <div className="pan-lhs ad-menu-main">
                <div className="ad-menu">
                  <ul>
                    <li className="ic-db">
                      <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li className="ic-user">
                      <a href="#" className="">
                        Users
                      </a>
                      <div>
                        <ol>
                          <li>
                            <a href="admin-new-user-requests.html">
                              New User Requests
                            </a>
                          </li>
                          <li>
                            <a href="admin-all-users.html">All Users</a>
                          </li>
                          <li>
                            <a href="admin-free-users.html">Free Users</a>
                          </li>
                          <li>
                            <a href="admin-gold-users.html">Standard Users</a>
                          </li>
                          <li>
                            <a href="admin-platinum-users.html">
                              Premium Users
                            </a>
                          </li>
                          <li>
                            <a href="admin-add-new-user.html">Add new User</a>
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li>
                      <h4>SEO Settings</h4>
                    </li>
                    <li className="ic-seo">
                      <a href="#" className="">
                        SEO Settings
                      </a>
                      <div>
                        <ol>
                          <li>
                            <a href="admin-meta.html">Meta tags</a>
                          </li>
                          <li>
                            <a href="seo-google-analytics-code.html">
                              Google Analytics Code
                            </a>
                          </li>
                          <li>
                            <a href="seo-xml-sitemap.html">XML Sitemap</a>
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li>
                      <h4>Payments</h4>
                    </li>
                    <li className="ic-pay">
                      <a href="admin-all-payments.html">All Payments</a>
                    </li>
                    <li className="ic-pri">
                      <a href="admin-price.html">Pricing Plans</a>
                    </li>
                    <li className="ic-pay">
                      <a href="admin-payment-credentials.html">
                        Payment gateway
                      </a>
                    </li>
                    <li>
                      <h4>Settings</h4>
                    </li>
                    <li className="ic-set">
                      <a href="admin-setting.html">Site Setting</a>
                    </li>
                    <li>
                      <h4>Appearance</h4>
                    </li>
                    <li className="ic-logo">
                      <a href="admin-logo.html">Website Logo</a>
                    </li>
                    <li className="ic-colr">
                      <a href="color-settings.html">Color Setting</a>
                    </li>
                    <li className="ic-medi">
                      <a href="media-library.html">Media Library</a>
                    </li>
                    <li>
                      <h4>CMS</h4>
                    </li>
                    <li className="ic-hom">
                      <a href="#">Home Page</a>
                      <div>
                        <ol>
                          <li>
                            <a href="admin-home-search.html">Search</a>
                          </li>
                          <li>
                            <a href="admin-home-services.html">Services</a>
                          </li>
                          <li>
                            <a href="admin-home-reviews.html">
                              Customer reviews
                            </a>
                          </li>
                          <li>
                            <a href="admin-home-recent-couples.html">
                              Recent couples
                            </a>
                          </li>
                          <li>
                            <a href="admin-home-meet-team.html">
                              Meet out team
                            </a>
                          </li>
                          <li>
                            <a href="admin-photo-gallery.html">Photo gallery</a>
                          </li>
                          <li>
                            <a href="admin-home-blogs.html">Blog & Articles</a>
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li className="ic-txt">
                      <a href="admin-profile-filters.html">
                        All profile filters
                      </a>
                    </li>
                    <li className="ic-txt">
                      <a href="admin-all-static-page.html">All Pages</a>
                    </li>
                    <li className="ic-txt">
                      <a href="admin-all-text-update.html">All Text Update</a>
                    </li>
                    <li className="ic-txt">
                      <a href="admin-footer.html">Footer</a>
                    </li>
                    <li className="ic-dum">
                      <a href="admin-dummy-images.html">Dummy Images</a>
                    </li>
                    <li className="ic-mail">
                      <a href="admin-all-mail.html" className="">
                        Mail Templates
                      </a>
                    </li>
                    <li>
                      <h4>Others</h4>
                    </li>
                    <li className="ic-febk">
                      <a href="admin-enquiry.html">All Enquiry</a>
                    </li>
                    <li className="ic-imp">
                      <a href="admin-export.html">Export</a>
                    </li>
                    <li>
                      <h4>Template</h4>
                    </li>
                    <li className="ic-act">
                      <a href="activate.html" className="">
                        Activation
                      </a>
                    </li>
                    <li className="ic-upd">
                      <a href="updates.html" className="">
                        Template updates
                      </a>
                    </li>
                    <li>
                      <h4>Sign out</h4>
                    </li>
                    <li className="ic-lgo">
                      <a href="logout.html">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pan-rhs">
                <div className="row main-head">
                  <div className="col-md-4">
                    <div className="tit">
                      <h1>New user request</h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Users</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          New user request
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-com box-qui box-lig box-tab">
                      <div className="tit">
                        <h3>Join requests</h3>
                        <p>New request profiles, waiting for admin approvals</p>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-toggle="dropdown"
                          >
                            <i
                              className="fa fa-ellipsis-h"
                              aria-hidden="true"
                            ></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="admin-settings.html#new-user-request"
                              >
                                New user request setting
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="admin-settings.html#new-user-request"
                              >
                                Approval setting
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Profile</th>
                            <th>Phone</th>
                            <th>Request date</th>
                            <th>Request time</th>
                            <th>Payment</th>
                            <th>Plan type</th>
                            <th>Approve</th>
                            <th>More</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <div className="prof-table-thum">
                                <div className="pro">
                                  <img src={img1} alt="" />
                                </div>
                                <div className="pro-info">
                                  <h5>Ashley emyy</h5>
                                  <p>ashleyipsum@gmail.com</p>
                                </div>
                              </div>
                            </td>
                            <td>01 321-998-91</td>
                            <td>22, Feb 2024</td>
                            <td>10:30 AM</td>
                            <td>
                              <span className="hig-blu">Paid</span>
                            </td>
                            <td>
                              <span className="hig-grn">Premium</span>
                            </td>
                            <td>
                              <span className="cta cta-grn">Approve</span>
                            </td>
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="dropdown"
                                >
                                  <i
                                    className="fa fa-ellipsis-h"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Billing info
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      View more details
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      View profile
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHTS */}
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
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
}
