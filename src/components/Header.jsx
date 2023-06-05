import React from 'react'

const Header = () => {
  return (
    <header className='primary-Header'>
        <div className='navbar'>
            <div className='primary-Header_inner'>
                <div class='company-Logo-Container'>
                <img class='company-Logo' src='/DiabloImg/LHRYDNJ5UI2FD.info/Company-Logo.png' alt="company-Logo" />
                </div>
                <img class='diabloIV-logo' src='/DiabloImg/Misc/diablo-IV-nav-logo.webp' alt="diablo4-nav-Logo" />
                <ul className='nav-List'>
                  <li><a href="#">Overview</a></li>
                  <li><a href="#">Story</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Classes</a></li>
                  <li><a href="#">World</a></li>
                  <li><a href="https://eu.forums.blizzard.com/en/d4/">Forums</a></li>
                  <li className='gear-Nav-Button'><a href="#">...</a></li>
                </ul>
                <ul className='nav-Account'>
                  <li><a href="#">Account</a></li>
                  <li><a className='pre-Purchase-Button' href="#">Pre-Purchase</a></li>
                </ul>
            </div>
        </div>
    </header>
)}

export default Header