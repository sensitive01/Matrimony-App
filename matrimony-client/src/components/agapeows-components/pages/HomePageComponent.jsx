import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import MainLayout from "../layout/MainLayout";
import QuickAccess from "../../QuickAccess";
import TrustBrands from "../../TrustBrands";
import WhyChooseUs from "../../WhyChooseUs";
import WelcomeTo from "../../WelcomeTo";
import CountModal from "../../CountModal";
import Moments from "../../Moments";
import RecentCouples from "../../RecentCouples";
import OurProfessionals from "../../OurProfessionals";
import GallaryStart from "../../GallaryStart";
import BlogPostStart from "../../BlogPostStart";
import FindYourPerfectMatchNow from "../../FindYourPerfectMatchNow";
import Footer from "../../Footer";
import CopyRights from "../../CopyRights";

// Hide scrollbar CSS
const scrollbarStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  html {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Communities data
const communities = [
  "Adventist",
  "AG (Assemblies of God)",
  "ACI (Anglican Church of India)",
  "Apostolic",
  "Assyrian",
  "Baptist",
  "Basel Mission",
  "Brethren",
  "Calvinist",
  "Cannonite",
  "Chaldean Syrian",
  "Cheramar",
  "Church of Christ",
  "Church of God",
  "CNI (Church of North India)",
  "Congregational",
  "CSI (Church of South India)",
  "Evangelical",
  "Indian Orthodox Christian",
  "IPC (Indian Pentecostal Church of God)",
  "Jewish",
  "Knanaya Catholic",
  "Knanaya Jacobite",
  "Knanaya Pentecostal",
  "Latin Catholic",
  "Latter Day Saints",
  "Lutheran",
  "Malabar Independent Syrian Church",
  "Malankara Catholic",
  "Malankara Mar Thoma (Marthoma)",
  "Melkite",
  "Mennonite",
  "Methodist",
  "Moravian",
  "Nadar Christian",
  "New Life Fellowship",
  "Orthodox",
  "Pentecost",
  "Presbyterian",
  "Protestant",
  "RC Anglo Indian",
  "Roman Catholic",
  "Salvation Army",
  "Seventh Day Adventist",
  "Syrian Catholic",
  "Syrian Orthodox",
  "Syro Malabar",
];

// States data
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

// Search dropdown component
const SearchDropdown = ({
  placeholder,
  options,
  value,
  onChange,
  searchTerm,
  onSearchChange,
  showDropdown,
  onToggleDropdown,
}) => {
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="flex">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => onToggleDropdown(true)}
          className="w-full bg-white text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="button"
          onClick={() => onToggleDropdown(!showDropdown)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {showDropdown && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  onChange(option);
                  onSearchChange(option);
                  onToggleDropdown(false);
                }}
                className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    lookingFor: "Groom",
    age: 28,
    community: "",
    city: "",
  });

  // Search states
  const [communitySearch, setCommunitySearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");
  const [showCommunityDropdown, setShowCommunityDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ];

  // Auto-change background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-dropdown")) {
        setShowCommunityDropdown(false);
        setShowStateDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("lookingFor:", formData.lookingFor);
    console.log("age:", formData.age);
    console.log("community:", formData.community);
    console.log("city:", formData.city);

    // Navigate to search results page with form data
    navigate("/show-searched-result", { state: { formData: formData } });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-orange-800">
      {/* Background Images with Transition */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentBgIndex ? "opacity-30" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Hero Text */}
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gray-300">#1</span> MATRIMONY
            </h1>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
              Find your
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-purple-400">Right Match</span>{" "}
              <span className="text-white">here</span>
            </h2>

            <p className="text-white text-lg md:text-xl mb-12">
              Most trusted Matrimony Brand in the World.
            </p>
          </div>

          {/* Right Side - Search Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-md w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Gender Selection */}
              <label className="block text-white text-sm font-medium mb-2">
                Looking For
              </label>
              <select
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.lookingFor}
                onChange={(e) =>
                  handleInputChange("lookingFor", e.target.value)
                }
              >
                <option value="Groom">Groom</option>
                <option value="Bride">Bride</option>
              </select>

              {/* Age Slider */}
              <div className="relative">
                <label className="block text-white text-sm font-medium mb-2">
                  Age: {formData.age}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="18"
                    max="70"
                    value={formData.age}
                    onChange={(e) =>
                      handleInputChange("age", parseInt(e.target.value))
                    }
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #9333ea 0%, #9333ea ${
                        ((formData.age - 18) / (70 - 18)) * 100
                      }%, #e5e7eb ${
                        ((formData.age - 18) / (70 - 18)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                  {/* Tooltip */}
                  <div
                    className="absolute -top-10 bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
                    style={{
                      left: `${((formData.age - 18) / (70 - 18)) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {formData.age}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                <style jsx>{`
                  .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #9333ea;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                  .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #9333ea;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                `}</style>
              </div>

              {/* Community Search Dropdown */}
              <div className="search-dropdown">
                <label className="block text-white text-sm font-medium mb-2">
                  Community
                </label>
                <SearchDropdown
                  placeholder="Choose your Christian Community"
                  options={communities}
                  value={formData.community}
                  onChange={(value) => handleInputChange("community", value)}
                  searchTerm={communitySearch}
                  onSearchChange={setCommunitySearch}
                  showDropdown={showCommunityDropdown}
                  onToggleDropdown={setShowCommunityDropdown}
                />
              </div>

              {/* State Search Dropdown */}
              <div className="search-dropdown">
                <label className="block text-white text-sm font-medium mb-2">
                  Location
                </label>
                <SearchDropdown
                  placeholder="Select State"
                  options={states}
                  value={formData.city}
                  onChange={(value) => handleInputChange("city", value)}
                  searchTerm={stateSearch}
                  onSearchChange={setStateSearch}
                  showDropdown={showStateDropdown}
                  onToggleDropdown={setShowStateDropdown}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const HomePageComponent = () => {
  return (
    <div className="min-h-screen">
      {/* Add the scrollbar hiding styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      <div className="fixed top-0 left-0 right-0 z-50">
        <MainLayout />
      </div>
      <div className="pt-16">
        <HeroSection />
        <QuickAccess />
        <TrustBrands />
        <WhyChooseUs />
        <WelcomeTo />
        <CountModal />
        <Moments />
        <RecentCouples />
        <OurProfessionals />
        <GallaryStart />
        <BlogPostStart />
        <FindYourPerfectMatchNow />
        <Footer />
        <CopyRights />
      </div>
    </div>
  );
};

export default HomePageComponent;
