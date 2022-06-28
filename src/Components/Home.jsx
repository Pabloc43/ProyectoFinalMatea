import React from 'react'
import LazyHero from 'react-lazy-hero';

export default function Home() {
  return (
    <div>
    <LazyHero 
    opacity={0.4}
    color={"#5438b0"}
    imageSrc="https://www.xtrafondos.com/wallpapers/resized/incendio-en-bosque-junto-al-mar-7711.jpg?s=large">
        <h1 className='text-light tuki'>Generic Startup Hype Headline</h1>
    </LazyHero>
</div>
  )
}
