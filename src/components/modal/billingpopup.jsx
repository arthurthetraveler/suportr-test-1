import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function BillingPopup() {
  const [showModal, setShowModal] = useState(false);

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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 5000); // simulate payment process
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/ordersuccessfulpage"); 
      }, 2000); // 2 seconds after success

      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    
    <div>
        <button
        onClick={() => setShowModal(true)}
        className="bg-fuchsia-950 border-2 text-center text-white font-semibold px-[11px] py-1  rounded-lg flex items-center gap-1 ml-2"
      >
       <img src='https://res.cloudinary.com/divh5admv/image/upload/v1746480850/cardicon_hhbjxr.png' className='w-[30px] h-[30px]'/>Card
      </button>
    {showModal &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
       <div className="bg-gradient-to-b from-black via-purple-950 to-black rounded-3xl p-8 max-w-xl w-full shadow-xl animate-fade-in relative">
            <h2 className="text-4xl font-extrabold text-rose-600 mb-6 text-center">
              BILLING DETAILS
            </h2>

            <form className="space-y-4 text-sm font-semibold ">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="FIRST NAME*" className="input bg-transparent border-b border-white" />
                <input type="text" placeholder="LAST NAME*" className="input bg-transparent border-b border-white" />
              </div>
              <input type="text" placeholder="CARD NUMBER*" className="input w-full bg-transparent border-b border-white" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="EXPIRATION DATE*" className="input bg-transparent border-b border-white" />
                <input type="text" placeholder="CVV" className="input bg-transparent border-b border-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="ADDRESS LINE 1" className="input bg-transparent border-b border-white" />
                <input type="text" placeholder="ADDRESS LINE 2" className="input bg-transparent border-b border-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="CITY" className="input bg-transparent border-b border-white" />
                <input type="text" placeholder="COUNTY" className="input bg-transparent border-b border-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className="input bg-purple-950 border border-white custom-select">
                  
                  <option>UNITED KINGDOM</option>
                    <option>NORTH AMERICA</option>
                    <option>EUROPE</option>
                    <option>ASIA</option>
                    <option>AFRICA</option>
                    <option>OCEANIA</option>
                  
                </select>
                <input type="text" placeholder="POST CODE" className="input bg-transparent border-b border-white" />
              </div>
              <input type="text" placeholder="PHONE NUMBER" className="input w-full bg-transparent border-b border-white" />


        <button
      onClick={handleClick}
      disabled={loading || success}
      className={`w-64 ml-[120px] max-w-sm py-3 px-6 rounded-2xl text-lg font-extrabold transition-all duration-300 flex items-center justify-center
        ${success
          ? "bg-green-500 text-white"
          : "bg-green-400 hover:bg-green-300 text-black shadow-[0_4px_20px_rgba(0,255,120,0.5)]"
        }`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent" />
      ) : success ? (
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Payment Successful
        </div>
      ) : (
        "SUBMIT PAYMENT"
      )}

    </button>

            </form>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
          </div>
        
        </div>
       }
        </div>
    );
    }
