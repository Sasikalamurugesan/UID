import React from 'react';
import './Confirmation.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const ConfirmationPage = ({ formData }) => {
  const navigate = useNavigate();
    const checkmarkItems = [
        'Sit',
        'Stand',
        'Come',
        'Down',
        'Potty',
        'Leash Walk',
      ];
      const handleGetQuotes = () => {
        
        Swal.fire({
          title: 'Request Submitted Successfully',
          icon: "success",
          position:'center',
        
        }).then(() => {
       
          navigate('/inform'); 
        });
    };
  return (
    <div className="c1-confirmation-page">
    <div className="c1-confirmation">
      <h3 style={{alignItems:'center'}}><b>Confirmation Details</b></h3><br/>
      <div className="c1-form-group">
        <label htmlFor="c1-petName">Pet Name: </label>
        <input
          type="text"
          id="c1-petName"
          value={formData.petName || 'Not provided'}
      
        />
      </div>
      <div className="c1-form-group">
        <label htmlFor="c1-breed">Breed:  </label>
        <input
          type="text"
          id="c1-breed"
          value={formData.breed || 'Not provided'}
        
        />
      </div>
      <div className="c1-form-group">
        <label htmlFor="c1-dob">Date of Birth:  </label>
        <input
          type="text"
          id="c1-dob"
          value={formData.dob || 'Not provided'}
         
        />
      </div>
      <div className="c1-form-group">
        <label htmlFor="c1-licensed">Is Licensed:  </label>
        <input
          type="text"
          id="c1-licensed"
          value={formData.licensed === '1' ? 'Yes' : 'No'}
         
        />
      </div><br/>
    
        <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap' ,fontSize:'25px',fontFamily:'italic'}}>
        {checkmarkItems.map((item, index) => (
          <li key={index} style={{ flexBasis: '33.33%', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://www.petsfolio.com/in/packages/assets/images/red-checkmark.png"
                alt="checkmark"
                style={{ marginRight: '5px' }}
              />
              <small className="pss_s"><b>{item}</b></small>
            </div>
          </li>
        ))}
      </ul>
    </div><br/>
    <br/>

      

      <div>
        
        <button className="f3-pckg_nxt_btn f3-primary_btn f3-go-nxt" onClick={handleGetQuotes}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default ConfirmationPage;
