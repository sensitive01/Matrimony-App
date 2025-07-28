import React, { useState, useEffect } from "react";

const TrustBrands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mock user images - replace with your actual images
  const users = [
    {
      id: 1,
      name: "Jack Daniel",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Los Angeles",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mike Wilson",
      location: "Chicago",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Emily Davis",
      location: "Miami",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "David Brown",
      location: "Seattle",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % users.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isMobile, users.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % users.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + users.length) % users.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const styles = {
    section: {
      padding: "4rem 0",
      backgroundColor: "#f9fafb",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
      marginTop: "5rem",
    },
    subtitle: {
      color: "black",
      fontSize: "40px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "0.5rem",
      marginTop: "3rem",
      fontFamily: "Cinzel Decorative",
    },
    title: {
      fontSize: "clamp(1.875rem, 4vw, 3rem)",
      fontWeight: "bold",
      color: "#a020f0",
      marginBottom: "1rem",
    },
    highlight: {
      color: "#a020f0",
      fontWeight: "800",
    },
    divider: {
      width: "6rem",
      height: "4px",
      backgroundColor: "#a020f0",
      margin: "0 auto",
      borderRadius: "2px",
    },
    desktopGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    mobileSlider: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "1rem",
    },
    slideContainer: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${currentSlide * 100}%)`,
    },
    slide: {
      width: "100%",
      flexShrink: 0,
      padding: "0 1rem",
    },
    reviewCard: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: "box-shadow 0.3s ease",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1.5rem",
      position: "relative",
    },
    profileImage: {
      width: "5rem",
      height: "5rem",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #e5e7eb",
    },
    verifiedBadge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      width: "1.5rem",
      height: "1.5rem",
      backgroundColor: "#a020f0",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    reviewText: {
      color: "#6b7280",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
      textAlign: "center",
      fontSize: "0.875rem",
    },
    reviewerName: {
      color: "#a020f0",
      fontWeight: "600",
      textAlign: "center",
      fontSize: "1.125rem",
      marginBottom: "0.25rem",
    },
    reviewerLocation: {
      color: "#9ca3af",
      textAlign: "center",
      fontSize: "0.875rem",
    },
    navigation: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "1.5rem",
      gap: "1rem",
    },
    navButton: {
      padding: "0.5rem",
      borderRadius: "50%",
      backgroundColor: "white",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    dots: {
      display: "flex",
      gap: "0.5rem",
    },
    dot: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    ctaContainer: {
      textAlign: "center",
      marginTop: "3rem",
    },
    ctaButton: {
      backgroundColor: "#a020f0",
      color: "white",
      fontWeight: "600",
      padding: "1rem 2rem",
      borderRadius: "2rem",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header} className="home-tit">
          <p style={styles.subtitle}>Trusted Brand</p>
          <h2 style={styles.title}>
            Trust by <span style={styles.highlight}>1500</span>+ Couples
          </h2>
          <div style={styles.divider}></div>
        </div>

        {/* Reviews Container */}
        <div>
          {/* Desktop View - Grid Layout */}
          {!isMobile ? (
            <div style={styles.desktopGrid}>
              {users.map((user) => (
                <div key={user.id} style={styles.reviewCard}>
                  <div style={styles.imageContainer}>
                    <img
                      src={user.image}
                      alt={user.name}
                      style={styles.profileImage}
                      loading="lazy"
                    />
                    <div style={styles.verifiedBadge}>
                      <svg
                        width="12"
                        height="12"
                        fill="white"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p style={styles.reviewText}>
                    "Amazing experience! The service exceeded our expectations
                    and made our special day even more memorable. Highly
                    recommend to all couples!"
                  </p>
                  <h5 style={styles.reviewerName}>{user.name}</h5>
                  <span style={styles.reviewerLocation}>{user.location}</span>
                </div>
              ))}
            </div>
          ) : (
            /* Mobile View - Slider */
            <div>
              <div style={styles.mobileSlider}>
                <div style={styles.slideContainer}>
                  {users.map((user) => (
                    <div key={user.id} style={styles.slide}>
                      <div style={styles.reviewCard}>
                        <div style={styles.imageContainer}>
                          <img
                            src={user.image}
                            alt={user.name}
                            style={{
                              ...styles.profileImage,
                              width: "6rem",
                              height: "6rem",
                            }}
                            loading="lazy"
                          />
                          <div
                            style={{
                              ...styles.verifiedBadge,
                              width: "2rem",
                              height: "2rem",
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              fill="white"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <p style={styles.reviewText}>
                          "Amazing experience! The service exceeded our
                          expectations and made our special day even more
                          memorable. Highly recommend to all couples!"
                        </p>
                        <h5
                          style={{
                            ...styles.reviewerName,
                            fontSize: "1.25rem",
                          }}
                        >
                          {user.name}
                        </h5>
                        <span style={styles.reviewerLocation}>
                          {user.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div style={styles.navigation}>
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  style={styles.navButton}
                  onMouseEnter={(e) =>
                    (e.target.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.boxShadow =
                      "0 1px 3px 0 rgba(0, 0, 0, 0.1)")
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a020f0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div style={styles.dots}>
                  {users.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      style={{
                        ...styles.dot,
                        backgroundColor:
                          index === currentSlide ? "#a020f0" : "#d1d5db",
                        transform:
                          index === currentSlide ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  style={styles.navButton}
                  onMouseEnter={(e) =>
                    (e.target.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.boxShadow =
                      "0 1px 3px 0 rgba(0, 0, 0, 0.1)")
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#a020f0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div style={styles.ctaContainer}>
          <button
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#8b1fa3";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#a020f0";
              e.target.style.transform = "scale(1)";
            }}
          >
            More Customer Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustBrands;
