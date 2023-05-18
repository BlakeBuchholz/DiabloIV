import React from 'react'

const Header = () => {
  return (
    <header className='primary-Header'>
        <div className='wrapper'>
            <div className='primary-Header_inner'>
                <div class='company-Logo-Container'>
                <img class='company-Logo' src='public/DiabloImg/LHRYDNJ5UI2FD.info/Company Logo.png' alt="company-Logo" />
                </div>
                <img class='diabloIV-logo' src='public\DiabloImg\diablo-IV-nav-logo.webp' alt="diablo4-nav-Logo" />
                <ul className='nav-list'>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Classes</a></li>
                    <li><a href="#">World</a></li>
                    <li><a href="#">Story</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Forums</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Pre-Purchase</a></li>
                </ul>
            </div>
        </div>
    </header>
)}

export default Header