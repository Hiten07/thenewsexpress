import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return(
        <div>  
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" style={{margin: "0 40px 0 20px",cursor: "default"}}>News Express</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{display: "flex",flexDirection: "center",gap: "20px"}}>
                    <li className="nav-item active"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/national">National</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/politics">Politics</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/startup">Startup</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/miscellaneous">miscellaneous</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/world">World</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/automobile">Automobile</Link></li> 
                </ul>
            </div>
            </nav>                            
        </div>
    )
}

export default Navbar;