import React, { useState, useEffect } from 'react';
import './DT.css';

const DT = ({ onDateTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  // Generate time slots between start and end time
  useEffect(() => {
    const generateTimeSlots = () => {
      const times = [];
      const startHour = 11; // 11 AM
      const endHour = 23; // 9 PM
      
      for (let hour = startHour; hour <= endHour; hour++) {
        // Add both :00 and :30 time slots
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        if (hour !== endHour) { // Don't add :30 for the last hour
          times.push(`${hour.toString().padStart(2, '0')}:30`);
        }
      }
      
      setAvailableTimes(times);
    };

    generateTimeSlots();
  }, []);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Get max date (6 months from today)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6);
    return maxDate.toISOString().split('T')[0];
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onDateTimeSelect({ date: e.target.value, time: selectedTime });
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    onDateTimeSelect({ date: selectedDate, time: e.target.value });
  };

  // Convert 24h to 12h format
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Get day of week
  const getDayOfWeek = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className="datetime-picker">
      <div className="date-picker-container">
        <label className="datetime-label">Select Date</label>
        <div className="date-input-container">
          <input
            type="date"
            value={selectedDate}
            min={today}
            max={getMaxDate()}
            onChange={handleDateChange}
            className="date-input"
          />
          {selectedDate && (
            <span className="selected-day">{getDayOfWeek(selectedDate)}</span>
          )}
        </div>
      </div>

      <div className="time-picker-container">
        <label className="datetime-label">Select Time</label>
        <div className="time-slots">
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeChange({ target: { value: time } })}
              className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
            >
              {formatTime(time)}
            </button>
          ))}
        </div>
      </div>

      <div className="selected-datetime">
        {selectedDate && selectedTime && (
          <p>Selected: {new Date(selectedDate).toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })} at {formatTime(selectedTime)}</p>
        )}
      </div>
    </div>
  );
};

export default DT;