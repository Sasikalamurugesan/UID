import React from 'react';
import './Gallery.css'; 

const MarqueeCard = () => {
  return (
    <div>
         <div className='text-center mb-20'>
          <div className='text-orange font-semibold mb-3'>SERVICES</div>
</div>
    <div className="marquee-container">
      <div className="marquee-content">
      
        <div className="card">
         
          <img src="https://media.istockphoto.com/id/1143736533/photo/yorkshire-terrier-dog-at-the-grooming-salon.jpg?s=612x612&w=0&k=20&c=xqvsOB4twsfjnJY_j6xMmm1FcwkI3D2CfKKfg8aVZH0=" alt="Pet Service" />
          
        
        </div>
        <div className="card">
         
         <img src="https://img.freepik.com/premium-photo/dog-gets-hair-cut-pet-spa-grooming-salon-closeup-dog-dog-has-haircut-comb-hair-groomer-concept_96727-2558.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Pet Service" />
         
       
       </div>
       <div className="card">
         
         <img src="https://img.freepik.com/premium-photo/pomeranian-spitz-is-showering-with-shampoo-dog-bath_175086-1250.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Pet Service" />
         
      
       </div>
       <div className="card">
         
         <img src="https://img.freepik.com/free-photo/front-view-woman-blow-drying-dog_23-2149652719.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Pet Service" />
         
         
       </div>
       <div className="card">
         
         <img src="https://img.freepik.com/free-photo/washing-pet-dog-home_23-2149627259.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Pet Service" />
         
       
       </div>
       <div className="card">
         
         <img src="https://img.freepik.com/free-photo/white-fluffy-cat-veterinarian-with-cats-animals-couch_1157-46552.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Pet Service" />
         
       
       </div>
      
      </div>
    </div>
    </div>
  );
};

export default MarqueeCard;
