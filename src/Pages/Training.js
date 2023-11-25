import React, { useRef } from 'react';
import Header from '../components/Header';
import './training.css'; 

const Training = () => {

  const trainingImageRef = useRef(null);

  return (
    <div className="main-container">
      <Header /><br/><br/><br/><br/>
      <div>
       
        <img
          ref={trainingImageRef}
          src="https://img.freepik.com/premium-vector/happy-girl-playing-with-dog-pet-young-woman-shepherd-doggy-friend-jump-play-ball_88272-3195.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais"
          alt="Pet Training"
          className="training-image"
        />
      </div>
      <div className="training-content">
        <p className="p5p_12">
          Dog training service specializes in tackling challenges faced by pet parents, such as addressing concerns like how to stop puppy biting, and guiding them effectively through successful toilet training for developing good toilet habits. Our experienced and certified dog trainers undergo a comprehensive onboarding procedure as part of our canine dog training program. They skillfully address intricate issues by curbing dog biting tendencies, implementing effective dog potty training techniques, mitigating dog separation anxiety, tackling dog aggression issues, and promoting pet socialization.
        </p>
        <p className="p5p_12">
        Our tailored programs encompass a wide range of canine education, covering aspects from puppy training to dog potty training, ensuring that you can train your dog effectively. We cater to various breeds and ages, such as Shih Tzu, German Shepherds, Golden Retrievers, Rottweilers, Labradors, and Dobermans. Our approach involves equipping pet parents to actively engage in the training journey, fostering a strong bond between dogs and their Hoomans.
        </p>
      </div><br/><br/>
      <div>
        <h1 style={{textAlign:'center',fontSize:'20px'}}><b>Importance of professional Training</b></h1><br/><br/>
        <img src='https://kuddle.pet/_next/image?url=%2Fimages%2Fbehaviourist%2Fdog_behaviourist_importance.webp&w=1920&q=75' alt="Importance of Training" />
      </div><br/><br/><br/>
      <section className="p4why-ned-insr">
        <div className="p4container">
          <div className="p4whyned-txt">
            <h2 className="p4"><b>OUR TRAINING PROGRAMS</b></h2><br/>
            <br/>
          </div>
          <div className="p4whyned-lst p4flex-container">
            <div className="p4whyned-itm">
              <div className="p4whyned-img">
                <img src="https://kuddle.pet/_next/image?url=%2Fimages%2Fbehaviourist%2FourPrograms%2Fobedience-training.png&w=256&q=75" alt="Obedience Training" className="p4" />
              </div><br/><br/><br/>
              <p className="p4psm_s">Obedience training</p><br/>
              <p className="p4p_1">This program helps strengthen the bond with your furry companion and unlock their full potential!</p>
            </div>
            <div className="p4whyned-itm">
              <div className="p4whyned-img">
                <img src="https://kuddle.pet/_next/image?url=%2Fimages%2Fbehaviourist%2FourPrograms%2Fleash-training.png&w=256&q=75" alt="Leash Training" className="p4" />
              </div><br/><br/>
              <p className="p4psm_s">Leash training</p><br/>
              <p className="p4p_1">Transform your pet's walking habits and enjoy peaceful strolls and events together!</p>
            </div>
            <div className="p4whyned-itm">
              <div className="p4whyned-img">
                <img src="https://kuddle.pet/_next/image?url=%2Fimages%2Fbehaviourist%2FourPrograms%2Fpuppy-board-training.png&w=256&q=75" alt="Puppy Board Training" className="p4" />
              </div><br/><br/>
              <p className="p4psm_s">Puppy board training</p><br/>
              <p className="p4p_1">Give your puppy the best start in life by shaping them into a well-behaved and confident companion.</p>
            </div>
            <div className="p4whyned-itm">
              <div className="p4whyned-img">
                <img src="https://img.freepik.com/premium-vector/man-training-german-shepherd-outdoors-down-command_641042-61.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais" alt="Customized Training" className="p4" />
              </div>
              <p className="p4psm_s">Customized training</p><br/>
              <p className="p4p_1">Address your dog's specific training needs head-on with our customized training plan!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
