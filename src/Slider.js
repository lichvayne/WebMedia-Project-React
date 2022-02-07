import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PropertyImage from './Images/PropertyImage.jpg'
import './Slider.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            
          }
        },
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      
      <div className="SliderSize ">
        
      <div >
      <div className="MoreProperties">
      <a href="">
      <h5>More Properties</h5>
    </a>
    </div>
        <Slider {...settings}>
          
        <div >
       
          <li className="product-item">

        <div className="product-box">
         
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
  
          </div>
          
          <div>
          <li class="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

          </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

      </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
      </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
      </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div className="product-text">
        <div className="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
      </div>
          <div>
          <li className="product-item">
        <div className="product-box">
        <div className="product-img">
        <img alt="" src={PropertyImage} height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>

      

          </div>

        </Slider>
      </div>
      </div>
    );
  }
}