import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
      <div className="SliderSize">
      <div >
      <div className="MoreProperties">
      <a href="">
      <h5>More Properties</h5>
    </a>
    </div>
        <Slider {...settings}>
          <div>
          <li class="product-item">

        <div class="product-box">

        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
          <div>
          <li class="product-item">
        <div class="product-box">
        <div class="product-img">
        <img alt="" src="https://tbilisi-property.com/wp-content/uploads/2022/01/ortachala-resort-key.jpg" height="300px" width="300px"></img>
        </div>
        <div class="product-text">
        <div class="type">
        <a href="#">კომპლექსის სახელი</a>
        <span>აღწერა</span>
        </div>
        </div>
        </div>		
      </li>
            <h3></h3>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}