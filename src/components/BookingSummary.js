// src/components/BookingSummary.js

import React from 'react';

const BookingSummary = ({ bookingDetails, onConfirm }) => {
  const { facilityName, dateTime, duration, amount } = bookingDetails;

  return (
    <div className="booking-summary">
      <h3>Booking Summary</h3>
      <p><strong>Facility:</strong> {facilityName}</p>
      <p><strong>Date and Time:</strong> {new Date(dateTime).toLocaleString()}</p>
      <p><strong>Duration:</strong> {duration} hours</p>
      <p><strong>Amount to Pay:</strong> ₹{amount}</p>

      <button onClick={onConfirm}>Confirm and Proceed to Payment</button>
    </div>
  );
};

export default BookingSummary;
