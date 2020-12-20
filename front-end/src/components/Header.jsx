import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = () => {
    return (
        <div className="header">
            {/* logo */}
            <img 
                className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" />

            {/* Search */}
            <div className="header__search">
                <input 
                    className="header__searchInput" 
                    type="text"/>
                <SearchIcon  className="header__searchIcon"/>
            </div>
            {/* Nav */}
            <div className="header__nav">
                
                <div className="header__option">
                    <span className="header__optionLineOne">Users</span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo
                     header__basketCount">0</span>
                </div>
            </div>

        </div>
    )
}

export default Header
