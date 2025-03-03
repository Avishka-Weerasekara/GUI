import React, { useState } from 'react';
import './Reservation.css';
import DT from '../../components/Date and time/DT';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import axios from 'axios';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    date: '',
    time: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDateTimeSelect = (dateTime) => {
    console.log("Received DateTime:", dateTime); // Add this for debugging
    setFormData(prev => ({
      ...prev,
      date: dateTime.date,
      time: dateTime.time,
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data before submission:", formData); // Add this line for debugging
    if (!formData.name || !formData.email || !formData.phone || !formData.groupSize || !formData.date || !formData.time) {
      setError("All fields are required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ""))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4001/api/reserve/add", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        groupSize: formData.groupSize,
        date: formData.date,
        time: formData.time,
      });
      setMessage("Reservation successful! We’ll confirm soon.");
      setError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        groupSize: "",
        date: "",
        time: "",
      });
      console.log("Reservation saved:", response.data);
    } catch (err) {
      setError("Error making reservation. Please try again. " + (err.response?.data?.error || err.message));
      setMessage("");
      console.error("Submission error:", err);
    }
  };

  return (
    <div>
      <div className="main-content-res">
        <div className="re-content">
          <h1>Reservation</h1>
          <DT onDateTimeSelect={handleDateTimeSelect} />
          <ReservationForm
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
            message={message}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;