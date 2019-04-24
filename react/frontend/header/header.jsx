import React from 'react';

import {NrNavMenu} from 'nodereactor/react';

import './style.scss';

const Header=()=>
{
    return(
        <header id="masthead" className="site-header semp-header">
            <div className="site-branding">
                <p className="site-title"><a href="http://localhost/w5/" rel="home">NR</a></p>
                <p className="site-description">Just another WordPress site</p>
            </div>
            
            <div style={{'clear':'both'}}>
                {/* <NrNavMenu id="test_nav_menu"/> */}
                <nav id="menu">
                    <label for="tm" id="toggle-menu">Navigation <span className="drop-icon">▾</span></label>
                    <input type="checkbox" id="tm"/>
                    <ul className="main-menu clearfix">
                        <li><a href="#">Sample</a></li>
                        <li>
                            <a href="#">2-level DD 
                                <span className="drop-icon">▾</span>
                                <label title="Toggle Drop-down" className="drop-icon" for="sm1">▾</label>
                            </a>
                            <input type="checkbox" id="sm1"/>
                            <ul className="sub-menu">
                                <li><a href="#">Item 2.1</a></li>
                                <li><a href="#">Item 2.2
                                    <span className="drop-icon">▾</span>
                                    <label title="Toggle Drop-down" className="drop-icon" for="sm2">▾</label>
                                </a>
                                <input type="checkbox" id="sm2"/>
                                <ul className="sub-menu">
                                    <li><a href="#">Item 2.2.1</a></li>
                                    <li><a href="#">Item 2.2.2</a></li>
                                    <li>
                                        <a href="#">Item 2.2
                                        <span className="drop-icon">▾</span>
                                        <label title="Toggle Drop-down" className="drop-icon" for="sm2ff">▾</label>
                                        
                                <input type="checkbox" id="sm2ff"/>

                                        <ul className="sub-menu">
                                            <li><a href="#">Item 2.1</a></li>
                                            <li><a href="#">Item 2.2
                                                <span className="drop-icon">▾</span>
                                                <label title="Toggle Drop-down" className="drop-icon" for="sm3">▾</label>
                                            </a>
                                            <input type="checkbox" id="sm3"/>
                                            <ul className="sub-menu">
                                                <li><a href="#">Item 2.2.3331</a></li>
                                                <li><a href="#">Item 2.2.2</a></li>
                                                <li><a href="#">Item 2.2.3</a></li>
                                            </ul>
                                            </li>
                                            <li><a href="#">Item 3.4</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                </li>
                                <li><a href="#">Item 3.4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Another Sample</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export {Header}