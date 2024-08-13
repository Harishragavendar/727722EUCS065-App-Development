import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [errors, setErrors] = useState({});

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

  const validateFields = () => {
    const newErrors = {};

    // Validate fields
    if (!cardNumber) newErrors.cardNumber = 'Card number is required.';
    if (!cardName) newErrors.cardName = 'Cardholder name is required.';
    if (!expiryDate) newErrors.expiryDate = 'Expiry date is required.';
    if (!cvv) newErrors.cvv = 'CVV is required.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (!validateFields()) {
      return;
    }

    const paymentInfo = {
      name: cardName,
      cardNumber,
      cvv,
      expiryDate: formatExpiryDate(expiryDate),
    };

    const authToken = localStorage.getItem('authToken');
    setPaymentSuccess(true);
    fetch('http://localhost:8080/payment/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(paymentInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Payment success:', data);
        setPaymentSuccess(true);
        setErrors({}); // Clear errors on success
        // Optionally reset form fields
        setCardNumber('');
        setCardName('');
        setExpiryDate('');
        setCvv('');
      })
      .catch((error) => {
        console.error('Payment error:', error);
        // Optionally handle the error
      });
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
            {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name</label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={handleCardNameChange}
              placeholder="Enter your name"
            />
            {errors.cardName && <div className="error-message">{errors.cardName}</div>}
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
            />
            {errors.expiryDate && <div className="error-message">{errors.expiryDate}</div>}
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
            {errors.cvv && <div className="error-message">{errors.cvv}</div>}
          </div>
          <button className="pay-now-btn" onClick={handlePayNow}>Pay Now</button>
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
