import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Open() {
    return (
        <Fragment>
        <body className="Page-Main">
        <Link to="/lembar1" viewTransition>
        <img src="https://i.pinimg.com/originals/d2/4d/48/d24d48006c777d53873392cb2b3b6f14.gif" style={
            {   
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }
        }></img>
        </Link>
        </body>
        </Fragment>
        
    )
}

export default Open;