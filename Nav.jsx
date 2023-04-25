import React, { Component } from 'react'
import "./style.css"

export default class Nav extends Component {
    render() {
        return (
            <>
                <section>
                    <nav className="myNav">
                        <ul className='ul'>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#about">ABOUT US</a></li>
                            <li><a href="#menu">MENU</a></li>
                            <div className="btn-group" role="group">
                                <li data-bs-toggle="dropdown">
                                    <a href="#gallery">GALLERY <span><i className="fa-solid fa-caret-down"></i></span></a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-items">Dry Cakes</li>
                                        <li className="dropdown-items">Birthday Cakes</li>
                                        <li className="dropdown-items">Anniversary Cakes</li>
                                        <li className="dropdown-items">Kids Theme</li>
                                        <li className="dropdown-items">Cupcakes</li>
                                        <li className="dropdown-items">CheeseCakes</li>
                                        <li className="dropdown-items">Others</li>
                                    </ul>
                                </li>
                            </div>
                            <img className="logo" src="/images/ms cakeaholic2.jpg" width="100px" height="100px" />
                            <li><a href="#review">REVIEWS</a></li>
                            <li><a href="#shop">SHOP</a></li>
                            <li><a href="#contact us">CONTACT US</a></li>
                            <li><i className="fa-sharp fa-solid fa-cart-shopping favicon hovering"></i></li>
                            <div className="btn-group">
                                <li data-bs-toggle="dropdown">
                                    <i className="fa-solid fa-user favicon hovering"> <i className="fa-solid fa-caret-down"></i></i>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-items">Login</li>
                                        <li className="dropdown-items">Signup</li>
                                        <li className="dropdown-items">My Account</li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </nav>

                </section>

            </>
        )
    }
}
