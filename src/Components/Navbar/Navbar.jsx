import './Navbar.css'
import nike_logo from '../../assets/homeimg/nik-logo.png'
import search_icon from '../../assets/homeimg/search-icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'><img src={nike_logo} alt="" /></Link>

      </div>

      <div className="centre">
        <li><Link to='/newfeatured'>New & Featured</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
        <li><a href="">Sale</a></li>
        <li><a href="">Customise</a></li>
        <li><a href="">SNKRS</a></li>
      </div>

      <div className="right">
        <div className="search">
        <img src={search_icon} alt="Search" className="search-icon" />

          <input type="text" placeholder='Search' />
          
          
        </div>

        <div className="cart">
          <li><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></li>
          <Link to='/cart'><li><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></li></Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar