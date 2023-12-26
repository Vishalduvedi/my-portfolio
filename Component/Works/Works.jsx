import React from 'react'
import './Works.css'
import anime from '../../image/anime.png'
import cat from'../../image/cat.png'
import dog from '../../image/dog.png'
import girl from '../../image/girl.png'
import men from '../../image/men.png'
import rabit from '../../image/rabit.png'
const Works = () => {
  return (
  <section id="work">
    <h2 className="workstittle">My Protfile</h2>
    <span className='worksdesc'>Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum possimus accusantium tempore hic aliquam fuga soluta maxime, quisquam vitae iste reprehenderit est ea consequatur nobis nemo rem distinctio molestiae rerum?</span>
    <div className="worksimgs">
        <img src={anime} alt="anime" className="worksimg" />
        <img src={cat} alt="cat" className="worksimg" />
        <img src={dog} alt="dog" className="worksimg" />
        <img src={girl} alt="girl" className="worksimg" />
        <img src={men} alt="men" className="worksimg" />
        <img src={rabit} alt="rabit" className="worksimg" />
    </div>
    <button className="worksbtn">See More</button>
  </section>
  )
}

export default Works
