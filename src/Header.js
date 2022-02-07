import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import WebmediaLogo from './Images/Logo.png'
import './Header.css';


function Header1(){
  
    return (
      
        
        <div >
            
          <nav className='navbar navbar-expand-lg  NavColor '>
  <div className="container-fluid astyle">
  <a class="navbar-brand" href="#">
      <img src={WebmediaLogo} alt="" width="200" height="40" class="d-inline-block align-text-top"></img>
    </a>
    <button className="navbar-toggler Button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active astyle" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link astyle" href="#">Properties</a>
        </li>
        <li className="nav-item">
          <a className="nav-link astyle" href="#">Agencies</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </div>
  
    )
    
}




export default Header1