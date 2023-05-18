import React from 'react'


const Welcome = () => {
  return (
    <section className='welcome-Section'>
        <video className='welcome-Video'>
            <source src='./public/DiabloImg/d4welcomebg.mp4' type='video/mp4'/>
        </video>
        <img class="D4-Welcome-Logo" src="public\DiabloImg\d4-Welcome-Logo.webp" alt="" />
    <div className='server-Slam'>
        {/* <img className='leather-Background' src="./public/DiabloImg/Leathertexture/leather-texture_800.webp" alt="leather-Background" /> */}
    </div>
    </section>
  )
}

export default Welcome