
import {BsGeoAlt,BsCheckCircle,BsPeopleFill, BsSearch,BsStar} from 'react-icons/bs';
import './styles/searchbar.css'
import { useState } from 'react';
import data from './data';
import './styles/places.css'
import Services from './sevices';


const Searchbar = () => {
  const[filter,setFilter] = useState('');

  const searchText = (event) =>{
    setFilter(event.target.value);

  }
 let dataSearch = data.cardData.filter(item => {
  return Object.keys(item).some(key =>
  item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
   )

 })
 if (dataSearch.length === 0) {
  dataSearch = data.cardData;
}

    return (
      <>
      <div className="locationspot">
            <span>Location</span>
            </div>
            <BsGeoAlt className="locationicon" />

            <div className="distancespot">
            <span>Distance</span>
            </div>
            <BsCheckCircle className="distanceicon" />

            <div className="peoplespot">
            <span>Max People</span>
            </div>
            <BsPeopleFill className="peopleicon" />

            <div className="search">
                     
    <input
      type="text"
      name="keyword"
      placeholder= "where are you going?"
      id="search-bar"
      value={filter}
      onChange={searchText.bind(this)}
    />
    
  
    <input
      type="number"
      name="location"
      placeholder="Distance km/h"
      id="search-bar"
      
    />
    <input
      type="number"
      name="category"
      placeholder="0"
      
    />
    <button  className="btn"><BsSearch/></button>
    </div>
  

  <Services />

      <h3 className='explore'>Explore</h3>
  <h1 className='featured'>Our featured tours</h1>

  <div className='card-container'>
  {dataSearch.map((item, index) => (
    <div className='cards' key={index}>
      <img src={item.img} alt="" />
      <div className='card-body'>
        
      <h3 className='rating'><span className='star'><BsStar/></span>{item.rating}</h3>
      <h4 className='card-place'><span className='geo'><BsGeoAlt/></span>{item.place} </h4>
        <h6 className='card-title'>{item.title}</h6>
      <button className='bookbtn' >Book <br /> Now</button>

        <h5 className='card-price'>{item.price}</h5>
       
        
        <h3 className='person'>/per <br />person</h3>

        
      </div>
    </div>
  ))}
     
      </div>

      <div>
        
      </div>

      </>
      )
      }
export default Searchbar;