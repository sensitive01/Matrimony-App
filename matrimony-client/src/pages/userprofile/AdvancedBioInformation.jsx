import React from "react";

const AdvancedBioInformation = ({formData,handleInputChange}) => {
  return (
    <div className="edit-pro-parti">
      <div className="form-tit">
        <h4>Basic info</h4>
        <h1>Advanced bio</h1>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <label className="lb">Gender:</label>
          <select
            className="form-select chosen-select"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <label className="lb">City:</label>
          <select
            className="form-select chosen-select"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Select your City</option>
            <option value="Chennai">Chennai</option>
            <option value="Newyork">Newyork</option>
            <option value="London">London</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <label className="lb">Date of birth:</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="lb">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <label className="lb">Height:</label>
          <input
            type="text"
            className="form-control"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="lb">Weight:</label>
          <input
            type="text"
            className="form-control"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <label className="lb">Fathers name:</label>
          <input
            type="text"
            className="form-control"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <label className="lb">Mothers name:</label>
          <input
            type="text"
            className="form-control"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="lb">Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AdvancedBioInformation;
