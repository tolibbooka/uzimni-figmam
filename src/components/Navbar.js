import React from 'react';
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom';
import SUPPLEMENT from './SUPPLEMENT';
import LASER from './LASER';
import REVIEWS from './REVIEWS';
import JOURNAL from './JOURNAL';
import  ABOUT  from './ABOUT';



const Navbar = () => {
    return (
        <div className="navabar">
            <Router>
                <nav>
                    <ul className="nav-item">
                        <li><NavLink to='/' activeclassname='selected'>SUPPLEMENT</NavLink></ li >
                        <li><NavLink to='/LASER' activeclassname='selected'>LASER</NavLink></ li>
                        <li><NavLink to='/REVIEWS' activeclassname='selected'>REVIEWS</NavLink></ li>
                        <li><NavLink to='/JOURNAL' activeclassname='selected'>JOURNAL</NavLink></li>
                        <li><NavLink to='/ABOUT' activeclassname='selected'>ABOUT</NavLink></li>
                                <img src='./img/Group.png' alt="" />
                        <li><NavLink to='/HELPSUPPORT' activeclassname='selected'>HELPSUPPORT</NavLink></li>
                        <li><NavLink to='/ACTIVATE' activeclassname='selected'>ACTIVATE</NavLink></li>
                        <li><NavLink to='/ACCOUNT' activeclassname='selected'>ACCOUNT</NavLink></li>

                    <button className="btn">BUY</button>
                    </ul>
                    
                </nav>
                <Routes>
                    <Route path="/" element={<SUPPLEMENT />} />
                    <Route path="/Pricing" element={<LASER />} />
                    <Route path="/Integrations" element={<REVIEWS />} />
                    <Route path="/OURNAL" element={<JOURNAL />} />
                    <Route path="/ABOUT" element={<ABOUT />} />

                </Routes>
            </Router>
        </div>
    );
};
export default Navbar;