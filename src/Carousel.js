import 'bootstrap/dist/css/bootstrap.min.css';
import  SliderImage1 from './Images/slider-image1.jpg'
import  SliderImage2 from './Images/slider-image2.jpg'
import  SliderImage3 from './Images/slider-image3.jpg'
import './Header.css'
function Carousel(){


    return(
        <div>
            <div className='CarouselSize'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={SliderImage1} className="d-block w-100 img" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='Carouseltext1'>Webmedia</h5>
        <p className='Carouseltext1'>A digital agency specializing in: web design, web application development, UX / UI design, optimization and digital marketing.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={SliderImage2} className="d-block w-100 img" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
      <h5 className='Carouseltext2'>Webmedia</h5>
        <p className='Carouseltext2'>A digital agency specializing in: web design, web application development, UX / UI design, optimization and digital marketing.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={SliderImage3} className="d-block w-100 img" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
      <h5 className='Carouseltext3'>Webmedia</h5>
        <p className='Carouseltext3'>A digital agency specializing in: web design, web application development, UX / UI design, optimization and digital marketing.</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
        )
}

export default Carousel