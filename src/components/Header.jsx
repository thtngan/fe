import React from 'react';


const Header = () =>{
    return(
        <>
            <div className="header">
                <div className="logo">
                    <h1>Midterm Project</h1>
                </div>
                <nav className="navigation">
                    <ul>
                        <li> <a href="/">Animal </a></li>
                        <li> <a href="/">Nature </a></li>
                        <li> <a href="/">Science </a></li>
                        <li> <a href="/">About</a></li>
                        <li> <a href="/">Contact</a></li>
                    </ul>
                </nav>
                <button className="btn">Log In</button>
            </div>
        </>
        )

}

export default Header;
