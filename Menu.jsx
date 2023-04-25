import React from 'react'
import "./style.css"
import images from '../images/m3.jpg';
class Menu extends React.Component {
    render() {
        return (
            <>
                <section className="flex">
                    <div className="menuIcon-container">
                        <img className='menuimg' src={images} alt="menu" height={200} width={200} />
                        <h2 className='menu-logo'>MENU</h2>
                    </div>
                </section>
                <section className="mainContainer">
                    <span className="itemContainer">
                        <div className="menubox">
                            <div className="box">
                                <img className="cake-img" src="/images/heart-cake.png" alt="drycake" />
                                    DRY CAKES
                            </div>
                            <div className="box">
                                <img className="cake-img" src="/images/cake.png" alt="cake" />
                                    CAKES
                            </div>
                            <div className="box">
                                <img className="cake-img" src="/images/cupcake2.png" alt="cupcake" />
                                    CUPCAKES
                            </div>
                            <div className="box">
                                <img className="cake-img" src="/images/cheesecake.png" alt="cheesecake" />
                                    CHEESECAKES
                            </div>
                        </div>
                    </span>
                </section>

            </>

        )
    }
}

export default Menu;