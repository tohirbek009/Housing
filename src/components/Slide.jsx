import React, { Component } from 'react'
import '../css/main.css'

export default class Slide extends Component {
    render() {
        return (
            <section id="slide">

                <div class="scroll-up-btn">
                    <i class="fas fa-angle-up"></i>
                </div>

                <div className="text">
                    <p>IT'S GREAT TO BE HOME!</p>
                    <h2>Find Your Perfect Home</h2>
                </div>
                <div className="search-sort">
                    <div className="sort">
                        <p>Buy</p>
                        <p>Rent</p>
                        <p>Sold</p>
                    </div>
                    <form className="to-find">
                        <div className="type">
                            <p>TYPE</p>
                            <select name="type" id="type" placeholder="Property Type">
                                <option value="0">firstOption</option>
                                <option value="1">secondOption</option>
                                <option value="2">thirdOption</option>
                                <option value="3">fourthOption</option>
                            </select>
                        </div>
                        <div className="location">
                            <p>LOCATION</p>
                            <select name="location" id="location" placeholder="All cities">
                                <option value="0">Toshkent</option>
                                <option value="1">Andijon</option>
                                <option value="2">Farg'ona</option>
                                <option value="3">Namangan</option>
                                <option value="4">Samarqand</option>
                                <option value="5">Jizzax</option>
                                <option value="6">Buxoro</option>
                                <option value="7">Xorazm</option>
                                <option value="8">Nukus</option>
                            </select>
                        </div>
                        <div className="search">
                            <p>SEARCH</p>
                            <div>
                                <input type="text" placeholder="Enter keywords"/>
                                <i class="ri-search-line"></i>
                            </div>
                        </div>
                        <div className="advanced-search">
                            <i class="ri-equalizer-line"></i>
                            <p>Advanced Search</p>
                        </div>
                        <button type="button" className="search-btn">
                            <i class="ri-search-line"></i>
                            <p>Search</p>
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}
