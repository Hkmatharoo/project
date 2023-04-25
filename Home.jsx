import React, { Component } from 'react'
import "./style.css"
export default class Home extends Component {
  render() {
    return (
      <>
       <section className="sctn">
        <div className="hdng">
            <h1 className="heading">WELCOME TO MS_CAKEAHOLIC !!</h1>
            <p className="para">"The Secret Ingredient in Baking is Always Love."</p>
        </div>
    </section>
    <section className="mySlides">
        {/* <!-- slideshow on front page --> */}
        <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/bg1.jpeg" className="d-block w-100" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src="/images/bg7.jpg" className="d-block w-100" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src="images/bg8.jpg" className="d-block w-100" alt="background" />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
   
      </>
    )
  }
}
