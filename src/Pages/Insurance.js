import React from 'react';
import './insurance.css';
function Insurance() {
  return (
    <div className="Inhm-bnr-sec Inglb-bnr-frm Ininsur-bnr" style={{ backgroundImage: 'url(https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/insurance-bg.jpg)' }}>
      <div className="Incontainer">
        <div className="Inhm-bnr-cnt flex-space">
          <div className="Inhm-bnr-lft-sec">
            <h1 className="Inm-b-10">Dog insurance that gives you peace of mind</h1>
            <p className="Ingp_1 Inm-b-30">No matter what life throws your way, we're here for you and your dog</p>
            <div className="Inbnr-pet-packages Ininsurence-frm">
              <form
                action="/in/pet-insurance/#wpcf7-f2042-p2063-o1"
                
                className="Inwpcf7-form init"
                aria-label="Contact form"
                noValidate="novalidate"
                data-status="init"
              >
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_wpcf7" value="2042" />
                  <input type="hidden" name="_wpcf7_version" value="5.8.1" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2042-p2063-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="2063" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  <input type="hidden" name="_wpcf7cf_hidden_group_fields" value="[]" />
                  <input type="hidden" name="_wpcf7cf_hidden_groups" value="[]" />
                  <input type="hidden" name="_wpcf7cf_visible_groups" value="[]" />
                  <input type="hidden" name="_wpcf7cf_repeaters" value="[]" />
                  <input type="hidden" name="_wpcf7cf_steps" value="{}" />
                  <input type="hidden" name="_wpcf7cf_options" value="{&quot;form_id&quot;:2042,&quot;conditions&quot;:[{&quot;then_field&quot;:&quot;dog-breed-selected&quot;,&quot;and_rules&quot;:[{&quot;if_field&quot;:&quot;type&quot;,&quot;operator&quot;:&quot;equals&quot;,&quot;if_value&quot;:&quot;Dog&quot;}]},{&quot;then_field&quot;:&quot;cat-breed-selected&quot;,&quot;and_rules&quot;:[{&quot;if_field&quot;:&quot;type&quot;,&quot;operator&quot;:&quot;equals&quot;,&quot;if_value&quot;:&quot;Cat&quot;}]},{&quot;then_field&quot;:&quot;other-selected&quot;,&quot;and_rules&quot;:[{&quot;if_field&quot;:&quot;dogbeed&quot;,&quot;operator&quot;:&quot;equals&quot;,&quot;if_value&quot;:&quot;Other&quot;}]}],&quot;settings&quot;:{&quot;animation&quot;:&quot;yes&quot;,&quot;animation_intime&quot;:200,&quot;animation_outtime&quot;:200,&quot;conditions_ui&quot;:&quot;normal&quot;,&quot;notice_dismissed&quot;:false}}" />
                  <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                </div>
                <div className="Inins-form-list">
                 
                  <div
                    data-id="dog-breed-selected"
                    data-orig_data_id="dog-breed-selected"
                    data-class="Inwpcf7cf_group"
                  >
                    <div className="Inins-frm-itm Inbrdblk">
                      <p>
                        <label>Dog Breed*</label>
                        <br />
                        <span className="Inwpcf7-form-control-wrap" data-name="dogbeed">
                          <select
                            className="Inwpcf7-form-control Inwpcf7-select Inwpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            name="dogbeed"
                          >
                            <option value="">Dog Breed?</option>
                            <option value="American Bully">American Bully</option>
                            <option value="Beagle">Beagle</option>
                            <option value="Belgium Malinois">Belgium Malinois</option>
                            <option value="Boxer">Boxer</option>
                            <option value="Bulldog">Bulldog</option>
                            {/* Add more options here */}
                          </select>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    data-id="other-selected"
                    data-orig_data_id="other-selected"
                    data-class="Inwpcf7cf_group"
                  >
                    <div className="Inins-frm-itm Inbrdblk">
                      <p>
                        <label>Breed Name*</label>
                        <br />
                        <span className="Inwpcf7-form-control-wrap" data-name="breed-name">
                          <input
                            size="40"
                            className="Inwpcf7-form-control Inwpcf7-text Inwpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter Breed Name"
                            value=""
                            type="text"
                            name="breed-name"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    data-id="cat-breed-selected"
                    data-orig_data_id="cat-breed-selected"
                    data-class="Inwpcf7cf_group"
                  >
                    
                  </div>
                  <div className="Inins-frm-itm Inage-item">
                    <p>
                      <label>Age*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="entryageyear">
                        <select
                          className="Inwpcf7-form-control Inwpcf7-select Inwpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          name="entryageyear"
                        >
                          <option value="">Years</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </span><br/>
                      <span className="Inwpcf7-form-control-wrap" data-name="entryagemonths">
                        <select
                          className="Inwpcf7-form-control Inwpcf7-select Inwpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          name="entryagemonths"
                        >
                          <option value="">Months</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm">
                    <p>
                      <label>Your Name*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="fname">
                        <input
                          size="40"
                          className="Inwpcf7-form-control Inwpcf7-text Inwpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                          value=""
                          type="text"
                          name="fname"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm">
                    <p>
                      <label>Your Email*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="email">
                        <input
                          size="40"
                          className="Inwpcf7-form-control Inwpcf7-email Inwpcf7-validates-as-required Inwpcf7-text Inwpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email"
                          value=""
                          type="email"
                          name="email"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm">
                    <p>
                      <label>Your Phone*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="phone">
                        <input
                          size="40"
                          className="Inwpcf7-form-control Inwpcf7-tel Inwpcf7-validates-as-required Inwpcf7-text Inwpcf7-validates-as-tel"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Phone"
                          value=""
                          type="tel"
                          name="phone"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm icon">
                    <p>
                      <label>Your Location*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="location">
                        <input
                          size="40"
                          className="Inwpcf7-form-control Inwpcf7-text Inwpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Location"
                          value=""
                          type="text"
                          name="location"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm icon">
                    <p>
                      <label>Pincode*</label>
                      <br />
                      <span className="Inwpcf7-form-control-wrap" data-name="pincode">
                        <input
                          size="40"
                          className="Inwpcf7-form-control Inwpcf7-tel Inwpcf7-validates-as-required Inwpcf7-text Inwpcf7-validates-as-tel"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Pincode"
                          value=""
                          type="tel"
                          name="pincode"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="Inins-frm-itm">
                    <span className="Inwpcf7-form-control-wrap recaptcha" data-name="recaptcha">
                      <span
                        data-sitekey="6Ld6wwciAAAAABteGYVV4K07L7QBaeO3okdfM_8g"
                        className="Inwpcf7-form-control Inwpcf7-recaptcha g-recaptcha"
                      ></span>
                      <noscript>
                        <div className="Ingrecaptcha-noscript">
                          <iframe
                            src="https://www.google.com/recaptcha/api/fallback?k=6Ld6wwciAAAAABteGYVV4K07L7QBaeO3okdfM_8g"
                            
                            width="310"
                            height="430"
                          ></iframe>
                          <textarea
                            name="g-recaptcha-response"
                            rows="3"
                            cols="40"
                            placeholder="reCaptcha Response Here"
                          ></textarea>
                        </div>
                      </noscript>
                    </span>
                  </div>
                  <div className="Inins-frm-itm">
                    <div className="Inbtn">
                      <p>
                        <input
                          className="Inwpcf7-form-control Inwpcf7-submit has-spinner primary_btn btn_cpink"
                          type="submit"
                          value="Get Insurance Quotes"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Inwpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Insurance;
