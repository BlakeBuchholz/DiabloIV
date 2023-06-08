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
        <h1 className='welcomeToHell'>WELCOME TO HELL</h1>
        <h2 className='welcomeToHellContent'>THE GATES OF HELL HAVE OPENED, DIABLO IV IS NOW AVAILABLE</h2>
      </div>
      <div className='cinematic-Container'>
        <div className='cinematic-Trailer'>
        <img id="videoImgOverlay" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltae590eaaef770d39/6466b4e17492f54a45038622/D4_Gampeplay-Launch-Trailer_Thumb_enUS.webp" alt="cinematicTrailer"></img>
        <a href=""></a>
        </div>
        <div className='cinematic-Content'>
          <h1>ABANDON ALL HOPE</h1>
          <p>
            The endless battle between the High Heavens and the Burning Hells rages on as chaos threatens to consume Sanctuary.
            With ceaseless demons to slaughter, countless Abilities to master, nightmarish Dungeons, and Legendary loot,
            this vast, open world brings the promise of adventure and devastation. Survive and conquer darkness – or succumb to the shadows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
