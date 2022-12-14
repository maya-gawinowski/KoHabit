import {Link} from "react-router-dom";
import logo from '../Assets/logo-site.svg'

function Header(){
    const pathname = window.location.pathname;

    console.log(pathname);

    return(
        <div className="header" style={{
            position : pathname ==='/' ? 'absolute' : 'relative',
        }}>
            <header className="App-header">
                <Link to="/" class="logo-button" alt="Logo Ko'habit">
                    <img src= {logo} alt="Logo Ko'habit" class="logo"/>
                </Link>

                <div className="container-button">

                    <Link to="/petsitter" class="nav-button">
                        Petsitters
                    </Link>

                    <Link to="/Animals" class="nav-button">
                        Animals
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
