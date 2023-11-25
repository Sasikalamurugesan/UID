import React from 'react';


import './Events.css';
import Header from '../components/Header';

const BlogPage = () => {
  const s= {
     
    fontSize: '24px',
    textDecoration:'italic',
    marginRight:"370px"
   
  };
  return (
    
    <div className="blog-page">
    <Header/><br/>
    <br/><br/><br/><br/>
      <div className="descriptionB">
        
        <br/> <br/><h1 style={{marginTop:"100px" ,marginRight:"300px",letterSpacing:"8.4px",fontSize:"40px",   color:"rgb(20, 20, 88)"}}><b>Explore Our Blog to Get to Know <br/>Our Pet Grooming World!</b></h1><br/>
        <p style={s}>
        <i>"Dive into the exciting world of pet grooming by exploring our blog.<br/> Uncover the story of how we bring out the best in every furry friend through<br/> our grooming services and commitment to their well-being."</i></p><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>  <br/><br/><br/><br/>
      </div><br/><br/>
      <br/>
      <h4 style={{justifyContent:"center",fontSize: '20px',paddingLeft:"80px",paddingRight:"80px"}}><b>Nurturing Your Pet's Well-Being from Fur to Paws</b></h4><br/>
      <p style={{alignItems:"center",justifyContent:"center",fontSize: '20px',paddingLeft:"80px",paddingRight:"80px"}}><i>Owning a pet comes with its fair share of responsibilities, and one crucial aspect is grooming. Regular grooming not only keeps your furry friend looking adorable but also plays a vital role in their overall health and well-being. In this guide, we'll walk you through the basics of pet grooming, from brushing and bathing to nail trimming and ear cleaning.</i></p><br/><br/>
      <div className="grid-container1">
        <div className="grid-item1">
          <div className="video-container">

            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="video-text-overlay">
              <h2><i>Clipping & Styling</i></h2>
             
            </div>
          </div>
        
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo5.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Hand Stripping</i></h2>
              
            </div>
          </div>

        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo4.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Nails Clipped</i></h2>
              
            </div>
          </div>
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo33.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo33.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Fancy Fur Coloring</i></h2>
             
            </div>
          </div>
          
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo22.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo22.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Manicure</i></h2>
           
            </div>
          </div>
         
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo11.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo11.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Coat Treatment</i></h2>
              
            </div>
          </div>
          
        </div>
      </div>
   
    </div>
  );
};

export default BlogPage;
