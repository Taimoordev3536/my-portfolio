import React from 'react'
import Social from './Social'
import "./home.css"
import Data from './Data';
import ScrollDown from './ScrollDown';
import Tech from './Tech';
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
            <Social/>
            <div className="home_img">
            </div>
            <Data/>
            </div>
            <Tech/>
        <ScrollDown/>
      </div>
    </section>
  )
}
export default Home