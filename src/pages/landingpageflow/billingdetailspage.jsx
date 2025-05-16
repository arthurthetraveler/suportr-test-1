// BillingDetailsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const BillingDetailsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: 'United Kingdom',
    postCode: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['firstName', 'lastName', 'cardNumber', 'expirationDate', 'cvv'];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== '');
    if (!isFormValid) {
      alert('Please fill all required fields (marked with *)');
      return;
    }
    alert('Billing details submitted successfully!');
    // Add logic to save the data (e.g., to a backend) and navigate to the next step
    navigate('/ordersuccessfulpage'); // Navigate to OrderSuccessfulPage
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-justify ">
      <p className="text-white font-bold text-lg uppercase mb-0 mt-20 mr-96 ml-1">JUST ONE MORE STEP</p>
        <h1 className="text-9xl text-rose-600 font-extrabold mb-12 -mt-4">BILLING DETAILS</h1>
        <form onSubmit={handleSubmit} className="flex flex-col font-bold gap-6">
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              FIRST NAME *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
            <label className="text-white text-lg flex-1">
              LAST NAME *
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              CARD NUMBER *
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              EXPIRATION DATE *
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
            <label className="text-white text-lg flex-1">
              CVV *
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
                required
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              ADDRESS LINE 1
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              ADDRESS LINE 2
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              CITY
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              />
            </label>
            <label className="text-white text-lg flex-1">
              COUNTRY
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              >
                <option value="United Kingdom">UNITED KINGDOM</option>
                {/* Add more countries as needed */}
                <option value="United States">UNITED STATES</option>
                <option value="Canada">CANADA</option>
                <option value="Australia">AUSTRALIA</option>
                <option value="Germany">GERMANY</option>
                <option value="France">FRANCE</option>
                <option value="Spain">SPAIN</option>
                <option value="Italy">ITALY</option>
                <option value="Netherlands">NETHERLANDS</option>
                <option value="Sweden">SWEDEN</option>
                <option value="Norway">NORWAY</option>
                <option value="Finland">FINLAND</option>
                <option value="Denmark">DENMARK</option>
                <option value="Belgium">BELGIUM</option>
                <option value="Switzerland">SWITZERLAND</option>
                <option value="Austria">AUSTRIA</option>
                <option value="Ireland">IRELAND</option>
                <option value="Portugal">PORTUGAL</option>
                <option value="Greece">GREECE</option>
                <option value="Poland">POLAND</option>
                <option value="Czech Republic">CZECH REPUBLIC</option>
                <option value="Hungary">HUNGARY</option>
                <option value="Romania">ROMANIA</option>
                <option value="Bulgaria">BULGARIA</option>
                <option value="Slovakia">SLOVAKIA</option>
                <option value="Croatia">CROATIA</option>
                <option value="Serbia">SERBIA</option>
                <option value="Ukraine">UKRAINE</option>
                <option value="Russia">RUSSIA</option>
              </select>
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              POST CODE
              <input
                type="text"
                name="postCode"
                value={formData.postCode}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="text-white text-lg flex-1">
              PHONE NUMBER
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full border-b border-white bg-transparent text-white focus:outline-none mt-2"
              />
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-5 bg-rose-600 text-3x1 text-white font-semibold py-2 px-6 rounded ml-80 mr-80"
          >
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default BillingDetailsPage;