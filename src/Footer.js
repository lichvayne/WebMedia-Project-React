import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './Footer.css'

function Footer(){
 return(
    <div>
    <footer class="blog-footer">
      <div className='FooterLink'>
      <p>
        <a href="#">Home</a>
      </p>
      </div>
      <div className='FooterLink'>
      <p>
        <a href="#">Properties</a>
      </p>
      </div>
      <div className='FooterLink'>
      <p>
        <a href="#">Agencies</a>
      </p>
      </div>
      <p>WebMedia Inc © 2022</p>
    </footer>
 </div>
      
 )

}

export default Footer

