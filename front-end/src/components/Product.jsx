import React from 'react'
import "../styles/Product.css"
import StarIcon from '@material-ui/icons/Star';


const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>the Learn startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <img 
                    src="http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg" 
                    alt=""/>
            
                <button>ADD</button>
            </div>

        </div>
    )
}

export default Product
