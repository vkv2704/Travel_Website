import React from 'react'
import "./offer.css"
import "./offer.scss"
import { MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md';
import { FaWifi} from 'react-icons/fa';
import { MdAirportShuttle} from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import img5 from '../../Assets/img shimla.jpg'
import img6 from '../../Assets/img haridwar.jpg'
import img7 from '../../Assets/img peris.jpg'



const Data =[
  {
    id:1,
    imgSrc:img5,
    DestTitle:'Shimla',
    location:'India',
    price:'$700',

  },

  {
    id:2,
    imgSrc:img6,
    DestTitle:'Haridwar',
    location:'India',
    price:'$700',

  },

  {
    id:3,
    imgSrc:img7,
    DestTitle:'Peris',
    location:'France',
    price:'$700',

  },


]


const Offer = () => {
  return (
    <section className="offer container seection">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum dignissimos quia.
          </p>
        </div>

        <div className="mainContent grid">


        

          {Data.map(({id,imgSrc,DestTitle,location,price}) => {
              return(
                <div className="singleOffer">
                    <div className="destImage">
                      <img src={imgSrc} alt={DestTitle} />
                      <span className="discount">
                        30% Off
                      </span>
                    </div>
  
                    <div className="offerBody">
                      <div className="price flex">
                        <h4>
                          {price}
        
                        </h4>
                        <span className='status'>
                          For Rent
                        </span>
                      </div>
                      <div className="amenities flex">
                        <div className="singleAmenities flex">                     
                          <MdKingBed className='icon'/>
                          <small>
                            2 Beds
                          </small>
                        </div>
        
                        <div className="singleAmenities flex">                     
                          <MdBathtub className='icon'/>
                          <small>
                          Bathing 
                          </small>
                        </div>
        
                        <div className="singleAmenities flex">                     
                          <FaWifi className='icon'/>
                          <small>
                          Wifis
                          </small>
                        </div>
        
                        <div className="singleAmenities flex">                     
                          <MdAirportShuttle className='icon'/>
                          <small>
                            Transport
                          </small>
                        </div>
                      </div>
      
                      <div className="location flex">
                        <MdLocationOn className='icon'/>
                        <small>
                          {DestTitle} ,{location}
                        </small>
                      </div>
      
                      <button className="btn flex" >
                        View Details
                        <BsArrowRightShort className='icon'/> 
                      </button>
      
                    </div>
                </div>
                )
            })}


        </div>
      </div>
    </section>
    
  )
}

export default Offer