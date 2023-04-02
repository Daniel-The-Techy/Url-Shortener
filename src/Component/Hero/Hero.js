import React from 'react'
import illustration from '../../Images/illustration-working.svg';

function Hero() {
  return (
    <>
    <div className='container'>
  <div className='row justify-content-between'>
    <div className='col-sm-12 col-md-6 head'>
              <div className='row'>
         <div className='col-sm-12 col-md-12'>
      <h1 className='w-100 text'>More than just Shorter links.</h1>
      </div>
      <div className='col-12 col-sm-12 col-md-10'>
      <p className='text-gray text-center text-p mt-4 w-100'>Build your brand's recongnition and get detailed insights on how your link are performing</p>
      </div>
      <div className=' col-xs-12 col-sm-12 col-md-10 text-center text-btn'>
      <button className='text-white w-50 border-0 p-3 btn rounded'>Get Started</button>
      </div>
      </div>
     


      </div>

      <div className='col-sm-12 col-md-6'>
      <img src={illustration} alt='hero image'/>
     </div>

    </div>
  </div>


  </>

  )
}

export default Hero