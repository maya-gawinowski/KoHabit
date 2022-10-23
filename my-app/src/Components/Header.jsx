import {Link} from "react-router-dom";
import logo from '../Assets/logo-site.svg'

function Header(){
    return(
        <div className="header">
            <header className="App-header">
                <Link to="/" class="logo-button" alt="Logo Ko'habit">
                    <img src= {logo} alt="Logo Ko'habit" class="logo"/>
                </Link>

                <div className="container-button">

                    <Link to="/petsitter" class="nav-button">
                        Petsitters
                    </Link>

                    <Link to="/Offers" class="nav-button">
                        Offers
                    </Link>

                    <Link to="/account" class="nav-button">
                        Account
                    </Link>



                </div>



            </header>
        </div>
    )
}

export default Header;
