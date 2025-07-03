import React from "react";

const PopUpSearch = () => {
  return (
    <>
      <div className="pop-search">
        <span className="ser-clo">+</span>
        <div className="inn">
          <form>
            <input type="text" placeholder="Search here..." />
          </form>
          <div className="rel-sear">
            <h4>Top searches:</h4>
            <a href="/user/show-all-profiles">Browse all profiles</a>
            <a href="/user/show-all-profiles">Mens profile</a>
            <a href="/user/show-all-profiles">Female profile</a>
            <a href="/user/show-all-profiles">New profiles</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpSearch;
