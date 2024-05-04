import "./styles.css"
import fa1 from "./assets/1fa.jpg"
import fa2 from "./assets/2fa.jpg"
import fa3 from "./assets/3fa.jpg"
import fa4 from "./assets/4fa.jpg"
import fa5 from "./assets/5fa.jpg"
import fa6 from "./assets/6fa.jpg"
import fa7 from "./assets/7fa.jpg"
import FutureHome from "./assets/future-home-vibes-adb19e98.png"
import ScandanavianBedroom from "./assets/scandinavian-bedroom-696dfba5.png"
import DeckOfDreams from "./assets/deck-of-dreams-205a139e.png"
import ServeMyDrinks from "./assets/serve-my-drinks-4de83489.png"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const index = () => {
  useEffect(() => {
    scroll()
  })

  let [scrollAmount, setScrollAmount] = useState(0)

  function setAmount(imageWidth) {
    if (scrollAmount == 0 && imageWidth == -500) {
      imageWidth = 3000
    } else if (scrollAmount == 3000 && imageWidth == 500) {
      imageWidth = -3000
    }
    setScrollAmount(scroll => scroll + imageWidth)
  }

  function navLeftButtonClick() {
    const imageList = document.querySelector('.image-listF')
    const imageWidth = imageList.offsetWidth
    setAmount(-imageWidth)
  }

  function scroll() {
    console.log(scrollAmount)
    const imageList = document.querySelector('.image-listF')
    imageList.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  function navRightButtonClick() {
    const imageList = document.querySelector('.image-listF')
    const imageWidth = imageList.offsetWidth
    setAmount(imageWidth)
    
  }
      
  return (
  <section className="section-febri" id="home">
      <main className="content-feb">
        <h1>Save <span>ideas</span> you like</h1>
        <p>
          Collect your favorit so you can <br />
          get back to them later.
        </p>
        <Link to={"/ideas"} className="cta">Explore</Link>
      </main>
      <div className="container-F">
        <div className="slider-wrapperF">
          <div className="image-listF">
            <img src={fa1} alt="1" className="image-itemF" />
            <img src={fa2} alt="2" className="image-itemF" />
            <img src={fa3} alt="3" className="image-itemF" />
            <img src={fa4} alt="4" className="image-itemF" />
            <img src={fa5} alt="5" className="image-itemF" />
            <img src={fa6} alt="6" className="image-itemF" />
            <img src={fa7} alt="7" className="image-itemF" />
            <button className="nav-left" onClick={() => {navLeftButtonClick()}}>{"<"}</button>
            <button className="nav-right" onClick={() => {navRightButtonClick()
            }}>{">"}</button>
          </div>
        </div>
        <div className="image-gallery">
          <figure className="future-home">
            <a href="#">
              <img src={FutureHome} alt="Future Home" />
              <figcaption>Fern future home vibes</figcaption>
            </a>
          </figure>
          <figure className="./assets/scandinavian-bedroom">
            <a href="#">
              <img
                src= {ScandanavianBedroom}
                alt="Scandinavian Bedroom"
              />
              <figcaption>My scandinavian bedroom</figcaption>
            </a>
          </figure>
          <figure className="theDeckOfMyDreams">
            <a href="#">
              <img
                src= {DeckOfDreams}
                alt="The Deck Of My Dreams"
              />
              <figcaption>The deck of my dreams</figcaption>
            </a>
          </figure>
          <figure className="serve-mydrinks">
            <a href="#">
              <img src={ServeMyDrinks} alt="Serve My Drinks" />
              <figcaption>Serve my drinks in style</figcaption>
            </a>
          </figure>
        </div>
      </div>
      <div className="top-border"></div>
      <div className="bottom-border"></div>
    </section>
  )
}

export default index