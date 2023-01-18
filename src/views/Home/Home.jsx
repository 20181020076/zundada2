import React from 'react'
import './Home.scss'
import CarrouselCard from '../../components/CarrouselCard/CarrouselCard'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__recommend'>
        <div className='home__recommend__title'>
          <h1>Recomendados para ti</h1>
        </div>
        <div className='home__recommend__carrousel'>
          <CarrouselCard urlImage={"backgroundParty.jpg"} position={1}/>
          <CarrouselCard position={2}/>
          <CarrouselCard position={3}/>
          
        </div>

      </div>
      <div className="home__nextEvents">
        <h1>Próximos eventos</h1>

      </div>
      <div className="home__zones">
        <h1>Zonas</h1>

      </div>
      <div className="home__geners">
        <h1>Generos</h1>

      </div>
      <div className="home__nearly">
        <h1>Cerca de Ti</h1>

      </div>
    </div>
  )
}

export default Home;