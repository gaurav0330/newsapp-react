import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import defaultImage1 from '../asset/image.png';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true,
        };
    }

    toggleNavbar = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #1e3c72, #2a5298)', padding: '0.5rem 1rem' }}>
                <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                    <img src={defaultImage1} alt="NewsHub" height="30" className="d-inline-block align-top mr-2" />
                    NewsHub
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={this.toggleNavbar}
                    aria-controls="navbarSupportedContent" 
                    aria-expanded={!this.state.isCollapsed} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${this.state.isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {['Home', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map((category, index) => (
                            <li className="nav-item" key={index}>
                                <Link 
                                    className="nav-link" 
                                    to={`/${category.toLowerCase()}`}
                                    style={{ fontSize: '1rem', color: '#ddd', margin: '0.25rem 0' }}
                                >
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex my-2 my-lg-0" style={{ flexGrow: 1 }}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search news..." 
                            aria-label="Search"
                            style={{ borderRadius: '20px', padding: '0.5rem' }}
                        />
                        <button 
                            className="btn btn-outline-light" 
                            type="submit"
                            style={{ borderRadius: '20px', padding: '0.5rem 1rem' }}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
