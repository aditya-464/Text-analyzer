import React from 'react'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(props) {
    function setColor(clr) {
        document.body.style.backgroundColor = clr;
        document.body.style.color = "white";
        var navBar = document.getElementsByClassName("navbar")[0];
        navBar.classList.add("bg-dark");
        navBar.classList.add("navbar-dark");
        colorDivsBorder();
    }
    function colorDivsBorder() {
        var clrDivs = document.querySelectorAll(".color-div");
        clrDivs.forEach((clrDiv) => {
            clrDiv.style.border = "2px solid white";
        })
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <to className="nav-link" href="/about">{props.about}</to>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Web Developement</a></li>
                                    <li><a className="dropdown-item" href="#">Android Developement</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Tech blogs</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="color-mode-div">
                    <div className="color-palet">
                        <div className="color-div color1" onClick={() => { setColor(props.clrArray[0]) }}></div>
                        <div className="color-div color2" onClick={() => { setColor(props.clrArray[1]) }}></div>
                        <div className="color-div color3" onClick={() => { setColor(props.clrArray[2]) }}></div>
                        <div className="color-div color4" onClick={() => { setColor(props.clrArray[3]) }}></div>
                        <div className="color-div color5" onClick={() => { setColor(props.clrArray[4]) }}></div>
                    </div>
                    <div className="form-check form-switch toggle-btn">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={() => { props.toggleMode(); colorDivsBorder() }} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: 'Stranger',
//     aboutContact : 'okFriends'
//   };

