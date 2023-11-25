import React, { useState } from 'react';
import './inform.css'; // Import your CSS file
import Header from '../components/Header';
import Swal from 'sweetalert2';
const Inform = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    phoneNumber: '',
    address: '',
     agreement: false,
    dogBreed: 'Select Breed',
    age: {
      years: 'Select Year',
      months: 'Select Month',
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleAgeChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      age: {
        ...formData.age,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Form submitted successfully.',
    });
  };

  return (
    <div>  
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="volun" style={{ paddingRight: '590px' }}>
      <h1 style={{fontFamily:'Agbalumo' ,fontSize:'40px'}}><b>Dog insurance that gives you peace of mind.</b></h1><br/>
      <h2 style={{fontFamily:'Agbalumo' ,fontSize:'25px'}}><b>No matter what life throws your way, we're here for you and your dog.</b></h2><br/>
      <div className="volunteer-form-container style={{ padding: '0' }}">
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center', color: 'maroon' }}></h1>
           

            <div className="container2">
            <div className="form-row">
              <label>Select Dog Breed</label>
              <select className="inselect"
                name="dogBreed"
                value={formData.dogBreed}
                onChange={handleChange}
                required
              >
                <option value="Select Breed">Select Breed</option>
                <option value="Labrador">Labrador</option>
                <option value="Golden Retriever">Golden Retriever</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Bulldog">Bulldog</option>
              
              </select>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-row">
              <label>Age</label>
              <div className="age-dropdowns">
                <select  className="inselect"
                  name="years"
                  value={formData.age.years}
                  onChange={handleAgeChange}
                  required
                >
                  <option value="Select Year">Select Year</option>
                  <option value="1">1</option>
                  <option value="12">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  
                </select>
               
              </div>
            </div>
            </div>


             

            <div className="container2">
            <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="ins"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="form-row">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="ins"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            
              
              </div>
            

            <div className="container2">
            <div className="form-row">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="ins"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="form-row">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="ins"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <div className="container2">
              <div className="form-row">
                <label>Dog Name</label>
                <input
                  type="text"
                  name="name"
                  className="ins"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="form-row">
                <label>Pincode</label>
                <input
                  type="number"
                  name="pin"
                  className="ins"
                  onChange={handleChange}
                  required
                />
              </div>
              </div><br/>
              

          
            
           
           

            
            <button className="f3-pckg_nxt_btn f3-primary_btn f3-go-nxt" onClick={handleSubmit} >Submit</button>
          </form>
        </div>
      </div>
    </div>
    <section className="petwht-insrc">
      <div className="petcontainer">
        <div className="petwht-insr-lst flex-space">
          <div className="petwht-ins-itm">
            <div className="petwht-insr-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/what-insrc-img.png" alt="img" />
            </div>
          </div>
          <div className="petwht-ins-itm">
            <h2 className="petm-b-40"><b>What is pet insurance?</b></h2>
            <p className="petm-b-30">
              Pet insurance is a specialized form of insurance designed to protect the overall health and well-being of various animals. Similar to how we purchase health insurance for ourselves and our loved ones, pet insurance has become an excellent means of providing financial support for our pets when they require medical or other forms of assistance.
            </p>
            <p className='petm-b-30'>
              Being a pet owner can be costly, with annual routine expenses for animals on the rise. Expenses such as vaccinations, tick treatments, grooming, and more, can range anywhere from Rs. 10,000 to Rs. 54,000 annually. Among these expenses, veterinary fees and subsequent medical and surgical costs can be particularly high if your pet requires such care. However, with a pet insurance policy, your pets can receive the best medical and legal assistance in unforeseen situations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="p4why-ned-insr">
      <div className="p4container">
        <div className="p4whyned-txt">
          <h2 className="p4"><b>What are the reasons for considering pet insurance?</b></h2><br/>
          <p className="p4p_11">Pet insurance can help you cover the cost of unexpected veterinary bills, such as those for accidents, illnesses, and injuries.</p><br/>
        </div>
        <div className="p4whyned-lst p4flex-container">
          <div className="p4whyned-itm"> 
            <div className="p4whyned-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/need-insrc-1.png" alt="Image 1" className="p4" />
            </div><br/>
            <p className="p4psm_s">Guarantee optimal well-being</p><br/>
            <p className="p4p_1">Thanks to the insurance policy, your beloved pets will receive top-notch treatment and medical attention</p>
          </div>
          <div className="p4whyned-itm"> 
            <div className="p4whyned-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/need-insrc-2.png" alt="Image 2" className="p4" />
            </div><br/>
            <p className="p4psm_s">Cost-effective and reduces additional costs</p><br/>
            <p className="p4p_1">For a modest premium, your pet can be covered for a variety of benefits, including medical care and accidents</p>
          </div>
          <div className="p4whyned-itm"> 
            <div className="p4whyned-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/need-insrc-3.png" alt="Image 3" className="p4" />
            </div><br/>
            <p className="p4psm_s">Protection against unfortunate accidents</p><br/>
            <p className="p4p_1">Despite our unwavering attention to our furry babies, they may occasionally sustain injuries while playing</p>
          </div>
          <div className="p4whyned-itm"> 
            <div className="p4whyned-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/need-insrc-4.png" alt="Image 4" className="p4" />
            </div><br/>
            <p className="p4psm_s">Additional benefits for your furry baby</p><br/>
            <p className="p4p_1">Your pet may receive exclusive benefits from the insurer, such as coverage for third-party damages or pet theft</p>
          </div>
        </div>
      </div>
    </section>
    <section className="p5-insr-type">
      <div className="p5-container">
        <div className="p5instype-txt">
          <h2 className="p5"><b>Types of Pet Insurance?</b></h2><br/>
          <p className="p5p_1">In India, insurance companies have long provided coverage for cattle and livestock. However, private-sector insurers now go beyond death coverage, offering protection for various expenses like worldwide transit, third-party liabilities, theft or loss of pets, entry fees for dog shows, and more. Currently, different types of insurance plans cater to pets.</p>
        </div><br/>
        <div className="p5instype-lst p5flex-space">
          <div className="p5instype-itm p5flex-space">
            <div className="p5instype-lft">
              <p className="p5psm_s m-b-20">Dog Insurance:</p>
              <p className="p5p_1">With around 28-29 million pets in India, dogs constitute a significant portion, making them the most common pets. The COVID-19 pandemic further boosted pet adoption, particularly dogs, as people sought companionship. As a result, numerous pet insurance plans have emerged, primarily catering to dog owners who wish to safeguard their beloved furry companions from any potential harm</p>
            </div>
            <div className="p5instype-rgt p5flex-space">
              <div className="p5instype-img">
                <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/type-insr-1.png" alt="img" className="p5" />
              </div>
            </div>
          </div>
          <div className="p5instype-itm p5flex-space">
            <div className="p5instype-lft">
              <p className="p5psm_s m-b-20">Cat insurance:</p>
              <p className="p5p_1">The charm of all animals is undeniable, and this has led to an increasing number of insurance providers offering special benefits to cat owners. If you happen to be a cat owner, investing in pet cat insurance will safeguard your feisty feline from any mishaps during her adventurous escapades, ensuring her overall well-being and granting you peace of mind</p>
            </div>
            <div className="p5instype-rgt p5flex-space">
              <div className="p5instype-img">
                <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/type-insr-2.png" alt="img" className="p5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p6-insr-incld">
      <div className="p6-container">
        <h2 className="p6-m-b-40"><b>Our Comprehensive Pet Insurance Coverage includes</b></h2><br/>
        <div className="p6-insr-incld-lst flex-space">
          <div className="p6-insr-incld-itm">
            <div className="p6-insr-incld-txt p6-m-b-30">
              <p className="p6-psm_s p6-m-b-10"><b>Pet Insurance Inclusions</b></p><br/>
              <p className="p6-p_1">Know What's Covered for Your Furry Friend's Peace of Mind</p>
            </div>
            <div className="p6-inclus-lst"> 
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-check.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Surgery Expenses Cover</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-check.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Death due to accident/Diseases</p>
              </div>
             
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-check.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Hospitalization Cover</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-check.png" alt="img" />
                </div>
                <p className="p6-pss_s1">OPD Cover</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-check.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Lost or stolen dogs</p>
              </div>
            
            </div>
            <div className="p6-inclus-lft-img">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-1.png" alt="img" />
            </div>
          </div>
          <div className="p6-insr-incld-itm">
            <div className="p6-insr-incld-txt p6-m-b-30">
              <p className="p6-psm_s p6-m-b-10"><b>Pet Insurance Exclusions</b></p><br/>
              <p className="p6-p_1">Know What's Not Covered! Protecting Your Pets Wisely and Informed</p>
            </div>
            <div className="p6-inclus-lst">
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                
                <p className="p6-pss_s1">Any surgeries that are not necessitated because of illness or accident</p>
              </div></div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Surgeries to cure deformities or congenital defects are not covered</p>
              </div>
             
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Surgeries done due to pregnancy or whelping are not covered</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Any surgery related to grooming is excluded</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Any cosmetic or elective surgery which is not related to injury will not be covered</p>
              </div>
              <div className="p6-inclus-itm p6-flex-start">
                <div className="p6-inclus-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/include-wrong.png" alt="img" />
                </div>
                <p className="p6-pss_s1">Any dental surgery not caused by an accident or injury will not be covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p7-insr-eligi">
      <div className="p7-container">
        <div className="p7-insr-eleg-lst p7-flex-space">
          <div className="p7-insr-elgi-itm">
            <h2 className="p7-m-b-20"><b>Is your pet eligible?</b></h2>
            <p className="p7-p_1">Pet insurance is available for pets aged 2 months to 10 years, depending on the insurer. Canine insurance covers indigenous, cross-bred, and exotic dogs. Keep in mind that the premium of the insurance plan varies based on the dog's age, breed, and size.</p><br/>
            <a href="#" className="p7-psm_s">Check Eligibility</a>
          </div>
          <div className="p7-insr-elgi-itm">
            <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/eligibility1.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Inform;
