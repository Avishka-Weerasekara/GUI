import React from 'react';
import './ReservationForm.css';

const ReservationForm = ({ formData, onChange, onSubmit, message, error }) => {
  return (
    <div className="reservation-form-container">
      <form onSubmit={onSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            placeholder="Enter your phone number (e.g., 1234567890)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="groupSize">Size of Group</label>
          <select
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={onChange}
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

        <div className="form-group">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date ? new Date(formData.date).toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : ''}
            readOnly
            placeholder="Select date above"
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time ? (parseInt(formData.time.split(':')[0]) >= 12 
              ? `${(parseInt(formData.time.split(':')[0]) - 12) || 12}:${formData.time.split(':')[1]} PM`
              : `${formData.time} AM`) : ''}
            readOnly
            placeholder="Select time above"
          />
        </div>

        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <button type="submit" className="btn-reserve">Reserve Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;