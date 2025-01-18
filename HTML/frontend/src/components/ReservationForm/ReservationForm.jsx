import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="reservation-form-container">
      <form className="reservation-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        {/* Group Size Input */}
        <div className="form-group">
          <label htmlFor="groupSize">Size of Group</label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleInputChange}
            required
          >
            <option value="">Select group size</option>
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
            <option value="7">7 people</option>
            <option value="8">8 people</option>
            <option value="more">More than 8 (Please call us)</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;