import React, { useEffect, useState } from "react";
import NewLayout from "./layout/NewLayout";
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
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUserData();
        if (response.status === 200) {
          const mappedUsers = response.data.data.map((user) => ({
            ...user,
            city: user.city || "N/A",
            planStart: user.planStart || "N/A",
            expiryDate: user.expiryDate || "N/A",
            payment: user.payment || "Pending",
            planType: user.planType || "Basic",
            profileImg: user.profileImage || "",
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

  // Format date
  const formatDate = (dateString) => {
    if (dateString === "N/A") return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Table styles (matching the AdminNewUserRequest layout)
  const tableStyles = {
    tableContainer: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "14px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    tableHeader: {
      backgroundColor: "#f8f9fa",
      borderBottom: "2px solid #e9ecef",
    },
    th: {
      padding: "12px 15px",
      textAlign: "left",
      fontWeight: "600",
      color: "#495057",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      cursor: "pointer",
    },
    td: {
      padding: "12px 15px",
      borderBottom: "1px solid #e9ecef",
      color: "#212529",
      fontSize: "14px",
      fontWeight: "400",
    },
    profileCell: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    profileImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #e9ecef",
    },
    profileInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
    profileName: {
      fontWeight: "600",
      color: "#212529",
      fontSize: "14px",
      margin: "0",
      lineHeight: "1.2",
    },
    profileEmail: {
      color: "#6c757d",
      fontSize: "12px",
      margin: "0",
      lineHeight: "1.2",
    },
    profileMobile: {
      color: "#495057",
      fontSize: "12px",
      margin: "0",
      lineHeight: "1.2",
      fontWeight: "500",
    },
    dateTimeContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    dateText: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#212529",
      margin: "0",
      lineHeight: "1.2",
    },
    timeText: {
      fontSize: "11px",
      color: "#6c757d",
      margin: "0",
      lineHeight: "1.2",
    },
    badge: {
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "11px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    paidStatus: {
      backgroundColor: "#e8f5e8",
      color: "#2e7d32",
    },
    unpaidStatus: {
      backgroundColor: "#ffebee",
      color: "#d32f2f",
    },
    pendingStatus: {
      backgroundColor: "#fff3e0",
      color: "#f57c00",
    },
    premiumBadge: {
      backgroundColor: "#e8f5e8",
      color: "#2e7d32",
    },
    basicBadge: {
      backgroundColor: "#e3f2fd",
      color: "#1976d2",
    },
    dropdownButton: {
      padding: "6px 10px",
      backgroundColor: "transparent",
      border: "1px solid #dee2e6",
      borderRadius: "4px",
      color: "#495057",
      cursor: "pointer",
      fontSize: "12px",
    },
  };

  // Pagination component (matching AdminNewUserRequest)
  const Pagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const paginationStyles = {
      pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        padding: "0",
        margin: "20px 0",
        gap: "5px",
      },
      pageItem: {
        display: "inline-block",
      },
      pageLink: {
        display: "block",
        padding: "8px 12px",
        textDecoration: "none",
        color: "#007bff",
        backgroundColor: "#fff",
        border: "1px solid #dee2e6",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
      },
      activePage: {
        backgroundColor: "#007bff",
        color: "#fff",
        borderColor: "#007bff",
      },
      disabledPage: {
        color: "#6c757d",
        backgroundColor: "#f8f9fa",
        borderColor: "#dee2e6",
        cursor: "not-allowed",
      },
    };

    return (
      <nav aria-label="Page navigation">
        <ul style={paginationStyles.pagination}>
          <li style={paginationStyles.pageItem}>
            <button
              style={{
                ...paginationStyles.pageLink,
                ...(currentPage === 1 ? paginationStyles.disabledPage : {}),
              }}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {startPage > 1 && (
            <>
              <li style={paginationStyles.pageItem}>
                <button
                  style={paginationStyles.pageLink}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
              </li>
              {startPage > 2 && (
                <li style={paginationStyles.pageItem}>
                  <span
                    style={{ ...paginationStyles.pageLink, cursor: "default" }}
                  >
                    ...
                  </span>
                </li>
              )}
            </>
          )}

          {pageNumbers.map((number) => (
            <li key={number} style={paginationStyles.pageItem}>
              <button
                style={{
                  ...paginationStyles.pageLink,
                  ...(currentPage === number
                    ? paginationStyles.activePage
                    : {}),
                }}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <li style={paginationStyles.pageItem}>
                  <span
                    style={{ ...paginationStyles.pageLink, cursor: "default" }}
                  >
                    ...
                  </span>
                </li>
              )}
              <li style={paginationStyles.pageItem}>
                <button
                  style={paginationStyles.pageLink}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}

          <li style={paginationStyles.pageItem}>
            <button
              style={{
                ...paginationStyles.pageLink,
                ...(currentPage === totalPages
                  ? paginationStyles.disabledPage
                  : {}),
              }}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <NewLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="box-com box-qui box-lig box-tab">
            <div className="tit">
              <h3>All Users</h3>
              <p>All user profiles ({filteredUsers.length} users)</p>
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

            {/* Search and Filter Controls */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <select
                  className="form-control"
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
                  className="form-control"
                  value={filterPayment}
                  onChange={(e) => setFilterPayment(e.target.value)}
                >
                  <option value="all">All Payments</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterPlan("all");
                    setFilterPayment("all");
                  }}
                >
                  Clear
                </button>
              </div>
            </div>

            {loading ? (
              <div className="text-center p-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div style={tableStyles.tableContainer}>
                <table style={tableStyles.table}>
                  <thead style={tableStyles.tableHeader}>
                    <tr>
                      <th style={tableStyles.th}>No</th>
                      <th
                        style={tableStyles.th}
                        onClick={() => handleSort("userName")}
                      >
                        Profile {getSortIcon("userName")}
                      </th>
                      <th
                        style={tableStyles.th}
                        onClick={() => handleSort("userMobile")}
                      >
                        Phone {getSortIcon("userMobile")}
                      </th>
                      <th
                        style={tableStyles.th}
                        onClick={() => handleSort("city")}
                      >
                        City {getSortIcon("city")}
                      </th>
                      <th style={tableStyles.th}>Plan Start</th>
                      <th style={tableStyles.th}>Expiry Date</th>
                      <th
                        style={tableStyles.th}
                        onClick={() => handleSort("payment")}
                      >
                        Payment {getSortIcon("payment")}
                      </th>
                      <th
                        style={tableStyles.th}
                        onClick={() => handleSort("planType")}
                      >
                        Plan Type {getSortIcon("planType")}
                      </th>
                      <th style={tableStyles.th}>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((user, index) => {
                        const serialNumber = indexOfFirstItem + index + 1;
                        return (
                          <tr key={user._id}>
                            <td style={tableStyles.td}>{serialNumber}</td>
                            <td style={tableStyles.td}>
                              <div style={tableStyles.profileCell}>
                                <div
                                  style={{
                                    ...tableStyles.profileImage,
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {/* {getInitials(user.userName)} */}
                                  <img
                                    src={user.profileImage}
                                    alt={getInitials(user.userName)}
                                    style={tableStyles.profileImage}
                                  />
                                </div>
                                <div style={tableStyles.profileInfo}>
                                  <h5 style={tableStyles.profileName}>
                                    {user.userName}
                                  </h5>
                                  <p style={tableStyles.profileEmail}>
                                    {user.userEmail}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td style={tableStyles.td}>{user.userMobile}</td>
                            <td style={tableStyles.td}>{user.city}</td>
                            <td style={tableStyles.td}>
                              {formatDate(user.planStart)}
                            </td>
                            <td style={tableStyles.td}>
                              <span
                                style={{
                                  ...tableStyles.badge,
                                  ...(user.expiryDate === "N/A"
                                    ? {
                                        color: "#6c757d",
                                        backgroundColor: "#f8f9fa",
                                      }
                                    : tableStyles.unpaidStatus),
                                }}
                              >
                                {formatDate(user.expiryDate)}
                              </span>
                            </td>
                            <td style={tableStyles.td}>
                              <span
                                style={{
                                  ...tableStyles.badge,
                                  ...(user.payment === "Paid"
                                    ? tableStyles.paidStatus
                                    : tableStyles.unpaidStatus),
                                }}
                              >
                                {user.payment}
                              </span>
                            </td>
                            <td style={tableStyles.td}>
                              <span
                                style={{
                                  ...tableStyles.badge,
                                  ...(user.planType === "Premium"
                                    ? tableStyles.premiumBadge
                                    : tableStyles.basicBadge),
                                }}
                              >
                                {user.planType}
                              </span>
                            </td>
                            <td style={tableStyles.td}>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  style={tableStyles.dropdownButton}
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
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan="9"
                          style={{ ...tableStyles.td, textAlign: "center" }}
                        >
                          <div className="p-4">
                            <i className="fa fa-search fa-2x text-muted mb-3"></i>
                            <h5>No users found</h5>
                            <p className="text-muted">
                              Try adjusting your search or filter criteria
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-4">
                <Pagination />
              </div>
            )}
          </div>
        </div>
      </div>
    </NewLayout>
  );
};

export default AdminAllUsersList;
