import img1 from "../../assets/images/profiles/1.jpg";
import NewLayout from "./layout/NewLayout";

export default function AdminFreeUserList() {
  return (
    <>
      <NewLayout>
        <div className="row">
          <div className="col-md-12">
            <div className="box-com box-qui box-lig box-tab">
              <div className="tit">
                <h3>Free requests</h3>
                <p>New request profiles, waiting for admin approvals</p>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
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
      </NewLayout>
    </>
  );
}
