import React, { useEffect, useState } from "react";
import NewLayout from "./layout/NewLayout";
import img1 from "../../assets/images/profiles/1.jpg";
import { getAllUserData } from "../../api/service/adminServices";

const AdminAllUsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("userName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterPayment, setFilterPayment] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUserData();
        if (response.status===200) {
          // Map API data to include missing fields with default values
          const mappedUsers = response.data.data.map((user) => ({
            ...user,
            city: user.city || "N/A",
            planStart: user.planStart || "N/A",
            expiryDate: user.expiryDate || "N/A",
            payment: user.payment || "Pending",
            planType: user.planType || "Basic",
          }));
          setUsers(mappedUsers);
          setFilteredUsers(mappedUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Search and filter effect
  useEffect(() => {
    let filtered = users.filter((user) => {
      const matchesSearch =
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userMobile.includes(searchTerm);

      const matchesPlan = filterPlan === "all" || user.planType === filterPlan;
      const matchesPayment =
        filterPayment === "all" || user.payment === filterPayment;

      return matchesSearch && matchesPlan && matchesPayment;
    });

    // Sort
    filtered.sort((a, b) => {
      const aValue = a[sortField]?.toString().toLowerCase() || "";
      const bValue = b[sortField]?.toString().toLowerCase() || "";

      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, sortField, sortDirection, filterPlan, filterPayment]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return <i className="fa fa-sort text-muted"></i>;
    return sortDirection === "asc" ? (
      <i className="fa fa-sort-up"></i>
    ) : (
      <i className="fa fa-sort-down"></i>
    );
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <NewLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="box-com box-qui box-lig box-tab">
            <div className="tit">
              <h3>All users</h3>
              <p>All user profiles ({filteredUsers.length} total)</p>
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
                    <a className="dropdown-item" href="admin-add-new-user.html">
                      Add new user
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="admin-settings.html#new-user-request"
                    >
                      User setting
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="admin-settings.html#plan"
                    >
                      User plan
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="row mb-3 p-3 bg-light">
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <select
                  className="form-select"
                  value={filterPlan}
                  onChange={(e) => setFilterPlan(e.target.value)}
                >
                  <option value="all">All Plans</option>
                  <option value="Premium">Premium</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>
              <div className="col-md-2">
                <select
                  className="form-select"
                  value={filterPayment}
                  onChange={(e) => setFilterPayment(e.target.value)}
                >
                  <option value="all">All Payments</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="col-md-2">
                <select
                  className="form-select"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value={5}>5 per page</option>
                  <option value={10}>10 per page</option>
                  <option value={20}>20 per page</option>
                </select>
              </div>
              <div className="col-md-2">
                <small className="text-muted">
                  Showing {indexOfFirstItem + 1}-
                  {Math.min(indexOfLastItem, filteredUsers.length)} of{" "}
                  {filteredUsers.length}
                </small>
              </div>
            </div>

            {loading ? (
              <div className="text-center p-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSort("userName")}
                      >
                        Profile {getSortIcon("userName")}
                      </th>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSort("userMobile")}
                      >
                        Phone {getSortIcon("userMobile")}
                      </th>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSort("city")}
                      >
                        City {getSortIcon("city")}
                      </th>
                      <th>Plan start</th>
                      <th>Expiry date</th>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSort("payment")}
                      >
                        Payment {getSortIcon("payment")}
                      </th>
                      <th
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSort("planType")}
                      >
                        Plan type {getSortIcon("planType")}
                      </th>
                      <th>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Static row - keeping your original example */}
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
                      <td>New York</td>
                      <td>22, Feb 2024</td>
                      <td>
                        <span className="hig-red">22, Feb 2025</span>
                      </td>
                      <td>
                        <span className="hig-blu">Paid</span>
                      </td>
                      <td>
                        <span className="hig-grn">Premium</span>
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
                    {/* Dynamic rows from API */}
                    {currentItems.map((user, index) => (
                      <tr key={user._id}>
                        <td>{indexOfFirstItem + index + 2}</td>
                        <td>
                          <div className="prof-table-thum">
                            <div className="pro">
                              <div
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  backgroundColor: "#007bff",
                                  color: "white",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                }}
                              >
                                {getInitials(user.userName)}
                              </div>
                            </div>
                            <div className="pro-info">
                              <h5>{user.userName}</h5>
                              <p>{user.userEmail}</p>
                            </div>
                          </div>
                        </td>
                        <td>{user.userMobile}</td>
                        <td>{user.city}</td>
                        <td>{user.planStart}</td>
                        <td>
                          <span
                            className={
                              user.expiryDate !== "N/A"
                                ? "hig-red"
                                : "text-muted"
                            }
                          >
                            {user.expiryDate}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              user.payment === "Paid" ? "hig-blu" : "hig-red"
                            }
                          >
                            {user.payment}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              user.planType === "Premium"
                                ? "hig-grn"
                                : "hig-yel"
                            }
                          >
                            {user.planType}
                          </span>
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
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </NewLayout>
  );
};

export default AdminAllUsersList;
