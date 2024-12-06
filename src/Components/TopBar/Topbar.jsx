import './Topbar.css'
import  jordan_logo from '../../assets/homeimg/jordan-logo.png'
const Topbar = () => {
  return (
    <div className='topbar'>

        <div className="jdlogo">
        <img src={jordan_logo} alt="" />
        </div>



 

 <div className="right">
    <ul>
        <li><a href="">Find a Store</a></li>
        <li>|</li>
        <li><a href="">Help </a></li>
        <li>|</li>
        <li><a href="">Join Us</a></li>
        <li>|</li>
        <li><a href="">Sign In</a></li>
    </ul>

        </div>  
    </div>
  )
}

export default Topbar