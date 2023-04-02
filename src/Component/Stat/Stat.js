import React from 'react'
import icon from '../../Images/icon-detailed-records.svg';
import brandIcon from '../../Images/icon-brand-recognition.svg'
import customizeIcon from '../../Images/icon-fully-customizable.svg';

function Stat() {
  return (
    <>
   <div className='container'>
    <div className='w-75 mx-auto text-center mt-5 fs-5'>
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing  acrross the web with our advanced Statistics dashboard</p>
    </div>

    <div className='row  stat g-3 justify-content-between text-align'>
          <div className='col-10 col-sm-8 col-md-3 text-center mx-auto'>

            <div className='row bg-white'>
              <div className='col-sm-12 mt-2 col-md-12 rounded text-center'>
                <img src={brandIcon} alt="brand Icon" className='mb-img'/>
                <h4>Brand Recongnition</h4>
                <p>Boost your brand's recongnition with each click.Generic link dont mean a thing.Branded links help instil confidence 
                  in your content</p>
              </div>
            </div>
          </div>

      <div className='col-10 col-sm-12 col-md-3 mb-3 rounded mx-auto'>
          <div className='row bg-white'>
              <div className='col-sm-12 mt-2 col-md-12 rounded text-center'>
                <img src={icon} alt="detailed icon" className='mb-img'/>
                <h4>Detailed Records</h4>
                <p>Gain insights into who is clicking your links.Knowing when and where people engage with your content
                  helps inform better decisions </p>
              </div>
              </div>
              </div>

    <div className='col-10 col-sm-12 col-md-3 mx-auto'>
              <div className='row bg-white'>
              <div className='col-sm-12 col-md-12 mb3 rounded-lg mt-2 text-center'>
                <img src={customizeIcon} alt="customized icon" className='mb-img'/>
                <h4>Fully Customizable</h4>
                <p>improve brand awareness and content discoverability through customizable links, superchanging audience engagement </p>
              </div>
              </div>
              </div>
            
    </div>
   </div>
    </>
  )
}

export default Stat