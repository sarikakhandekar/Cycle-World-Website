import {} from 'react'
import "./Navbar1.css";
import { FaStar } from "react-icons/fa6";

const Navbar1 = () => {
  return (
    <div className='Navbar1'>
      <div className='Logo'>
       
         <div className="logo">
  CYCLE <span>WORLD</span><FaStar style={{color:"yellow", backgroundColor:"black", fontSize:"30px", marginTop:"90px",marginRight:"-310px"  }} className='icon1'/>
</div>
      </div>
       <div className='Logo1'>
        <img src='https://lekeamp.com/wp-content/uploads/2023/03/4.png'/>
      </div> 
     
    </div>
  )
}

export default Navbar1
