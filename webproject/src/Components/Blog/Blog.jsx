import React from 'react'
import "./blog.css"
import "./blog.scss"
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../Assets/img peris.jpg'
import img2 from '../../Assets/ams.jpg'
import img3 from '../../Assets/img (8).jpg'
import img4 from '../../Assets/img (10).jpg'


const blogs=[
  {
    id:1,
    imgSrc:img1,
    name:'Paris.',
    Title: 'The City of Love and Lights.',
    Description: 'Paris is known for its romantic ambiance, stunning architecture, and famous landmarks like the Eiffel Tower and the Louvre Museum.',
  },

  {
    id:2,
    imgSrc:img2,
    name:'Amsterdam',
    Title: 'Canals, Culture, and Coffee Shops.',
    Description: 'Amsterdam is a charming city with picturesque canals, world-class museums, and a relaxed attitude towards cannabis.', 


  },
  {
    id:3,
    imgSrc:img3,
    name:'Russia.',
    Title: 'Where History and Culture Collide.',
    Description: 'Russia is a vast country filled with diverse landscapes, incredible art, and a rich history that spans from ancient times to the modern era.',

  },

  {
    id:4,
    imgSrc:img4,
    name:'Sweden',
    Title: 'The Land of the Midnight Sun and Design.',
    Description: 'Sweden is a Scandinavian country with a thriving design scene, natural beauty, and a unique culture that celebrates the summer solstice with the famous midnight sun.',
  }

]

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2>
            Our Best Blog
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mainContainer grid">
              
          {
            blogs.map(({id,imgSrc,name,Title,Description})=>{
              return(
                <div className="singlePost">
                <div className="imgDiv">
                  <img src={imgSrc} alt="" />
                </div>
                <div className="postDetails">
                  <h3>{Title}</h3>
                  <p>
                   {Description}
                  </p>
                

                  <a href="#" className='flex'>
                  <BsArrowRightShort className='icon'/>
                  Read More</a>
                </div>
              </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Blog