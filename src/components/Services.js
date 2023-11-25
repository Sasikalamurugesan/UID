import React from 'react';
import './Services.css'; // Import your CSS file
import Header from './Header';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="services-container">
        <div className="services-content">
        <div className="services-text">
    <h1 className="m-b-10" style={{fontSize:'50px'}}>Groomers Make Pets Sparkle</h1><br/>
    <p className="m-b-10" style={{fontSize:'25px'}}>Illuminate the beauty of your pet with easy groomer booking nearby</p><br/>
    <Link to="/Form" className="book-button">View Package</Link>
  </div>
        </div>
        <div className="services-image">
        
        </div>
      </div>
      <div className="client-quot-sec">
      <div className="s1 container">
        <div className="quot-slider">
          <div className="quot-slider-cord">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot1.png" alt="img" />
            </div>
            <h6 className="p_1s">
              <b>Raj</b> just Quoted <span>649/-</span><br/> for <b>Dog Grooming</b> In <b>Vikaspuri</b>
            </h6>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="quot-slider-cord">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot2.png" alt="img" />
            </div>
            <h6 className="p_1s">
              <b>Rao</b> just Quoted <span>349/-</span><br/> for <b>Dog Grooming</b> In <b>Marathalli</b>
            </h6>&nbsp;&nbsp;
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="quot-slider-cord">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot3.png" alt="img" />
            </div>
            <h6 className="p_1s">
              <b>Ken </b> just Quoted <span>744/-</span><br/> for <b>Dog Grooming</b> In <b>Vikroli</b>
            </h6>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="quot-slider-cord">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot4.png" alt="img" />
            </div>
            <h6 className="p_1s">
              <b>Div </b> just Quoted <span>649/-</span> for <br/><b>Dog Grooming</b> In <b>Mallpur</b>
            </h6>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="quot-slider-cord">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-17.png" alt="img" />
            </div>
            <h6 className="p_1s">
              <b>Gir</b> just Quote<span>1299/-</span> for <br/>Pet Boarding    Kormangala
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="tr-features-sec grm-features-sec">
      <div className="s1 container">
        <div className="tr-features-cnt flex-space">
          <div className="tr-feat-lft">
            <div>
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/groom-ser-left.jpg" alt="svg" />
            </div>
          </div>
          <div className="tr-feat-ryt">
            <h2 className="m-b-30"><b>Our Handpicked Groomers Meet Your Pet Needs</b></h2>
            <div className="tr-services">
              <div className="tr-services-cord flex-start">
                <div className="tr-cord-img ">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/trf-service1.svg" alt="svg" />
                </div>
                <div className="tr-cord-mtr">
                  <p className="nmr_pp">Book a Top Rated Groomer Near You</p>
                  <p className="sm_1">Find a dog groomer nearby, select the best groomer based on budget and top ratings.</p>
                </div>
              </div>
              <div className="tr-services-cord flex-start">
                <div className="tr-cord-img ">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/trf-service2.svg" alt="svg" />
                </div>
                <div className="tr-cord-mtr">
                  <p className="nmr_pp">Personalized Grooming Packages</p>
                  <p className="sm_1">Customize your dog grooming packages to match your pet's needs.</p>
                </div>
              </div>
              <div className="tr-services-cord flex-start">
                <div className="tr-cord-img r">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grmin-service3.svg" alt="svg" />
                </div>
                <div className="tr-cord-mtr">
                  <p className="nmr_pp">Groomer With Full Accessories</p>
                  <p className="sm_1">Just relax! A professional pet groomer brings all the necessary grooming equipment.</p>
                </div>
              </div>
              <div className="tr-services-cord flex-start">
                <div className="tr-cord-img ">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/trf-service4.svg" alt="svg" />
                </div>
                <div className="tr-cord-mtr">
                  <p className="nmr_pp">Grooming Service at Your Place</p>
                  <p className="sm_1">Enjoy the convenience of in-home grooming, reducing travel stress for your pet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hpyns-sec">
      <div className="s1 container">
        <h2><b>Happiness Guarantee</b></h2>
        <div className="hpyns-sec-cnt">
          <div className="hpyns-slider">
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy1.svg" alt="img" />
                </div>
               
       <div className="hpyns-cord-matr">
       <h6 className="nmr_pp">Secure Payment</h6>
       <p className="ps_1">Petsfolio, holds funds until the job is done, paying pet masters only upon completion of service</p>
     </div>
  <div className="hpyns-img">
    <video width="100%" height="100%" autoPlay loop muted>
      <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/secure-pmnt.mp4" type="video/mp4" />
    </video>
  </div>
</div>

              </div>
            
            <div className="hpyns-cords flex-center">
  <div className="hpyns-cords-img">
    <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy2.svg" alt="img" />
  </div>
  <div className="hpyns-cord-matr">
    <h6 className="nmr_pp">Pay As You Go</h6>
    <p className="ps_1">Pay for only what you use with our popular and flexible payment option.</p>
  </div>
  <div className="hpyns-img">
    <video width="100%" height="100%" autoPlay loop muted>
      <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/payasugo.mp4" type="video/mp4" />
    </video>
  </div>
</div>

            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy3.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">Industry Lowest Prices</h6>
                  <p className="ps_1">Our pet services have the industry's lowest cost, providing value to pet parents and carers.</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/idtry-lst-prcs.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy4.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">Pet Insurance with Services</h6>
                  <p className="ps_1">Ensure your pet's safety with included insurance coverage when you book Petsfolio services</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/insrnc.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy5.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">Verified Pet Masters</h6>
                  <p className="ps_1">We personally verify and train all pet-masters to provide the best care for your pet.</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/vrfied-app.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy6.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">50000+ Happy customers</h6>
                  <p className="ps_1">Petsfolio is loved for providing professional pet masters, competitive prices, and commitment to pets and owners</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/hpy-ctmrs.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy7.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">Customized Packages</h6>
                  <p className="ps_1">Customize your service package to fit your specific needs when booking with us.</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/cust-pkgs.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div>
              <div className="hpyns-cords flex-center">
                <div className="hpyns-cords-img">
                  <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/happy8.svg" alt="img" />
                </div>
                <div className="hpyns-cord-matr">
                  <h6 className="nmr_pp">Mobile App Service Tracking</h6>
                  <p className="ps_1">Our mobile app allows you to track your pet, manage payments, and enjoy other hassle-free advantages.</p>
                </div>
                <div className="hpyns-img">
                  <video width="100%" height="100%" autoPlay loop muted>
                    <source src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/mbl-app.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="tr-options">
      <div className="s1 container">
        <h2 className="m-b-30" style={{alignItems:'center'}}><b>Explore Dog Grooming Options for Your Pet</b></h2>
        <div className="tr-option-list flex-space m-b-40">
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service1.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Spa <br /> Bath</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service2.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Full <br /> Grooming</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service3.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Hair <br /> Cut</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service4.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Stylish <br /> Hair Cut</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service5.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Anti-Tick <br /> Treatment</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service6.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Body <br /> Massage</p>
            </div>
          </div>
          <div className="tr-opt-cords">
            <div className="tr-opt-crd-img m-b-40">
              <img src="https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-service7.svg" alt="img" />
            </div>
            <div className="tr-opt-crd-mtr">
              <p className="p_1">Knots/Mats <br /> Removal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
   
   
   
  );
};

export default Services;
