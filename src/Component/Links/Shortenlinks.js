import React, {useEffect,useState} from 'react'
import CopyToClipboard from "react-copy-to-clipboard";



function Shortenlinks() {

const [links, setlinks] = useState([]);
  const [Value, setValue] = useState('')
  const [Clipbtn, setClipbtn] = useState(false)

  const Handleclick = (e) =>{
    e.preventDefault();
    getdata();
  //  console.log(links);
  }


 const getdata=async() => {
   const res=await fetch(`https://api.shrtco.de/v2/shorten?url=${Value}`)
   const data=await res.json();
   //console.log(data.result);
   setlinks(data.result);
 }
  
  
  console.log(links.original_link);



 




  // const getdata = async()=>{
    // const data=await fetch(`https://api.shrtco.de/v2/shorten?url=${linkbtn}`)
    // const res=await data.json();
    // setlinks(res);

  // }



 // const Fetchlinks= async()  => {
  //  let data=await fetch(`https://api.shrtco.de/v2/shorten?url=${linkbtn}`)
//let res=await data.json();
   // return res;
  //}

 

  return (
    <>
    <div className='container'>
       <div className='links'>
       <div className='row d-flex mt-5 input-g justify-content-center'>


<div className=' col-sm-8 col-md-7 '>
      <input className='form-control p-3' value={Value} onChange={e=>(setValue(e.target.value))}/>
</div>

 <div className='col-sm-12 col-md-5'>
  <button className='p-3  border-0 btns' onClick={Handleclick}>Shorten it</button>
</div>

  

 
</div>
      </div>


    <div className='row mt-5'>
           <div className='col-xs-12 col-sm-6 col-md-12'>
                <div className='row'>
                      <div className='col-12 bg-success inline d-flex justify-content-between text-white p-3  rounded'>
                           <p>{links.full_short_link}</p>
                           <CopyToClipboard text={links.full_short_link}>
                           <button className='rounded text-white  p-2 clip-btn' 
                           onClick={(e) => (setClipbtn(!Clipbtn))}>{Clipbtn ? 'copied' : 'copy'}</button>
                           </CopyToClipboard>
                      </div>
                   
                </div>
           </div>
          

 
           
          
      </div>





      </div>

    
    

    </>
  )
  }

export default Shortenlinks