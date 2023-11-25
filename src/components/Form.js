import React from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate(); 

    const handleSelectPackage = () => {
        navigate('/Form1'); 
    };
  return (
    <div className="grmng-pkg-sec">
      <div className="f container">
        <div className="grmng-pkg-sec-cnt flex-end">
          <div className="grmng-pkg-sec-lft lftimg">
          <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
  <img src="https://img.freepik.com/premium-photo/closeup-vertical-shot-happy-curly-labradoodle-dog-female-groomer-washing-head-with-shampoo-bathtub-grooming-salon_482921-7779.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="img" />
</div>

          </div>
          <div className="grmng-pkg-sec-ryt">
            <div className="grmng-pkg-frm">
              <form>
                <div className="num-count m-b-20">
                  <h3><span>1</span>/4</h3>
                </div>
                <div className="grmng-slct-sec flex-space m-b-30">
                  <h3 className="rum_1"><b>01. Select a Package</b></h3>
                  <div className="pr_bar">
                    <ul className="flex-start">
                      <li className="active"></li>
                      <li className="active"></li>
                      <li className="active"></li>
                      <li className="active"></li>
                    </ul>
                  </div>
                </div>
                <input type="hidden" name="package_id" value="1" />
                <input type="hidden" name="service_id" value="2" />
                <div className="grmng-strt-prc flex-space m-b-20">
                  <div className="grmng-strt-prc-lft">
                    <div className="grmng-prc flex-start m-b-30">
                    <p className="p_1 dwn-p">
                        Start from <img src="https://www.petsfolio.com/in/packages/assets/images/finger-point.png" alt="img" />
                      </p>
                      <p className="h2">&nbsp;&nbsp;&nbsp;499/-</p>
                    </div>
                    <ul className="flex-space">
  <li className="flex-start m-b-20">
    <div className="chk-img flex-center">
     
    <div className="p_1">
    <img src="https://www.petsfolio.com/in/packages/assets/images/checkmark.svg" alt="image" /><small>Shampoo Bath</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="https://www.petsfolio.com/in/packages/assets/images/checkmark.svg" alt="image" />
      <small>Ear Cleaning</small>
    </div>
    </div>
  </li>
  <li className="flex-start m-b-20">
    <div className="chk-img flex-center">
     
    
    <div className="p_1">
    <img src="https://www.petsfolio.com/in/packages/assets/images/checkmark.svg" alt="image" /><small>Nail Clipping</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://www.petsfolio.com/in/packages/assets/images/checkmark.svg" alt="image" /> <small>Blow Dry</small>
    </div>
    </div>
  </li>
</ul>


</div>
                  <div className="grmng-strt-prc-ryt flex-end">
  <div className="grm-mn">
    <img src="https://www.petsfolio.com/in/packages/assets/images/man-pt-grm.png" alt="img" />
  </div>
  <div className="grm-pws  flex-end">
    <img src="https://www.petsfolio.com/in/packages/assets/images/grm-sec-paws.png" alt="img" />
  </div>
</div>
</div>
                <div className="grmng-opt-sec">
                  <h5 className="ps_sl"><b>Extra Add-ons (Optional)</b></h5>
                  <p className="sm_1">Add More Items to the Basic Package</p>
                </div>
                <div className="form-card">
                <div className="form-cntl">
  <p className="psm_22">Hair Cut</p>
  <div className="options-container">
    <div className="form-option">
     
      <label htmlFor="Minor" className="npr_1">
        <input type="radio" id="Minor" name="hair[]" value="Minor Hair Cut" /> Minor Hair Cut
      </label>
    </div>
    <div className="form-option">
      
      <label htmlFor="Full" className="npr_1">
        <input type="radio" id="Full" name="hair[]" value="Full Hair Cut" /> Full Hair Cut
      </label>
    </div>
    <div className="form-option">
      <label htmlFor="Stylish" className="npr_1">
        <input type="radio" id="Stylish" name="hair[]" value="Stylish Hair Cut" /> Stylish Hair Cut
      required</label>
    </div>
  </div>
</div><br/>


                
               
                  <div className="form-cntl">
                    <p className="psm_22">Others</p>
                    <div className="options-container">
                      <div className="form-group">
                        <input type="checkbox" id="Teeth" name="extra_addons[]" value="Teeth Cleaning" />
                        <label htmlFor="Teeth" className="npr_1">Teeth Cleaning</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Paw" name="extra_addons[]" value="Paw Massage" />
                        <label htmlFor="Paw" className="npr_1">Paw Massage</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Eye" name="extra_addons[]" value="Eye Cleaning" />
                        <label htmlFor="Eye" className="npr_1">Eye Cleaning</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Sanitary" name="extra_addons[]" value="Sanitary Clipping" />
                        <label htmlFor="Sanitary" className="npr_1">Sanitary Clipping</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Tick" name="extra_addons[]" value="Tick Bath" />
                        <label htmlFor="Tick" className="npr_1">Tick Bath</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Dash" name="extra_addons[]" value="Dash of Cologne" />
                        <label htmlFor="Dash" className="npr_1">Dash of Cologne</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Mouth" name="extra_addons[]" value="Mouth Spray" />
                        <label htmlFor="Mouth" className="npr_1">Mouth Spray</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Body" name= "extra_addons[]" value="Body Massage" />
                        <label htmlFor="Body" className="npr_1">Body Massage</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Deshedding" name="extra_addons[]" value="Deshedding" />
                        <label htmlFor="Deshedding" className="npr_1">Deshedding</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" id="Anal" name="extra_addons[]" value="Anal Gland Cleaning" />
                        <label htmlFor="Anal" className="npr_1">Anal Gland Cleaning</label>required
                      </div>
                    </div>
                  </div>
               </div>
               <div className="nxt_bk flex-end">
        <button
          className="pckg_bk_btn primary_btn go-bck"
          style={{ opacity: 0, pointerEvents: 'none' }}
        >
          Back
        </button>
        <button
          className="pckg_nxt_btn primary_btn go-nxt"
          onClick={handleSelectPackage}
        >
          Select Package
        </button>
      </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;