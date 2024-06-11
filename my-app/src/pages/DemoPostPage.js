import React from 'react'
import MainHeader from '../components/MainHeader'
import ChatBox from '../components/ChatBox'
import "./DemoPostPage.css"

function DemoPostPage() {
  return (
    <div>
        <MainHeader />
        <Post />
        <ChatBox />

    </div>
  )
}

function Post() {
    return (
    <div className='profile-container'>
        <div className="profile-header">
            <img src='images/profile.png' alt='profile-pic'></img>
            <div className='header-text'>
                <h1>Dennis Han</h1>
                <p>Comp Sci '26</p>
            </div>
        </div>
        <div className='profile-content'>
            <div className='item-details'>
            <div className='image-price-container'>
                <img src='images/couch.png' alt='chair'></img>
                <div className='price'>FREE</div>
            </div>
                <div className='item-info'>
                    <p>Dimensions: 22' x 29'</p>
                    <p>ipsumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button class="contact-button">Contact</button>
                </div>
            </div>
            <div className='post-reviews'>
                <h2>Reviews:</h2>
                <div class="post-review">
                    <img src="review-icon.png" alt="Review Icon"></img>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="post-review">
                    <img src="review-icon.png" alt="Review Icon"></img>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="post-review">
                    <img src="review-icon.png" alt="Review Icon"></img>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default DemoPostPage