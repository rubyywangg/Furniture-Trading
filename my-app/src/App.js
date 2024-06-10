import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="images/roomie.png" alt="Roomie Resale Logo" width="65px"></img>
      <div className="header-icon-bar">
        <ul className="header-links">
          <li className="header-item">
            <a href="#insta">
              <img src="images/instagram.png" alt="Instagram" className="header-icon" />
            </a>
          </li>
          <li className="header-item">
            <a href="#link">
              <img src="images/linked.png" alt="LinkedIn" className="header-icon" />
            </a>
          </li>
          <li className="header-item">
            <a href="#twit">
              <img src="images/twitter.png" alt="Twitter" className="header-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

function MainBody() {
  return (
    <div>
      <div class="container">
        <div class="left-side">
          <p>Reliable Campus Marketplace: Buy and Sell with Confidence</p>
          <h1>ROOMIE RESALE</h1>
          <button class="cta-button">Create Account</button>
        </div>
        <div class="right-side">
          <div class="feature">
            <div class="icon location"></div>
            <img src='images/location.png' alt='location-icon'></img>
            <p>Select from Multiple Safe and Convenient Campus Locations</p>
          </div>
          <div class="feature">
            <div class="icon star"></div>
            <img src='images/review.png' alt='review-icon'></img>
            <p>View Seller Ratings and Feedback from Fellow Students</p>
          </div>
          <div class="feature">
            <div class="icon globe"></div>
            <img src='images/recycle.png' alt='recycle-icon'></img>
            <p>Promote Sustainability: Reduce Waste and Lower Your Carbon Footprint</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;

