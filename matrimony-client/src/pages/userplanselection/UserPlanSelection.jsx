import React, { useEffect, useState } from "react";
import LayoutComponent from "../../components/layouts/LayoutComponent";
import Footer from "../../components/Footer";
import CopyRights from "../../components/CopyRights";
import {
  getAllPlanDetails,
  sendPaymentData,
} from "../../api/axiosService/userAuthService";

const UserPlanSelection = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPlanDetails();
        if (response.status === 200) {
          setPlans(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check if user is logged in
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }

    fetchData();
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Function to send payment data to backend
  const sendPaymentDataToBackend = async (paymentData, userId) => {
    try {
      const response = await sendPaymentData(paymentData, userId);

      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      console.error("Error sending payment data to backend:", error);
      throw error;
    }
  };

  const handlePayment = async (plan) => {
    if (!userId) {
      alert("Please login to purchase a plan");
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Please try again.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: plan.price * 100,
      currency: "INR",
      name: "AgapeVows",
      description: `${plan.name} Plan Subscription`,
      handler: async function (response) {
        try {
          const paymentData = {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            userId: userId,
            planId: plan._id,
            planName: plan.name,
            amount: plan.price,
            currency: "INR",
            paymentStatus: "success",
            paymentMethod: "razorpay",
            timestamp: new Date().toISOString(),
            planDetails: {
              name: plan.name,
              price: plan.price,
              priceType: plan.priceType,
              maxProfiles: plan.maxProfiles,
              profilesType: plan.profilesType,
              canViewProfiles: plan.canViewProfiles,
              viewContactDetails: plan.viewContactDetails,
              sendInterestRequest: plan.sendInterestRequest,
              startChat: plan.startChat,
            },
          };

          console.log("Payment Success Data:", paymentData);

          // Send data to backend
          const backendResponse = await sendPaymentDataToBackend(
            paymentData,
            userId
          );

          if (backendResponse) {
            alert("Payment Successful! Your plan has been activated.");
            // Optionally redirect to dashboard or plans page
            window.location.href = "/";
          } else {
            alert(
              "Payment received but there was an issue activating your plan. Please contact support."
            );
          }
        } catch (error) {
          console.error("Error processing payment:", error);
          alert(
            "Payment was successful but there was an issue processing it. Please contact support with your payment ID: " +
              response.razorpay_payment_id
          );
        }
      },
      modal: {
        ondismiss: function () {
          console.log("Payment modal closed");
        },
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#a020f0",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      alert(`Payment failed: ${response.error.description}`);
    });

    rzp.open();
  };

  const renderFeatureIcon = (hasFeature) => {
    if (
      hasFeature === "Yes" ||
      hasFeature === "All Profiles" ||
      hasFeature === "Only Basic" ||
      hasFeature === "Only Gold" ||
      hasFeature === "Only Platinum"
    ) {
      return <i className="fa fa-check" aria-hidden="true" />;
    }
    return <i className="fa fa-close close" aria-hidden="true" />;
  };

  const getFeatureText = (plan, featureType) => {
    switch (featureType) {
      case "profiles":
        return `${plan.maxProfiles} Premium Profiles view /${
          plan.profilesType === "Per month" ? "mo" : "day"
        }`;
      case "viewProfiles":
        return `${plan.canViewProfiles} user profile can view`;
      case "contactDetails":
        return "View contact details";
      case "sendInterest":
        return "Send interest";
      case "startChat":
        return "Start Chat";
      default:
        return "";
    }
  };

  if (loading) {
    return (
      <>
        <LayoutComponent />
        <section>
          <div className="plans-ban">
            <div className="container">
              <div className="row">
                <h1>Loading plans...</h1>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <CopyRights />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      <div className="pt-16">
        <div className="plans-ban">
          <div className="container">
            <div className="row">
              <span className="pri">Pricing</span>
              <h1>
                Get Started <br /> Pick your Plan Now
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <span className="nocre">No credit card required</span>
            </div>
          </div>
        </div>
      </div>
      {/* END */}
      {/* PRICING PLANS */}
      <section>
        <div className="plans-main" style={{ padding: "40px 0" }}>
          <div className="container mx-auto px-4">
            <div
              className="flex flex-wrap justify-center"
              style={{ gap: "30px" }}
            >
              {plans.map((plan, index) => (
                <div
                  key={plan._id}
                  className="plan-wrapper"
                  style={{
                    flex: "0 0 auto",
                    width: "100%",
                    maxWidth: "320px",
                    minWidth: "280px",
                    margin: "15px",
                    "@media (min-width: 768px)": {
                      width: "calc(50% - 30px)",
                    },
                    "@media (min-width: 1024px)": {
                      width: "calc(33.333% - 30px)",
                    },
                    "@media (min-width: 1280px)": {
                      width: "calc(25% - 30px)",
                    },
                  }}
                >
                  <div
                    className={`pri-box ${
                      plan.name === "Gold" ? "pri-box-pop" : ""
                    }`}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {plan.name === "Gold" && (
                      <span className="pop-pln">Most popular plan</span>
                    )}
                    <h2>{plan.name}</h2>
                    <p>Printer took a type and scrambled </p>
                    <a
                      href="#"
                      className="cta"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePayment(plan);
                      }}
                    >
                      Get Started
                    </a>
                    <span className="pri-cou">
                      <b>₹{plan.price}</b>/
                      {plan.priceType === "Per month" ? "mo" : "yr"}
                    </span>
                    <ol>
                      <li>
                        {renderFeatureIcon(plan.maxProfiles > 0 ? "Yes" : "No")}
                        {getFeatureText(plan, "profiles")}
                      </li>
                      <li>
                        {renderFeatureIcon(plan.canViewProfiles)}
                        {getFeatureText(plan, "viewProfiles")}
                      </li>
                      <li>
                        {renderFeatureIcon(plan.viewContactDetails)}
                        {getFeatureText(plan, "contactDetails")}
                      </li>
                      <li>
                        {renderFeatureIcon(plan.sendInterestRequest)}
                        {getFeatureText(plan, "sendInterest")}
                      </li>
                      <li>
                        {renderFeatureIcon(plan.startChat)}
                        {getFeatureText(plan, "startChat")}
                      </li>
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CopyRights />
    </div>
  );
};

export default UserPlanSelection;
