// src/components/DateTimePicker.js

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const DateTimePicker = ({ selectedFacility, onDateTimeSelect }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    if (selectedFacility) {
      fetchAvailableSlots();
    }
  }, [selectedFacility]);

  const fetchAvailableSlots = async () => {
    try {
      const response = await axios.get(`/api/booking/availability/${selectedFacility}`);
      setAvailableSlots(response.data.availableSlots);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const isSlotAvailable = (date) => {
    const selected = date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
    return availableSlots.includes(selected);
  };

  return (
    <div>
      <h3>Select Date & Time</h3>
      <DatePicker
        selected={selectedDateTime}
        onChange={(date) => {
          setSelectedDateTime(date);
          onDateTimeSelect(date);
        }}
        showTimeSelect
        timeIntervals={30}
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 30))} // 30 days in advance
        filterDate={(date) => isSlotAvailable(date)}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select an available slot"
      />
    </div>
  );
};

export default DateTimePicker;
