
import logo from '../../images/logo_medimart.png';
import '../css/nav.css';



function Nav (){
    return (
    <div id='Navbar'>
        <header className="Nav-Header">
            <div className='logo-section'>
                <img className="logo" src= {logo} alt="" />
            </div>
            <div className="nav-item">
                <ul className='item-name'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Hot Deal</a></li>
                    <li><a href="#">Contuct</a></li>
                    <li>
                        <form>
                            <input type="text" />
                        </form>
                    </li>
                </ul>
            </div>
            <div className="addTocart">
                <ul className='addTocart-items'>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Add To cart</a></li>
                </ul>
            </div>
        </header>
    </div>
    );
}

export default Nav;