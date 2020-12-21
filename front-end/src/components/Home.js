import React from 'react'
import '../styles/Home.css'
import Product from './Product'

const products = {
    product1 : {
        id: 1,
        title: 'the Linux start' ,
        price: 29.99,
        image: 'http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg' ,
        rating: 5,
    },
    product2 : {
        id: 2,
        title: 'the Linux start' ,
        price: 29.99,
        image: 'http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg' ,
        rating: 5,
    },
    product3 : {
        id: 3,
        title: 'the Linux start' ,
        price: 29.99,
        image: 'http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg' ,
        rating: 5,
    },
    product4 : {
        id: 4,
        title: 'the Linux start' ,
        price: 29.99,
        image: 'http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg' ,
        rating: 5,
    },
    product5 : {
        id: 5,
        title: 'the Linux start' ,
        price: 29.99,
        image: 'http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg' ,
        rating: 5,
    }
}

const Home = () => {


    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt=""/>
                <div className="home__row">
                    <Product 
                        title={products.product1.title} 
                        price={products.product1.price} 
                        image={products.product1.image}
                        rating={products.product1.rating}
                    />
                    <Product 
                        title={products.product2.title} 
                        price={products.product2.price} 
                        image={products.product2.image}
                        rating={products.product2.rating}/>   
                </div>
                <div className="home__row">
                    <Product 
                        title={products.product3.title} 
                        price={products.product3.price} 
                        image={products.product3.image}
                        rating={products.product3.rating}
                        />
                    <Product 
                        title={products.product4.title} 
                        price={products.product4.price} 
                        image={products.product4.image}
                        rating={products.product4.rating}
                    />
                    <Product 
                        title={products.product5.title} 
                        price={products.product5.price} 
                        image={products.product5.image}
                        rating={products.product5.rating}
                    />
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
