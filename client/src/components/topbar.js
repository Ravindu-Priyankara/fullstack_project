import React from 'react'
import './topbar.css'

export default function Topbar() {
  return (
    <div>
        <nav class="nav">
          <i class="uil uil-bars navOpenBtn"></i>
          <a href="#" class="logo">Ravindu Priyankara</a>

          <ul class="nav-links">
            <i class="uil uil-times navCloseBtn"></i>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <i class="uil uil-search search-icon" id="searchIcon"></i>
          <div class="search-box">
            <i class="uil uil-search search-icon"></i>
            <input type="text" placeholder="Search here..." />
          </div>

        </nav>
    </div>
  )
}
