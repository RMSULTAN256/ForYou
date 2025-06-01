import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Open() {
    return (
        <Fragment>
        <body className="Page-Main">
        <div className="Open-Text">
            <Link to="/lembar1" viewTransition>
            <img className="Envlope" src="https://i.pinimg.com/originals/d2/4d/48/d24d48006c777d53873392cb2b3b6f14.gif"></img>
        </Link>
        </div>
        </body>
        </Fragment>
        
    )
}

export default Open;