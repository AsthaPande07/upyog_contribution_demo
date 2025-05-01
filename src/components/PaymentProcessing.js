// src/components/PaymentProcessing.js

import React from 'react';
import axios from 'axios';

const PaymentProcessing = ({ bookingDetails, onPaymentSuccess }) => {

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payment/initiate', bookingDetails);

      const { paymentUrl } = response.data;
      window.location.href = paymentUrl; // Redirect to payment gateway

      // In real apps, use proper SDKs for Razorpay, Stripe instead of direct redirect
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      <h3>Proceed to Payment</h3>
      <button onClick={handlePayment}>Pay ₹{bookingDetails.amount}</button>
    </div>
  );
};

export default PaymentProcessing;
