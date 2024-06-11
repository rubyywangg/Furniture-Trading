import React from 'react'
import './MainHeader.css'

function MainHeader() {
  return (
    <div className='NavBar'>
            <nav className='nav'>
                <div className='logo-search-container'>
                    <img src='images/roomie.png' alt='logo' />
                    <div className='search-container'>
                        <input
                            type="text" 
                            placeholder="Search..." 
                            className="search-input"
                        />
                        <button className="search-button">Search</button>
                    </div>
                </div>
                <div className='nav-icons'>
                    <div className='nav-icon-item'>
                        <img src='images/saved.png' alt='saved' />
                        <p>Saved</p>
                    </div>
                    <div className='nav-icon-item'>
                        <img src='images/post.png' alt='upload' />
                        <p>Post</p>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default MainHeader