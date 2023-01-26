import React from 'react'
import pagenotfound from '../assests/pagenotfound.jpg';

const PageNotFound = () => {
  return (
    <div className='container'>
        <div className='not-found'>
         <img src={pagenotfound} alt="not found" />
         <h2>Something Went Wrong 🙃</h2>
        </div>
    </div>
  )
}

export default PageNotFound