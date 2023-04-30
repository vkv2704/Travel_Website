import React from 'react'
import "./about.css"
import "./about.scss"
import img1 from '../../Assets/hiking1.jpg'
import img2 from '../../Assets/custumer.jpg'
import img3 from '../../Assets/mountain.jpg'
import video from '../../Assets/videomp4.mp4'


const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hiking?
        </h2>
      
          <div className="mainContent container">
            <div className="singleItem">
              <img src={img3} alt="mountain" />
              <h3>
                100+ Mountains
              </h3>
              <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being. 
              </p>
            </div>

            <div className="singleItem">
              <img src={img1} alt="hiking" />
              <h3>
                500+ Hikings
              </h3>
              <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being. 
              </p>
            </div>


            <div className="singleItem">
              <img src={img2} alt="customer" />
              <h3>
                3000+ Customer
              </h3>
              <p>
              Research shows that a chance to break away from the normal rhythms of 
              daily life reduces stress and improves health and well-being. 
              </p>
            </div>


          </div>

          <div className="videoCard container">
            <div className="cardContent grid">
              <div className="cardText">
              <h2>
                Wonderful House experience in there!
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Vel beatae labore possimus?
              </p>
              </div>

              <div className="cardVideo">
                <video src={video} autoPlay loop muted type="videomp4/mp4"></video>
              </div>
              
            </div>
          </div>



      </div>
    </section>
  )
}

export default About
