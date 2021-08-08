import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div class='container-fluid'>
            <nav class='navbar navbar-inverse'>
                <div class='container-fluid'>
                    <ul class='nav navbar-nav'>
                        <li>
                            <Link to='/' id='len1' class='hoverable'>
                                Hjem
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' id='len2' class='hoverable'>
                                OM MEG
                            </Link>
                        </li>
                        <li>
                            <Link to='/video' id='len3' class='hoverable'>
                                VIDEO PORTEFØLJE
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
