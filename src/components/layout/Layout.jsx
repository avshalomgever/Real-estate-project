import { Link, Outlet } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons' 
import {faFacebook, faInstagram, faTwitter,} from '@fortawesome/free-brands-svg-icons' 


import './layout.css'
const Layout=()=>{
    return(
        <div>
       <nav className="nav">
     <Link className="nav-headlines" to={'/'}><FontAwesomeIcon icon={faHouseChimney} size="xl" /></Link>
      <Link className="nav-headlines"  to={'/'}>Home</Link>
      <Link className="nav-headlines" to={'/products'}>Products</Link>
      <Link className="nav-headlines" to={'/about'}>About</Link>  
      <Link className="nav-headlines" to={'/products/:id'}></Link>
     
       </nav>
       <Outlet/>
       <footer className="footer">
       <Link className="nav-headlines" to={'/contact'}>Contact </Link>
       <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
       <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitter} /></a>
    
       </footer>
       </div>
    )
}
export default Layout