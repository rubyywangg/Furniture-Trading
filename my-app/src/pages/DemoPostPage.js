import React from 'react'
import MainHeader from '../components/MainHeader'
import ChatBox from '../components/ChatBox'
import "./DemoPostPage.css"

function DemoPostPage() {
  return (
    <div>
        <MainHeader />
        <Post />

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
            </div>
                <div className='item-info'>
                    <div className='price'>FREE</div>
                    <p className='dimensions'>Dimensions: 22' x 29'</p>
                    <p>I'm selling my beloved couch chair that has served me well through many late-night study sessions and Netflix binges. Here are the details:</p>
                    <ul>
                        <li>Condition: Gently used, still super comfy!</li>
                        <li>Material: Soft fabric that's easy to clean</li>
                        <li>Comfort: Cushions are still firm and supportive, perfect for relaxing after a long day of classes</li>
                    </ul>
                    <p>I’m offering this gem for FREE because I’m moving and can’t take it with me. It’s perfect for any student apartment or dorm room. Pick-up only. Feel free to contact me if you have any questions or want to see more pictures!</p>
                    <button class="contact-button">Contact</button>
                </div>
            </div>
            <div className='post-reviews'>
                <h2>Reviews</h2>
                <div class="post-review">
                    <div class="review-icon-container">
                        <img src="images/review1.png" alt="Review Icon"></img>
                        <h3>Mandy</h3>
                    </div>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="post-review">
                    <div class="review-icon-container">
                        <img src="images/review2.png" alt="Review Icon"></img>
                        <h3>James</h3>
                    </div>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="post-review">
                    <div class="review-icon-container">
                        <img src="images/review3.png" alt="Review Icon"></img>
                        <h3>Daphne</h3>
                    </div>
                    <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='chat-box'><ChatBox /></div>
        </div>
    </div>
    )
}


export default DemoPostPage