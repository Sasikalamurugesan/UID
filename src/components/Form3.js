import React, { useState } from 'react';
import './form3.css';
import Confirmation from './Confirmation'; // Update the import path based on your project structure

const Form3 = () => {
  const [formData, setFormData] = useState({
    petName: '',
    breed: '',
    gender: '',
    dob: '',
    vaccination: '',
    insured: '',
    aggression: '',
    licensed: '',
  });
  const [insured, setInsured] = useState('');
  const [aggression, setAggression] = useState('');
  const [licensed, setLicensed] = useState('');
  const [vaccination, setVaccination] = useState(''); 
  const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [petName, setPetName] = useState('');
    
    const [selectedBreed, setSelectedBreed] = useState('');

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleNext = () => {
    // Update formData with the latest values
    setFormData({
      ...formData,
      insured,
      aggression,
      licensed,
      vaccination,
      gender,
      dob,petName,
      breed: selectedBreed,
    });
    console.log('Form Data:', formData);
    setShowConfirmation(true);
  };
  

  return (
    <div className="f3-grmng-pkg-sec f3-walking-pkg-sec">
      <div className="f3-container">
        <div className="f3-grmng-pkg-sec-cnt f3-flex-end">
          <div className="f3-grmng-pkg-sec-lft f3-lftimg">
            <div>
              <img src="https://www.petsfolio.com/in/packages/assets/images/grm-pkg-lft1.png" alt="img" />
            </div>
          </div>

          <div className="f3-grmng-pkg-sec-ryt">
            <div className="f3-grmng-pkg-frm">
              <div className="f3-num-count f3-m-b-20">
                <h3><span>4</span>/4</h3>
              </div>

              <div className="f3-grmng-slct-sec f3-flex-space f3-m-b-30">
                <h3 className="f3-rum_1"><b>04. Add Your Pet Details</b></h3>
                <div className="f3-pr_bar">
                  <ul className="f3-flex-start">
                    <li className="f3-line-actve f3-active"></li>
                    <li className="f3-line-actve f3-active"></li>
                    <li className="f3-line-actve f3-active"></li>
                    <li className="f3-active"></li>
                  </ul>
                </div>
              </div>

              <div className="f3-grooming-frm-list f3-grmng-pkge-frm3 f3-grmng-pkge-frm4">
                {showConfirmation ? (
                  <Confirmation formData={formData} />
                ) : (
                  <form className="f3-flex-space" id="myForm">
                   

                   <div className="f3-form-split f3-flex-space">
                    <div className="f3-form-cntl f3-m-b-20">
                      <p className="f3-psm_22">Pet Name <b>*</b></p>
                      <div className="f3-form-group f3-user">
                        <input
                          className="f3-pss_s1"
                          type="text"
                          name="f3-pet_name"
                          
                          placeholder="Enter Your Pet Name"
                          onChange={(e) => setPetName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="f3-form-cntl f3-m-b-20">
                      <p className="f3-psm_22">Breed <b>*</b></p>
                      <div className="f3-form-group f3-user">
                        <select
                          className="f3-brd-slect f3-pss_s1"
                          name="f3-dog_breed"
                          
                          onChange={(e) => setSelectedBreed(e.target.value)}
                        >
                          <option value="">Select Breed </option>
                          <option value="1">Affenpinscher</option>
                          <option value="2" >Afghan Hound</option>
																									<option value="3" >Airedale Terrier</option>
																									<option value="4" >Akita</option>
																									<option value="5" >Alaskan Malamute</option>
																									<option value="6" >American English Coonhound</option>
																									<option value="7" >American Eskimo Dog</option>
																									<option value="8" >American Foxhound</option>
																									<option value="9" >American Staffordshire Terrier</option>
																									<option value="10" >American Water Spaniel</option>
																									<option value="11" >Anatolian Shepherd Dog</option>
																									<option value="12" >Australian Cattle Dog</option>
																									<option value="13" >Australian Shepherd</option>
																									<option value="14" >Australian Terrier</option>
																									<option value="15" >Basenji</option>
																									<option value="16" >Basset Hound</option>
																									<option value="17" >Beagle</option>
																									<option value="18" >Bearded Collie</option>
																									<option value="19" >Beauceron</option>
																									<option value="20" >Bedlington Terrier</option>
																									<option value="21" >Belgian Malinois</option>
																									<option value="22" >Belgian Sheepdog</option>
																									<option value="23" >Belgian Tervuren</option>
																									<option value="24" >Bergamasco</option>
																									<option value="25" >Berger Picard</option>
																									<option value="26" >Bernese Mountain Dog</option>
																									<option value="27" >Bichon Frise</option>
																									<option value="28" >Black and Tan Coonhound</option>
																									<option value="29" >Black Russian Terrier</option>
																									<option value="30" >Bloodhound</option>
																									<option value="31" >Bluetick Coonhound</option>
																									<option value="32" >Boerboel</option>
																									<option value="33" >Border Collie</option>
																									<option value="34" >Border Terrier</option>
																									<option value="35" >Borzoi</option>
																									<option value="36" >Boston Terrier</option>
																									<option value="37" >Bouvier des Flandres</option>
																									<option value="38" >Boxer</option>
																									<option value="39" >Boykin Spaniel</option>
																									<option value="40" >Briard</option>
																									<option value="41" >Brittany</option>
																									<option value="42" >Brussels Griffon</option>
																									<option value="43" >Bull Terrier</option>
																									<option value="44" >Bulldog</option>
																									<option value="45" >Bullmastiff</option>
																									<option value="46" >Cairn Terrier</option>
																									<option value="47" >Canaan Dog</option>
																									<option value="48" >Cane Corso</option>
																									<option value="49" >Cardigan Welsh Corgi</option>
																									<option value="50" >Cavalier King Charles Spaniel</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="f3-form-cntl f3-m-b-20">
                    <p className="f3-psm_22">Gender <b>*</b></p>
                    <div className="f3-day-slcn f3-flex-space">
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-Male"
                          name="f3-gender"
                          value="Male"
                          checked={gender === 'Male'}
                          onChange={() => setGender('Male')}
                        />
                        <label htmlFor="f3-Male" className="f3-npr_1">Male</label>
                      </div>
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-Female"
                          name="f3-gender"
                          value="Female"
                          checked={gender === 'Female'}
                          onChange={() => setGender('Female')}
                        />
                        <label htmlFor="f3-Female" className="f3-npr_1">Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="f3-form-split f3-flex-space">
                    <div className="f3-form-cntl f3-m-b-20">
                      <p className="f3-psm_22">Date of Birth <b>*</b></p>
                      <div className="f3-form-group f3-date">
                        <input
                         
                          className="f3-pss_s1"
                          type="date"
                         
                          name="f3-dob"
                          id="f3-dob"
                         
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="f3-form-cntl f3-m-b-20">
                      <p className="f3-psm_22">Last Vaccination <b>*</b></p>
                      <div className="f3-form-group f3-date">
                        <input
                       
                          className="f3-pss_s1"
                          type="date"
                          value={vaccination}
                          name="f3-vaccination"
                          id="f3-vac"
                         
                          onChange={(e) => setVaccination(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="f3-form-cntl f3-m-b-20">
                    <p className="f3-psm_22">Is Your Pet Insured? <b>*</b></p>
                    <div className="f3-day-slcn f3-flex-space">
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-Yes1"
                          name="f3-insured"
                          value="1"
                          checked={insured === '1'}
                          onChange={() => setInsured('1')}
                        />
                        <label htmlFor="f3-Yes1" className="f3-npr_1">Yes</label>
                      </div>
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-No1"
                          name="f3-insured"
                          value="0"
                          checked={insured === '0'}
                          onChange={() => setInsured('0')}
                        />
                        <label htmlFor="f3-No1" className="f3-npr_1">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="f3-form-cntl f3-m-b-20">
                    <p className="f3-psm_22">How Aggressive Is Your Pet <b>*</b></p>
                    <div className="f3-day-slcn f3-flex-space">
                      <div className="f3-form-group">
                        <input
                          type="radio"
                          id="f3-Low"
                          name="f3-aggression"
                          value="Low"
                          checked={aggression === 'Low'}
                          onChange={() => setAggression('Low')}
                        />
                        <label htmlFor="f3-Low" className="f3-npr_1">Low</label>
                      </div>
                      <div className="f3-form-group">
                        <input
                          type="radio"
                          id="f3-Medium"
                          name="f3-aggression"
                          value="Medium"
                          checked={aggression === 'Medium'}
                          onChange={() => setAggression('Medium')}
                        />
                        <label htmlFor="f3-Medium" className="f3-npr_1">Medium</label>
                      </div>
                      <div className="f3-form-group">
                        <input
                          type="radio"
                          id="f3-High"
                          name="f3-aggression"
                          value="High"
                          checked={aggression === 'High'}
                          onChange={() => setAggression('High')}
                        />
                        <label htmlFor="f3-High" className="f3-npr_1">High</label>
                      </div>
                    </div>
                  </div>

                  <div className="f3-form-cntl f3-m-b-40">
                    <p className="f3-psm_22">Is Your Pet Licensed? <b>*</b></p>
                    <div className="f3-day-slcn f3-flex-space">
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-Yes2"
                          name="f3-licence"
                          value="1"
                          checked={licensed === '1'}
                          onChange={() => setLicensed('1')}
                        />
                        <label htmlFor="f3-Yes2" className="f3-npr_1">Yes</label>
                      </div>
                      <div className="f3-form-group f3-frm-grp-split">
                        <input
                          type="radio"
                          id="f3-No2"
                          name="f3-licence"
                          value="0"
                          checked={licensed === '0'}
                          onChange={() => setLicensed('0')}
                        />
                        <label htmlFor="f3-No2" className="f3-npr_1">No</label>
                      </div>
                    </div>
                  </div>
                <div className="f3-nxt_bk f3-flex-space">
                     
                      <button
                        className="f3-pckg_bk_btn f3-primary_btn f3-go-bck"
                      >
                        Edit
                      </button>
                      <a href="http://localhost:3000/Form2" className="f2-pckg_bk_btn primary_btn go-bck">Back</a>
                      <button
                        className="f3-pckg_nxt_btn f3-primary_btn f3-go-nxt"
                        type="button"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
