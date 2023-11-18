import React,{useState} from 'react'
import hero from './assets/tour-img01 .jpg'
import './styles/places.css'
import data from './data'

const Places = () => {
  const[filter,setFilter] = useState('');
  return (
    <>

    <div>
      {data.cardData.map((item, index)=>{
        return(
          <div className='cards'>

          <img src={item.img} alt="" />
          <div className='card-body'>
  
            <h5 className='card-title'>{item.title}</h5>
            <h2 className='card-price'>{item.price}</h2>
  
          </div>
  
        </div>
        )
      })}
    
     
      </div>


    </>
  )
}

export default Places;
