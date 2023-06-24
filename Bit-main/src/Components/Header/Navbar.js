

import './Navbar.css';

var click = 0;
const navbar = () => {
    const navbar_icon_clicked = () => {
        if(click == 0){
            document.getElementsByClassName("nav-bar-icon")[0].innerHTML = "X";
            document.getElementsByClassName("navbar-in-list")[0].style["display"] = "flex";
            click++;
        }
        else{
            document.getElementsByClassName("nav-bar-icon")[0].innerHTML = "=";
            document.getElementsByClassName("navbar-in-list")[0].style["display"] = "none";
            click = 0;
        }
    }

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className='nav-list'>
                <div className='nav nav-to-icon'><a href='#NFT'>NFT</a></div>
                <div className='nav nav-to-icon'><a href='#DEX'>DEX</a></div>
                <div className='nav nav-to-icon'><a href='#ANALYTICS'>ANALYTICS</a></div>
                <div className='nav nav-to-icon mint'>MINT</div>
                <div className="nav-bar-icon" onClick={navbar_icon_clicked}>=</div>
            </div>
        </div>
    )
};

export default navbar;