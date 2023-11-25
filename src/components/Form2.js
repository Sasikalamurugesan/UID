import React from 'react';
import './form2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Form2 = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSelectPackage = () => {
      navigate('/Form3'); 
  };
  const iconStyle = {
    marginRight: '10px',
    fontSize: '1rem',
  };
  return (
    <div className="f2-grmng-pkg-sec walking-pkg-sec">
      <div className="f2-container">
        <div className="f2-grmng-pkg-sec-cnt flex-end">
          <div className="f2-grmng-pkg-sec-lft lftimg">
            <div>
              <img src="https://www.petsfolio.com/in/packages/assets/images/grm-pkg-lft1.png" alt="img" />
            </div>
          </div>
          <div className="f2-grmng-pkg-sec-ryt">
            <div className="f2-grmng-pkg-frm">
              <div className="f2-num-count m-b-20">
                <h3><span>3</span>/4</h3>
              </div>
              <br />
              <div className="f2-grmng-slct-sec flex-space m-b-30">
                <h3 className="f2-rum_1"><b>03. Add Your Details</b></h3>
                <br />
                <div className="f2-pr_bar">
                  <ul className="f2-flex-start">
                    <li className="f2-line-actve active"></li>
                    <li className="f2-line-actve active"></li>
                    <li className="f2-active"></li>
                    <li className="f2-active"></li>
                  </ul>
                </div>
              </div>

              <div className="f2-grooming-frm-list">
                <div className="f2-form-card">
                  <form className="f2-flex-space" method="post" id="myForm">
                    <div className="f2-form-split f2-flex-space">
                      <div className="f2-form-cntl" style={{ width: '300px' }}>
                        <div className="f2-form-group user">
                          <div className="icon-input">
                            <FontAwesomeIcon icon={faUser} className="fa-icon" />
                            
                            <input
                              className="f2-pss_s1"
                              type="text"
                              name="name"
                              placeholder="Full Name *"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="f2-form-card">
                  <form className="f2-flex-space" method="post" id="myForm">
                    <div className="f2-form-split f2-flex-space">
                      <div className="f2-form-cntl" style={{ width: '300px' }}>
                        <div className="f2-form-group phonenumber">
                          <div className="icon-input">
                            <FontAwesomeIcon icon={faPhone} className="fa-icon" />
                            <input
                              className="f2-pss_s1"
                              type="tel"
                              maxLength="10"
                              name="number"
                              placeholder="Phone Number *"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="f2-form-card">
                  <form className="f2-flex-space" method="post" id="myForm">
                    <div className="f2-form-split f2-flex-space">
                      <div className="f2-form-cntl" style={{ width: '300px' }}>
                        <div className="f2-form-group email">
                          <div className="icon-input">
                            
                            <i className="fa fa-envelope" style={iconStyle}></i>
                            <input
                              className="f2-pss_s1"
                              type="email"
                              name="email"
                              placeholder="Email *"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="f2-form-card">
                  <form className="f2-flex-space" method="post" id="myForm">
                    <div className="f2-form-split f2-flex-space">
                      <div className="f2-form-cntl" style={{ width: '300px' }}>
                        <div className="f2-form-group loc-lg">
                          <div className="icon-input">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
                            <input
                              className="f2-pss_s1"
                              type="text"
                              name="location"
                              id="pac-input"
                              placeholder="Select the address for the service *"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div id="map"></div>
              <div id="infowindow-content">
                <input
                  className="f2-pss_s1"
                  type="hidden"
                  name="longitude"
                  id="longitude"
                />
                <input
                  className="f2-pss_s1"
                  type="hidden"
                  name="latitude"
                  id="latitude"
                />
                <input
                  className="f2-pss_s1"
                  type="hidden"
                  name="city"
                  id="city"
                />
              </div><br/><br/>

              <div className="f2-nxt_bk f2-flex-space">
                <a href="http://localhost:3000/Form1" className="f2-pckg_bk_btn primary_btn go-bck">Back</a>
                <button type="submit" className="f2-pckg_nxt_btn primary_btn"  style={{ marginLeft: '300px' }} onClick={handleSelectPackage}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2;
