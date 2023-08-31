import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
    <Navbar />
    <div className='flex justify-center items-center flex-col h-[60dvh] gap-y-7'>
        <h1 className='text-4xl font-bold tracking-widest'>About us</h1>
        <p className='w-[40rem] text-lg font-light tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
</div>
    </div>
  )
}

export default About