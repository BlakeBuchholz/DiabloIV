import React from 'react';

const Welcome = () => {
  return (
    <div>
      <section className='welcome-Section'>
        <video className='welcome-Video' autoPlay loop muted>
          <source src="./DiabloImg/Misc/d4-Launch-Masthead.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <img className="D4-Welcome-Logo" src="DiabloImg/Misc/d4-Welcome-Logo.webp" alt="" />
      </section>
      <div className='purchase-Section'>
        <h1 className=''>WELCOME TO HELL</h1>
      </div>
    </div>
  );
};

export default Welcome;
