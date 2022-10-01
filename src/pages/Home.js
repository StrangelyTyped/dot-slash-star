import React, { Component } from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/level/1">Level 1</Link>
                        </li>
                        <li>
                            <Link to="/level/2">Level 2</Link>
                        </li>
                        <li>
                            <Link to="/level/3">Level 3</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
  
export default Home;