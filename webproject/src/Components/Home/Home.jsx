import React from 'react'
import "./home.css"
import "./home.scss"

const Home = () => {
  return (
    <section className="home">
      <div className="setContainer container">
        <div className="homeText">
          <h1 className="title">
            Plan Your Trip With Yātrāvihāra
          </h1>
           <p className="subTitle">
            Travel to your favourite city with respectful of the enviroment!
           </p>
           <button className="btn">
            Explore More
           </button>
        </div>
        
        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text"  placeholder='Dream Destination'/>
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text"  placeholder='11/Meter'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text"  placeholder='400$-800$'/>
          </div>

          <button className='btn'>
            Search
          </button>
           
        </div>

      </div>
    </section>
  )
}

export default Home