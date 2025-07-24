import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='nmain'>
        <div className='ul1'>
            <NavLink className='ul11' to={"/"}><h1>STYLOX</h1></NavLink>
        </div>

      <ul className='ul2'>
        
        <NavLink className='ul11' to={"/"}><li>HOME</li></NavLink>
        <li>COLLABS</li>
        <li>EVENTS</li>
        <NavLink className='ul11' to={"/blog"}><li>BLOGS</li></NavLink>
        <li>CARE</li>
         <NavLink className='ul11' to={"/user"}><button>LET IN TOUCH</button></NavLink>
      </ul>
    </div>
  )
}

export default Nav
