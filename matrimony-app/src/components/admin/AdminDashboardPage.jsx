import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const AdminDashboard = () => {
  const [openMenus, setOpenMenus] = useState({});
  const chartsRef = useRef({
    earningChart: null,
    usersChart: null,
    monthlyEarningsChart: null,
  });

  // Toggle submenu function
  const toggleSubmenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  useEffect(() => {
    // Set global chart defaults
    Chart.defaults.font.size = 14;
    Chart.defaults.color = "#666";

    // Initialize charts
    const initCharts = () => {
      // Destroy existing charts first
      if (chartsRef.current.earningChart) {
        chartsRef.current.earningChart.destroy();
      }
      if (chartsRef.current.usersChart) {
        chartsRef.current.usersChart.destroy();
      }
      if (chartsRef.current.monthlyEarningsChart) {
        chartsRef.current.monthlyEarningsChart.destroy();
      }

      // Earnings Pie Chart
      const earningCanvas = document.getElementById("Chart_earni");
      if (earningCanvas) {
        chartsRef.current.earningChart = new Chart(earningCanvas, {
          type: "pie",
          data: {
            labels: ["Premium Plus", "Premium"],
            datasets: [
              {
                data: [50, 60],
                backgroundColor: ["#8463FF", "#6384FF"],
              },
            ],
          },
        });
      }

      // Users Pie Chart
      const usersCanvas = document.getElementById("Chart_users");
      if (usersCanvas) {
        chartsRef.current.usersChart = new Chart(usersCanvas, {
          type: "pie",
          data: {
            labels: ["Premium Plus", "Premium", "Free"],
            datasets: [
              {
                data: [40, 30, 30],
                backgroundColor: ["#198754", "#ffc107", "#6c757d"],
              },
            ],
          },
        });
      }

      // Monthly Earnings Bar Chart
      const earningsReceiptCanvas = document.getElementById("Chart_earni_rece");
      if (earningsReceiptCanvas) {
        chartsRef.current.monthlyEarningsChart = new Chart(
          earningsReceiptCanvas,
          {
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
                  label: "Monthly Earnings",
                  data: [
                    4000, 5000, 4550, 6005, 8550, 9008, 3220, 4880, 6550, 2500,
                    4000, 5000,
                  ],
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderWidth: 2,
                  hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  hoverBorderColor: "rgba(255,99,132,1)",
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          }
        );
      }
    };

    initCharts();

    // Update copyright year
    const copyrightYear = document.getElementById("cry");
    if (copyrightYear) {
      copyrightYear.textContent = new Date().getFullYear();
    }

    // Cleanup function
    return () => {
      // Destroy all charts when component unmounts
      if (chartsRef.current.earningChart) {
        chartsRef.current.earningChart.destroy();
      }
      if (chartsRef.current.usersChart) {
        chartsRef.current.usersChart.destroy();
      }
      if (chartsRef.current.monthlyEarningsChart) {
        chartsRef.current.monthlyEarningsChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        /* Custom styles for sidebar menu */
        .ad-menu ul li div {
          display: none;
          background: #f8f9fa;
          padding: 10px 0;
          margin-top: 5px;
          border-radius: 4px;
        }

        .ad-menu ul li.menu-open div {
          display: block;
        }

        .ad-menu ul li > a {
          cursor: pointer;
          padding: 10px 15px;
          display: block;
          color: #333;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .ad-menu ul li > a:hover {
          background: #e9ecef;
        }

        .ad-menu ul li div ol li a {
          padding: 8px 25px;
          color: #666;
          font-size: 14px;
        }

        .ad-menu ul li div ol li a:hover {
          background: #dee2e6;
          color: #333;
        }

        .ad-menu ul li h4 {
          color: #666;
          font-size: 12px;
          text-transform: uppercase;
          margin: 20px 15px 10px;
          font-weight: 600;
        }

        /* Notification dropdown styles */
        .smenu-pare {
          position: relative;
          display: inline-block;
        }

        .smenu-open {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          min-width: 250px;
          z-index: 1000;
        }

        .smenu-pare:hover .smenu-open {
          display: block;
        }

        .smenu-open ul {
          list-style: none;
          padding: 10px 0;
          margin: 0;
        }

        .smenu-open ul li {
          padding: 8px 15px;
          border-bottom: 1px solid #eee;
        }

        .smenu-open ul li:last-child {
          border-bottom: none;
        }

        /* Chart containers */
        canvas {
          max-height: 200px;
        }

        /* Responsive table */
        .table-responsive {
          overflow-x: auto;
        }

        /* Live indicator */
        .live-box .live {
          position: relative;
          height: 10px;
        }

        .live .move {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #28a745;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      {/* HEAD */}
      <section className="head">
        <div className="container">
          <div className="row header">
            <div className="col-md-3">
              <div className="logo">
                <img
                  src="https://via.placeholder.com/150x50/007bff/ffffff?text=LOGO"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-sarch">
                <input
                  type="text"
                  placeholder="Search here"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-set">
                <ul className="d-flex list-unstyled mb-0">
                  <li className="me-3">
                    <div className="sett-out smenu-pare">
                      <span className="smenu btn btn-outline-secondary">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open top-noti">
                        <ul>
                          <li>
                            <p>
                              <strong>4</strong> New users joined today
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>6</strong> New users waiting for the Admin
                              approve
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>200</strong> Users visiting our website in
                              last day
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>20</strong> Users send{" "}
                              <strong>Interest request</strong> in last day
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="me-3">
                    <div className="sett-out smenu-pare">
                      <span className="smenu btn btn-outline-secondary">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a href="#" className="dropdown-item">
                              All Profiles
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Pricing details
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Payments
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Enquiries
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="me-3">
                    <div className="sett-out smenu-pare">
                      <span className="smenu btn btn-outline-secondary">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a href="#" className="dropdown-item">
                              Site Setting
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              SEO Settings
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              All profile filters
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
                              Backup Data
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="sett-out smenu-pare">
                      <span className="smenu btn btn-outline-secondary">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                      </span>
                      <div className="smenu-open">
                        <ul>
                          <li>
                            <a href="#" className="dropdown-item">
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
              <div className="pan-lhs ad-menu-main col-md-3">
                <div className="ad-menu">
                  <ul className="list-unstyled">
                    <li className="ic-db">
                      <a onClick={() => console.log("Dashboard clicked")}>
                        Dashboard
                      </a>
                    </li>
                    <li
                      className={`ic-user ${
                        openMenus.users ? "menu-open" : ""
                      }`}
                    >
                      <a onClick={() => toggleSubmenu("users")}>
                        Users {openMenus.users ? "▼" : "▶"}
                      </a>
                      <div>
                        <ol className="list-unstyled">
                          <li>
                            <a href="#">New User Requests</a>
                          </li>
                          <li>
                            <a href="#">All Users</a>
                          </li>
                          <li>
                            <a href="#">Free Users</a>
                          </li>
                          <li>
                            <a href="#">Standard Users</a>
                          </li>
                          <li>
                            <a href="#">Premium Users</a>
                          </li>
                          <li>
                            <a href="#">Add new User</a>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li>
                      <h4>SEO Settings</h4>
                    </li>
                    <li
                      className={`ic-seo ${openMenus.seo ? "menu-open" : ""}`}
                    >
                      <a onClick={() => toggleSubmenu("seo")}>
                        SEO Settings {openMenus.seo ? "▼" : "▶"}
                      </a>
                      <div>
                        <ol className="list-unstyled">
                          <li>
                            <a href="#">Meta tags</a>
                          </li>
                          <li>
                            <a href="#">Google Analytics Code</a>
                          </li>
                          <li>
                            <a href="#">XML Sitemap</a>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li>
                      <h4>Payments</h4>
                    </li>
                    <li className="ic-pay">
                      <a href="#">All Payments</a>
                    </li>
                    <li className="ic-pri">
                      <a href="#">Pricing Plans</a>
                    </li>
                    <li className="ic-pay">
                      <a href="#">Payment gateway</a>
                    </li>

                    <li>
                      <h4>Settings</h4>
                    </li>
                    <li className="ic-set">
                      <a href="#">Site Setting</a>
                    </li>

                    <li>
                      <h4>Appearance</h4>
                    </li>
                    <li className="ic-logo">
                      <a href="#">Website Logo</a>
                    </li>
                    <li className="ic-colr">
                      <a href="#">Color Setting</a>
                    </li>
                    <li className="ic-medi">
                      <a href="#">Media Library</a>
                    </li>

                    <li>
                      <h4>CMS</h4>
                    </li>
                    <li
                      className={`ic-hom ${openMenus.cms ? "menu-open" : ""}`}
                    >
                      <a onClick={() => toggleSubmenu("cms")}>
                        Home Page {openMenus.cms ? "▼" : "▶"}
                      </a>
                      <div>
                        <ol className="list-unstyled">
                          <li>
                            <a href="#">Search</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Customer reviews</a>
                          </li>
                          <li>
                            <a href="#">Recent couples</a>
                          </li>
                          <li>
                            <a href="#">Meet out team</a>
                          </li>
                          <li>
                            <a href="#">Photo gallery</a>
                          </li>
                          <li>
                            <a href="#">Blog & Articles</a>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li className="ic-txt">
                      <a href="#">All profile filters</a>
                    </li>
                    <li className="ic-txt">
                      <a href="#">All Pages</a>
                    </li>
                    <li className="ic-txt">
                      <a href="#">All Text Update</a>
                    </li>
                    <li className="ic-txt">
                      <a href="#">Footer</a>
                    </li>
                    <li className="ic-dum">
                      <a href="#">Dummy Images</a>
                    </li>
                    <li className="ic-mail">
                      <a href="#">Mail Templates</a>
                    </li>

                    <li>
                      <h4>Others</h4>
                    </li>
                    <li className="ic-febk">
                      <a href="#">All Enquiry</a>
                    </li>
                    <li className="ic-imp">
                      <a href="#">Export</a>
                    </li>

                    <li>
                      <h4>Template</h4>
                    </li>
                    <li className="ic-act">
                      <a href="#">Activation</a>
                    </li>
                    <li className="ic-upd">
                      <a href="#">Template updates</a>
                    </li>

                    <li>
                      <h4>Sign out</h4>
                    </li>
                    <li className="ic-lgo">
                      <a href="#">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pan-rhs col-md-9">
                <div className="row main-head">
                  <div className="col-md-4">
                    <div className="tit">
                      <h1>Admin Dashboard</h1>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Library</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Data
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>

                {/* Dashboard Cards */}
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h4>New Users</h4>
                        <h2 className="text-success">69</h2>
                        <p>User requests today</p>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5>All Members</h5>
                        <h3 className="text-primary">6900</h3>
                        <canvas id="Chart_users"></canvas>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <h5>Live Visitors</h5>
                        <h3 className="text-info">3600</h3>
                        <p>Currently active users</p>
                        <div className="live">
                          <span className="move"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5>New Registrants</h5>
                        <h3 className="text-warning">38</h3>
                        <div className="d-flex mt-3">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <img
                              key={i}
                              src={`https://via.placeholder.com/30x30/007bff/ffffff?text=${i}`}
                              className="rounded-circle me-1"
                              width="30"
                              height="30"
                              alt={`User ${i}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5>Total Earnings</h5>
                        <h3 className="text-success">$10,069</h3>
                        <canvas id="Chart_earni"></canvas>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <h5>Leads & Enquiry</h5>
                        <h3 className="text-danger">28</h3>
                        <div className="d-flex mt-3">
                          {["A", "J", "B", "E", "B", "U", "M"].map(
                            (letter, i) => (
                              <span
                                key={i}
                                className="badge bg-secondary me-1 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "30px", height: "30px" }}
                              >
                                {letter}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <h5>Monthly Earnings</h5>
                        <h3 className="text-primary">$10,069</h3>
                        <canvas id="Chart_earni_rece"></canvas>
                      </div>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <h5>Template Update Status</h5>
                        <ul className="list-unstyled">
                          <li>
                            Current version: <strong>3.6</strong>
                          </li>
                          <li>
                            Latest version: <strong>4.2</strong>
                          </li>
                          <li>
                            Template Activation: <strong>Yes</strong>
                          </li>
                        </ul>
                        <div className="d-flex gap-2">
                          <button className="btn btn-danger btn-sm">
                            Update
                          </button>
                          <button className="btn btn-success btn-sm">
                            License key
                          </button>
                          <button className="btn btn-outline-secondary btn-sm">
                            More details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tables Section */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                          <h5>Recent Members</h5>
                          <small className="text-muted">
                            Recently joined members
                          </small>
                        </div>
                        <button className="btn btn-outline-secondary btn-sm">
                          ⋯
                        </button>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table table-hover mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>No</th>
                                <th>Profile</th>
                                <th>Phone</th>
                                <th>Join date</th>
                                <th>Plan type</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                "Ashley emyy",
                                "Elizabeth Taylor",
                                "Angelina Jolie",
                                "Olivia mia",
                                "Jennifer",
                                "Emmy jack",
                              ].map((name, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={`https://via.placeholder.com/40x40/007bff/ffffff?text=${name.charAt(
                                          0
                                        )}`}
                                        className="rounded-circle me-2"
                                        width="40"
                                        height="40"
                                        alt={name}
                                      />
                                      <div>
                                        <h6 className="mb-0">{name}</h6>
                                        <small className="text-muted">
                                          ashleyipsum@gmail.com
                                        </small>
                                      </div>
                                    </div>
                                  </td>
                                  <td>01 321-998-91</td>
                                  <td>22, Feb 2024</td>
                                  <td>
                                    <span className="badge bg-success">
                                      Premium
                                    </span>
                                  </td>
                                  <td>
                                    <button className="btn btn-outline-secondary btn-sm">
                                      ⋯
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <div>
                          <h5>Renewal Reminder</h5>
                          <small className="text-muted">
                            Profiles expiring soon
                          </small>
                        </div>
                        <button className="btn btn-outline-secondary btn-sm">
                          ⋯
                        </button>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table table-hover mb-0">
                            <thead className="table-light">
                              <tr>
                                <th>No</th>
                                <th>Profile</th>
                                <th>Phone</th>
                                <th>Expiry date</th>
                                <th>Plan type</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                "Ashley emyy",
                                "Elizabeth Taylor",
                                "Angelina Jolie",
                                "Olivia mia",
                              ].map((name, i) => (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={`https://via.placeholder.com/40x40/dc3545/ffffff?text=${name.charAt(
                                          0
                                        )}`}
                                        className="rounded-circle me-2"
                                        width="40"
                                        height="40"
                                        alt={name}
                                      />
                                      <div>
                                        <h6 className="mb-0">{name}</h6>
                                        <small className="text-muted">
                                          ashleyipsum@gmail.com
                                        </small>
                                      </div>
                                    </div>
                                  </td>
                                  <td>01 321-998-91</td>
                                  <td>
                                    <span className="text-danger">
                                      22, Feb 2024
                                    </span>
                                  </td>
                                  <td>
                                    <span className="badge bg-success">
                                      Premium
                                    </span>
                                  </td>
                                  <td>
                                    <button className="btn btn-outline-secondary btn-sm">
                                      ⋯
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section>
        <div className="cr bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p className="mb-0">
                  Copyright © <span id="cry">2017-2020</span>{" "}
                  <a href="#!" target="_blank" rel="noopener noreferrer">
                    Company.com
                  </a>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
