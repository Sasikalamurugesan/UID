import React from 'react';
import './form1.css'; 
import { useNavigate } from 'react-router-dom';
const Form1= () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSelectPackage = () => {
      navigate('/Form2'); // Replace '/Form1' with the actual path of the target page
  };
  return (
    <div className="f1 grmng-pkg-sec walking-pkg-sec">
      <div className="f1container">
        <div className="f1 grmng-pkg-sec-cnt flex-end">
          <div className="f1 grmng-pkg-sec-lft lftimg">
            <div>
              <img
                src="https://www.petsfolio.com/in/packages/assets/images/grm-pkg-lft1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="f1 grmng-pkg-sec-ryt">
            <div className="grmng-pkg-frm">
              <div className="num-count m-b-20">
                <h3>
                  <span>2</span>/4
                </h3>
              </div>
              <div className="grmng-slct-sec flex-space m-b-30">
                <h3 className="f1 rum_1">02. Book Date & Time</h3>
                <div className="f1 pr_bar">
                  <ul className="flex-start">
                    <li className="line-actve active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                    <li className="active"></li>
                  </ul>
                </div>
              </div><br/>
              <div className="grooming-frm-list">
                <form method="post" id="myForm">
                  <div className="brdng-strt-sec m-b-20">
                    <div className="form-cntl">
                      <p className="psm_22">
                        <b>Select Required Grooming Date <span>*</span></b>
                      </p>
                      <div className="f1 form-group frm-time flex-space">
                        <div className="frm-time-lft">
                          <input
                           
                            className="f1 gpr_2"
                            type="date"
                            id="from_date"
                            name="from_date"
                            placeholder="Select Time"
                            
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-cntl afe m-b-20">
                    <p className="psm_22">Select Preferable Time <b>*</b></p>
                    <div className="f1 form-group frm-time flex-space m-b-20">
                      <div className="day-slcn">
                        <div className="form-group">
                          <input
                            type="radio"
                            id="Normal1"
                            name="datShift[]"
                            value="Morning"
                          />
                          <label htmlFor="Normal1" className="f1npr_1">
                            Morning
                          </label>
                        </div>
                      </div>
                      <div className="frm-time-rht">
                        <select className="f1gpr_2" name="time[]" id="morning_time">
                          <option value="">Select Time</option>
                          <option value="17:00 PM">10:00 PM</option>
                          <option value="17:30 PM">10:30 PM</option>
                          <option value="17:30 PM">11:00 PM</option>
                          <option value="17:30 PM">11:30 PM</option>
                          <option value="17:30 PM">12:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="f1 form-group frm-time flex-space m-b-20">
                      <div className="day-slcn">
                        <div className="form-group">
                          <input
                            type="radio"
                            id="Normal2"
                            name="datShift[]"
                            value="Afternoon"
                          />
                          <label htmlFor="Normal2" className="f1npr_1">
                            Afternoon
                          </label>
                        </div>
                      </div>
                      <div className="frm-time-rht">
                        <select
                          className="f1gpr_2"
                          name="time[]"
                          id="afternoon_time"
                        >
                          <option value="">Select Time</option>
                          <option value="17:30 PM">01:00 PM</option>
                          <option value="17:30 PM">01:30 PM</option>
                          <option value="17:30 PM">02:00 PM</option>
                          <option value="17:30 PM">02:30 PM</option>
                          <option value="17:30 PM">03:00 PM</option>
                          <option value="17:30 PM">03:30 PM</option>
                      
                        </select>
                        <span
                          className="error-message"
                          style={{
                            color: 'red',
                            fontWeight: 'bold',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="f1 form-group frm-time flex-space">
                      <div className="day-slcn">
                        <div className="form-group">
                          <input
                            type="radio"
                            id="Normal3"
                            name="datShift[]"
                            value="Evening"
                          />
                          <label htmlFor="Normal3" className="f1npr_1">
                            Evening
                          </label>
                        </div>
                      </div>
                      <div className="f1frm-time-rht">
                        <select className="f1gpr_2" name="time[]" id="evening_time">
                          <option value="">Select Time</option>
                          
                         
                          <option value="17:30 PM">03:30 PM</option>
                          <option value="17:30 PM">04:00 PM</option>
                          <option value="17:30 PM">05:00 PM</option>
                          <option value="17:30 PM">05:30 PM</option>
                       
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="preferable_time_error" style={{ color: '#f54842', fontWeight: 'bold', display: 'block' }}></div>
                  <div className="form-cntl m-b-50">
                    <p className="psm_22">Additional Notes</p><br/>
                    <textarea className="f1p_11" name="message" placeholder="Eg: My pet is very hyper.." rows="3"></textarea>
                  </div>
                  <div className="nxt_bk flex-space">
                    <a href="http://localhost:3000/Form" className="f1pckg_bk_btn primary_btn go-bck">    Back</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="pckg_nxt_btn primary_btn go-nxt" onClick={handleSelectPackage}>Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
