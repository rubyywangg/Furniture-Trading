import React from 'react'
import './Furniture.css'
import MainHeader from '../components/MainHeader'
import { Link } from 'react-router-dom'

function Furniture() {
  return (
    <div className='ListingsPage'>
        <MainHeader />
        <Listings />
    </div>
  )
}

function Listings() {
    return (
        <div class="listings-container">
        <Link to='/demoPostPage'><div class="card">
            <img src="images/couch.png" alt="Furniture"></img>
            <div class="card-body">
                <div class="card-title">Couch Chair</div>
                <div class="card-description">Used all of first year. Small ketchup stain on left arm rest.</div>
                <div class="card-price">Free</div>
            </div>
        </div></Link>
        <div class="card">
            <img src="images/plant.png" alt="Furniture"></img>
            <div class="card-body">
                <div class="card-title">Plant</div>
                <div class="card-description">Requires minimal sunlight and watering.</div>
                <div class="card-price">$50</div>
            </div>
        </div>
        <div class="card">
            <img src="images/mirror.png" alt="Furniture"></img>
            <div class="card-body">
                <div class="card-title">Body Mirror</div>
                <div class="card-description">5ft mirror. Small crack on bottom left corner.</div>
                <div class="card-price">$40</div>
            </div>
        </div>
        <div class="card">
            <img src="images/bed.png" alt="Furniture"></img>
            <div class="card-body">
                <div class="card-title">Bed Frame</div>
                <div class="card-description">Full sized bedframe. Used like new.</div>
                <div class="card-price">$150</div>
            </div>
        </div>
    </div>
    )
}

export default Furniture