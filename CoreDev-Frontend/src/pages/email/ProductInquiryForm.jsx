// ProductInquiryForm.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './ProductInquiryForm.css';
import axios from 'axios';
const APP_URL = import.meta.env.VITE_APP_URL+"api/send-email";

const ProductInquiryForm = ({ productName, picUrl, type, }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: productName || '',
    type: type,
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // 1. Get CSRF cookie (as you're already doing successfully)
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true
      });
  
      // 2. Verify the token exists (from your console output)
      const xsrfToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];
      
      if (!xsrfToken) throw new Error('CSRF token not found in cookies');
  console.log(xsrfToken);
  
      // 3. Make authenticated request
      const response = await axios.post(
        'http://localhost:8000/api/send-email',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-XSRF-TOKEN': decodeURIComponent(xsrfToken) // Explicitly send token
          }
        }
      );
      console.log(response);
      // Handle success...
    }
     catch (error) {
      console.error('Request failed:', {
        error: error.message,
        response: error.response?.data,
        cookies: document.cookie
      });
    } finally {
      setIsSubmitting(false);
    }
   
    
  };


  return (
    <>
      <button 
        className="inquiry-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Inquire About This Product
      </button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="inquiry-form-container">
          <h2 className="inquiry-form-title">Inquire About :</h2>
        <div className='productData'>
          <img className='Prod-pic' src={picUrl} alt="" />
          <div>
          <h3> Product: <span> {productName || 'Our Product'}</span></h3>
          <h4>Type: <span>{type}</span></h4>
          </div>
          </div>
          <hr />
          {/* <p className="inquiry-form-subtitle">Fill out the form below and we'll get back to you shortly</p> */}
          
          {submitStatus === 'success' && (
            <div className="inquiry-alert success">
              Thank you for your inquiry! We've received your message and will contact you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="inquiry-alert error">
              There was an error submitting your inquiry. Please try again later.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="inquiry-form">
            {/* Form fields remain the same as before */}
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Address</label>
              <input
                type="address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="96 J. Alcantara Street, Brgy. Sambag 1"
              />
            </div>

            {!productName && (
              <div className="form-group">
                <label htmlFor="product">Product Name*</label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  placeholder="Product you're interested in"
                />
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="message">Your Inquiry*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Please include any specific questions or details about the product..."
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
            {submitStatus === 'success' && <p style={{ color: 'green' }}>Message sent successfully!</p>}
            {submitStatus === 'error' && <p style={{ color: 'red' }}>There was an error sending your message.</p>}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ProductInquiryForm;