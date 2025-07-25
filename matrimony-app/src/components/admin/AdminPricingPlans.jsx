import React, { useEffect, useState } from "react";
import NewLayout from "./layout/NewLayout";
import {
  addNewPlanData,
  changePlanStatus,
  editPlanData,
  getAllPlanData,
} from "../../api/service/adminServices";

const AdminPricingPlans = () => {
  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [currentPlan, setCurrentPlan] = useState({
    id: null,
    name: "",
    price: "",
    priceType: "",
    maxProfiles: "",
    profilesType: "",
    canViewProfiles: "",
    viewContactDetails: "",
    sendInterestRequest: "",
    startChat: "",
    status: "Active",
  });
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPlanData();
      if (response.status === 200) {
        setPlans(response.data.data);
      }
    };
    fetchData();
  }, []);

  const handleAddNewPlan = () => {
    setModalMode("add");
    setCurrentPlan({
      id: null,
      name: "",
      price: "",
      priceType: "",
      maxProfiles: "",
      profilesType: "",
      canViewProfiles: "",
      viewContactDetails: "",
      sendInterestRequest: "",
      startChat: "",
      status: "Active",
    });
  };

  const handleEditPlan = (plan) => {
    setModalMode("edit");
    setCurrentPlan(plan);
  };

  const handleSubmitPlan = async (e) => {
    e.preventDefault();

    if (!currentPlan.name || !currentPlan.price) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      if (modalMode === "add") {
        // Add new plan API call
        const response = await addNewPlanData(currentPlan);

        if (response.status === 201) {
          const newPlan = response.data.data;
          setPlans([...plans, newPlan]);
          alert("Plan added successfully!");
        } else {
          throw new Error("Failed to add plan");
        }
      } else {
        const response = await editPlanData(currentPlan.id, currentPlan);

        if (response.status == 200) {
          const updatedPlan = response.data.data;
          setPlans(
            plans.map((plan) =>
              plan._id === currentPlan.id ? { ...plan, ...updatedPlan } : plan
            )
          );
          alert("Plan updated successfully!");
        } else {
          throw new Error("Failed to update plan");
        }
      }

      // Close modal using Bootstrap 5 method
      const modal = document.getElementById("pricing");
      const bootstrapModal = window.bootstrap?.Modal?.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      } else {
        // Fallback method
        modal?.setAttribute("data-bs-dismiss", "modal");
        modal?.click();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the plan");
    } finally {
      setLoading(false);
    }
  };

  const togglePlanStatus = async (planId, currentStatus) => {
    console.log(currentStatus)
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";

    try {
      const response = await changePlanStatus(planId, newStatus);

      if (response.status === 200) {
        setPlans(
          plans.map((plan) =>
            plan._id === planId ? { ...plan, status: newStatus } : plan
          )
        );
        alert(`Plan ${newStatus.toLowerCase()} successfully!`);
      } else {
        throw new Error("Failed to update plan status");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating plan status");
    }
  };

  return (
    <>
      <style jsx>{`
        .pan-rhs::-webkit-scrollbar {
          display: none !important;
        }
        .modal-body {
          max-height: 70vh;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal-body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <NewLayout>
        <div
          className="pan-rhs"
          style={{
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="row main-head">
            <div className="col-md-4">
              <div className="tit">
                <h1>Pricing details</h1>
              </div>
            </div>
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payments
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pricing
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="box-com box-qui box-lig box-tab">
                <div
                  className="tit"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>All pricing plans</h3>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#pricing"
                    onClick={handleAddNewPlan}
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i> Add New
                    Plan
                  </button>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Plan name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans.map((plan, index) => (
                      <tr key={plan._id}>
                        <td>{index + 1}</td>
                        <td>
                          <span className="hig-blu">{plan.name}</span>
                        </td>
                        <td>
                          <span className="hig-red">
                            {typeof plan.price === "number"
                              ? ` ₹${plan.price}`
                              : plan.price}
                          </span>
                        </td>
                        <td>
                          <span
                            className={
                              plan.status === "Active" ? "hig-grn" : "hig-red"
                            }
                          >
                            {plan.status}
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
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#pricing"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleEditPlan({
                                      id: plan._id,
                                      name: plan.name,
                                      price: plan.price.toString(),
                                      priceType: plan.priceType || "Per month",
                                      maxProfiles:
                                        plan.maxProfiles?.toString() || "",
                                      profilesType:
                                        plan.profilesType || "Per day",
                                      canViewProfiles:
                                        plan.canViewProfiles || "",
                                      viewContactDetails:
                                        plan.viewContactDetails || "",
                                      sendInterestRequest:
                                        plan.sendInterestRequest || "",
                                      startChat: plan.startChat || "",
                                      status: plan.status,
                                    });
                                  }}
                                >
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    togglePlanStatus(plan._id, plan.status);
                                  }}
                                >
                                  {plan.status === "Active"
                                    ? "Disable"
                                    : "Enable"}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="../plans.html"
                                  target="_blank"
                                >
                                  View pricing page
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
            </div>
          </div>

          {/* Enhanced Modal for Add/Edit Plan */}
          <div className="modal fade" id="pricing">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">
                    {modalMode === "add" ? "Add New Plan" : "Edit Plan"}
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  />
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="form-inp">
                    <form onSubmit={handleSubmitPlan}>
                      {/*PROFILE BIO*/}
                      <div className="edit-pro-parti">
                        <div className="form-group">
                          <label className="lb">Plan name:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.name}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                name: e.target.value,
                              })
                            }
                          >
                            <option value="">Select Plan</option>
                            <option value="Basic">Basic</option>
                            <option value="Gold">Gold</option>
                            <option value="Platinum">Platinum</option>
                          </select>
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label className="lb">Price:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter price"
                                value={currentPlan.price}
                                onChange={(e) =>
                                  setCurrentPlan({
                                    ...currentPlan,
                                    price: e.target.value,
                                  })
                                }
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="lb">&nbsp;</label>
                              <select
                                name=""
                                required="required"
                                className="form-control chosen-select"
                                value={currentPlan.priceType}
                                onChange={(e) =>
                                  setCurrentPlan({
                                    ...currentPlan,
                                    priceType: e.target.value,
                                  })
                                }
                              >
                                <option value="">Select</option>
                                <option value="Per day">Per day</option>
                                <option value="Per month">Per month</option>
                                <option value="Per Year">Per Year</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-group">
                              <label className="lb">Max profiles view:</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter number"
                                value={currentPlan.maxProfiles}
                                onChange={(e) =>
                                  setCurrentPlan({
                                    ...currentPlan,
                                    maxProfiles: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="lb">&nbsp;</label>
                              <select
                                name=""
                                required="required"
                                className="form-control chosen-select"
                                value={currentPlan.profilesType}
                                onChange={(e) =>
                                  setCurrentPlan({
                                    ...currentPlan,
                                    profilesType: e.target.value,
                                  })
                                }
                              >
                                <option value="">Select</option>
                                <option value="Per day">Per day</option>
                                <option value="Per month">Per month</option>
                                <option value="Per Year">Per Year</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="lb">Can able to view:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.canViewProfiles}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                canViewProfiles: e.target.value,
                              })
                            }
                          >
                            <option value="">Select</option>
                            <option value="All Profiles">All Profiles</option>
                            <option value="Only Basic">Only Basic</option>
                            <option value="Only Gold">Only Gold</option>
                            <option value="Only Platinum">Only Platinum</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">View contact details:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.viewContactDetails}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                viewContactDetails: e.target.value,
                              })
                            }
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Send interest request:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.sendInterestRequest}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                sendInterestRequest: e.target.value,
                              })
                            }
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Start Chat:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.startChat}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                startChat: e.target.value,
                              })
                            }
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="lb">Status:</label>
                          <select
                            name=""
                            required="required"
                            className="form-control chosen-select"
                            value={currentPlan.status}
                            onChange={(e) =>
                              setCurrentPlan({
                                ...currentPlan,
                                status: e.target.value,
                              })
                            }
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                      {/*END PROFILE BIO*/}
                    </form>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="cta-full cta-colr"
                    disabled={loading}
                    onClick={handleSubmitPlan}
                  >
                    {loading
                      ? "Saving..."
                      : modalMode === "add"
                      ? "Add Plan"
                      : "Update Plan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NewLayout>
    </>
  );
};

export default AdminPricingPlans;
