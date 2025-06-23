import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import logo_ from './logo_3.png'; 
import './navigation.styles.scss';

const Navigation = () => 
{
    return (
        <div>
        <header className="navigation-header">
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                     <img src="https://i.imgur.com/ABY36uM.jpeg" alt="Logo" className="logo" />    
                     <span> Your Adventure AI</span> {/*your travelling companion */}                  
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/blog">blog</Link>
                    <Link className="nav-link" to = "/contact">contact us</Link>
                    <Link className="nav-link" to = "/about-us">about us</Link>
                    <Link className="nav-link" to = "/faq">Faq</Link>
                    <Link className="button-element" to = "/sign-in">sign up</Link>
                </div>
            </div>
            
        </Fragment>
        
        </header>
        <Outlet/>
        </div>
    )
}

export default Navigation;