import React from 'react'
import './FeedDetails.css'
import './FeedBody.css'
function FeedDetails({image,description}) {
 
  return (
    <div className='body__info'>
         <img src={image} alt='waiting'/>
         <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h6>Discover Weekly</h6>
        <p>
            {description}
            </p>
      </div>
    </div>
  )
}

export default FeedDetails