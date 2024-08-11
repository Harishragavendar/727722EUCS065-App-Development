import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s+/g, ''); // Remove spaces
    const formattedValue = value.replace(/\D/g, '').slice(0, 16); // Allow up to 16 digits
    setCardNumber(formattedValue);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/\D/g, '').slice(0, 4); // Allow MMYY format
    setExpiryDate(formattedValue);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/\D/g, '').slice(0, 3); // Allow up to 3 digits
    setCvv(formattedValue);
  };

  const formatCardNumber = (number) => {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ').trim(); // Add spaces after every 4 digits
  };

  const formatExpiryDate = (date) => {
    if (date.length <= 2) return date; // MM
    return date.slice(0, 2) + '/' + date.slice(2); // MM/YY
  };

  const handlePayNow = () => {
    // Simulate a payment process
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1000); // Simulate a delay
  };

  return (
    <div className="payment-main-container">
      <div className="payment-container">
        <div className="card-preview">
          <div className="card-display">
            <div className="card-number">{formatCardNumber(cardNumber) || 'Card Number'}</div>
            <div className="card-info">
              <div className="card-name">{cardName || 'Cardholder Name'}</div>
              <div className="card-expiry">{formatExpiryDate(expiryDate) || 'MM/YY'}</div>
              <div className="card-cvv">{cvv ? `CVV: ${cvv}` : 'CVV'}</div>
            </div>
          </div>
        </div>
        <div className="payment-form">
          <h2 id='h2pay'>Payment Information</h2>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              id="cardNumber"
              type="text"
              maxLength="19" // 16 digits + 3 spaces
              value={formatCardNumber(cardNumber)}
              onChange={handleCardNumberChange}
              placeholder="Enter your card number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={handleCardNameChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
            <input
              id="expiryDate"
              type="text"
              maxLength="5"
              value={formatExpiryDate(expiryDate)}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              maxLength="3"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="CVV"
            />
          </div>
          <button className="pay-now-btn" onClick={handlePayNow}>Pay Now</button> {/* Pay Now button */}
          {paymentSuccess && (
            <div className="popup-message23">
              <div className="success-message">
                Payment Successful!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
