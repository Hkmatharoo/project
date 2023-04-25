import React, { Component } from 'react'
import drycake from '../images/drycake1.jpg'

export default class Gallery extends Component {
  render() {
    return (
      <>
        <section>
          <h1></h1>
          <div className="container">
            <img src={drycake} alt="drycake" height={300} width={500} />
            <div class="overlay">OATS DATE CAKE <i className="fa-solid fa-heart like"></i><i class="fa-solid fa-square-plus like"></i></div>
          </div>
        </section>
      </>
    )
  }
}
