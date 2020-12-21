import React from 'react'
import '../styles/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt=""/>
                <div className="home__row">
                    <Product />
                    <Product />   
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    {/* <Product />   
                    <Product />       */}
                </div>
                
            </div>
        </div>
    )
}

export default Home
