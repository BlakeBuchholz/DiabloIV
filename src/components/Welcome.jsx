import React from 'react';

const Welcome = () => {
  return (
    <section className='welcome-Section'>
        <video className='welcome-Video'>
        <source src="\DiabloImg\Misc\d4-Welcome-BG.mp4" type="video/MP4" autoplay loop muted
        />
        Sorry, your browser doesn't support videos.
        </video>
        <img class="D4-Welcome-Logo" src="public/DiabloImg/Misc/d4-Welcome-Logo.webp" alt="" />
    </section>
  )
}

export default Welcome