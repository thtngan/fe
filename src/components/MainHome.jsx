import React from 'react';
import Api from "./Api.jsx";


function MainHome () {
    return(
        <>
        <div className="mainHome">
            <div className="col">
                <h2>Search some thing with </h2>
                <p>Your keyword</p>
                <button type="button" className="btn">More</button>
            </div>
            <div className="body">
                <div className="col">
                    <div className="card" >
                        <Api />
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}



export default MainHome;
