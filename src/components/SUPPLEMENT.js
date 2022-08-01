import React from 'react';
import Ikki from './img/ikki2.svg'

const SUPPLEMENT = () => {

    return (
        <div>
            <div className="home">
                <h1>THE FUTURE OF WELLNESS.</h1>
                <p>The perfect balance of science, nature and technology. <br /> Prepare to look and feel your absolute best.</p>
                <button className='btn3'>SUPPLEMENT</button>
                <button className='btn4'>LASER</button>
            </div>
            <div className="bir">
                <div className="card1">
                    <h1>Supplement.</h1>
                    <h4>Nine powerful ingredients.</h4>
                    <p>One ultimate formula.</p>
                    <button className="btn5">DISCOVER</button>
                    <button className="btn6">BUY</button>
                </div>

                <div className="card2">
                    <h1>Laser.</h1>
                    <h4>Ultimate skin regeneration.</h4>
                    <p>A new dawn for beauty.</p>
                    <button className="btn5">DISCOVER</button>
                    <button className="btn6">BUY</button>
                </div>
            </div>

            <div className="ikki">
                <h1>THE QUEST FOR BETTER.</h1>
                <img src={Ikki} alt="" />
                <p>At LYMA, were always searching for the perfect balance of science, <br /> nature and technology. Every LYMA product has been designed to <br /> work together. We know that when we discover the best, youll <br /> discover yours.</p>
            </div>

            <div className="home2">
                <h1>THE FUTURE OF WELLNESS.</h1>
                <p>The perfect balance of science, nature and technology. <br /> Prepare to look and feel your absolute best.</p>
                <button className='btn3'>SUPPLEMENT</button>
                <button className='btn4'>LASER</button>
            </div>
            <div className="uchinchi">
                <h1>Meet our founder.</h1>
                <p>Lucys story is one you really need to read; it <br /> changed an industry forever.</p>
                <button className="btn7">READ MORE</button>
            </div>
            <div className="futer">
                <div className="futer2">
                    <h3>SUPPLEMENT</h3>
                    <p>Benefits</p>
                    <p>Formula</p>
                    <p>Immunity</p>
                    <p>Journal</p>
                    <p>Reviews</p>
                    <p>Buy</p>
                </div>

                <div className="futer2">
                    <h3>LYMA LASER</h3>
                    <p>LYMA Laser</p>
                    <p>Active Mist</p>
                    <p>Priming Serum</p>
                    <p>Technology</p>
                    <p>Results</p>
                    <p>Journal</p>
                    <p>Reviews</p>
                    <p>Buy</p>
                </div>
                <div className="futer2">
                    <h3>ABOUT</h3>
                    <p>About</p>
                    <p>Journal</p>
                    <p>FAQs</p>
                    <p>Contact</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Warranty</p>
                </div>
                <div className="futer2">
                    <h3>ACCOUNT</h3>
                    <p>Activate</p>
                    <p>My subscription</p>
                    <p>Add extras</p>
                    <p>My orders</p>
                    <p>Account details</p>
                    <p>Payment method</p>
                    <p>Login details</p>
                </div>
                <div className="futer2">
                    <h3>NEWSLETTER</h3>
                    <h4>Subscribe to our newsletter.</h4>
                    <div className="inputlar">
                    <input type="text"placeholder='LYMA Newsletter' />
                    <button>SIGN UP</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SUPPLEMENT;