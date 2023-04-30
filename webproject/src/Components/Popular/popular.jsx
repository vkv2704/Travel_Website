import React from 'react'
import "./popular.css"
import "./popular.scss"
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from '../../Assets/img peru.jpg'
import img4 from '../../Assets/img (5).jpg'
import img5 from '../../Assets/img (8).jpg'
import img6 from '../../Assets/img india.jpg'





const Data=[
  {
    id:1,
    imgSrc:img1,
    DestTitle:'Machu Pichhu',
    location:'Peru',
    grade:'CULTURAL RELAX',
  },
  {
    id:2,
    imgSrc:img4,
    DestTitle:'London',
    location:'Uk',
    grade:'CULTURAL RELAX',
  },
  {
    id:3,
    imgSrc:img5,
    DestTitle:'masco',
    location:'Rusia',
    grade:'CULTURAL RELAX',
  },
  {
    id:4,
    imgSrc:img6,
    DestTitle:'taj',
    location:'India',
    grade:'CULTURAL RELAX',
  },

]


const Popular = () => {
  return (
    <section className="popular section container">

      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="sectitle">
              Popular Destination
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Consequatur eaque iure vel minus ratione similique repudiandae
                commodi quod quo provident?
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icons leftIcon'/>
            <BsArrowRightShort className='icons'/>
          </div>



        </div>

      

        <div className="mainContent grid">
        

        {Data.map(( {id,imgSrc,DestTitle,location,grade})=>{
          return(
          <div className="singleDestination">
            <div className="destImage">
              <img src={imgSrc} alt="ImageTitle"/>
                <div className="overlayInfo">
                  <h3>
                  {DestTitle}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet.
                  </p>
                  
                  <BsArrowRightShort className='icon'/>
                  

                </div>
            </div>

           <div className="destFooter">

                <div className="number">
                  0{id}
                </div>
                
                <div className="destText flex">
                  <h6>
                    {location}
                  </h6>
                  <span className="flex">
                    <span className="dot">

                      <BsDot className='icon'/>
                      
                    </span>
                    Dot
                  </span> 
                </div>

          </div>

        </div>)
        })}

        </div>
      </div>
    </section> 
  )
}

export default Popular 