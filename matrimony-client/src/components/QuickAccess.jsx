import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userIcon from "../assets/images/icon/user.png"
import gateIcon from "../assets/images/icon/gate.png";
import coupleIcon from "../assets/images/icon/couple.png";
import hallIcon from "../assets/images/icon/hall.png";
import cameraIcon from "../assets/images/icon/photo-camera.png";
import cakeIcon from "../assets/images/icon/cake.png";

const QuickAccess = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  
  // Service items data with original structure
  const services = [
    {
      icon: userIcon,
      title: "Browse Profiles",
      subtitle: "120+ Profilessss",
      link: "/user/show-all-profiles",
      linkText: "View more",
      className: "hacc1",
      delay: "0.1s"
    },
    {
      icon: gateIcon,
      title: "Wedding",
      subtitle: "1200+ Profiles",
      link: "#",
      linkText: "View more",
      className: "hacc2",
      delay: "0.2s"
    },
    {
      icon: coupleIcon,
      title: "All Services",
      subtitle: "1200+ Profiles",
      link: "#",
      linkText: "View more",
      className: "hacc3",
      delay: "0.3s"
    },
    {
      icon: hallIcon,
      title: "Join Now",
      subtitle: "Start for free",
      link: "#",
      linkText: "Get started",
      className: "hacc4",
      delay: "0.4s"
    },
    {
      icon: cameraIcon,
      title: "Photo gallery",
      subtitle: "1200+ Profiles",
      link: "#",
      linkText: "View more",
      className: "hacc3",
      delay: "0.3s"
    },
    {
      icon: cakeIcon,
      title: "Blog &amp; Articles",
      subtitle: "Start for free",
      link: "#",
      linkText: "Get started",
      className: "hacc4",
      delay: "0.4s"
    }
  ];

  // Calculate responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section>
      <div className="str home-acces-main">
        <div className="container">
          <div className="row">
            {/* BACKGROUND SHAPE */}
            <div className="wedd-shap">
              <span className="abo-shap-1" />
              <span className="abo-shap-4" />
            </div>
            {/* END BACKGROUND SHAPE */}
            <div className="home-tit">
              <p style={{color:"white"}} >Quick Access</p>
              <h2>
                <span>Our Services</span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
            <div className="home-acces">
              {/* Navigation Arrows - Only added styles for positioning */}
              <button 
                onClick={prevSlide}
                className="slider-nav-btn slider-prev"
                style={{
                  position: 'absolute',
                  left: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '24px'
                }}
              >
                <ChevronLeft size={30} />
              </button>

              <button 
                onClick={nextSlide}
                className="slider-nav-btn slider-next"
                style={{
                  position: 'absolute',
                  right: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '24px'
                }}
              >
                <ChevronRight size={30} />
              </button>

              {/* Slider Container - Only added transform for sliding */}
              <div className="slider-container" style={{ overflow: 'hidden' }}>
                <ul 
                  className="hom-qui-acc-sli" 
                  style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                  }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="slide-group" style={{ 
                      display: 'flex', 
                      minWidth: '100%'
                    }}>
                      {services
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((service, index) => (
                          <li key={slideIndex * itemsPerSlide + index} style={{ 
                            flex: `0 0 ${100 / itemsPerSlide}%`
                          }}>
                            <div
                              className={`wow fadeInUp hacc ${service.className}`}
                              data-wow-delay={service.delay}
                            >
                              <div className="con">
                                <img src={service.icon} alt="" loading="lazy" />
                                <h4>{service.title}</h4>
                                <p>{service.subtitle}</p>
                                <a href={service.link}>{service.linkText}</a>
                              </div>
                            </div>
                          </li>
                        ))}
                    </div>
                  ))}
                </ul>
              </div>

              {/* Pagination Dots */}
              <div className="slider-dots" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '30px',
                gap: '10px'
              }}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                    style={{
                      width: currentSlide === index ? '30px' : '12px',
                      height: '12px',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentSlide === index ? '#D4AF37' : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;