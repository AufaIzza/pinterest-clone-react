import ImageSection3 from "./assets/imageSection3.png"
import "./styles.css"

const index = () => {
    return (
        <section id="section3">
            <div className="containersection3">
                <div>
                    <img src={ImageSection3} alt=""/>
                </div>
                <div>
                    <div className="wrapper">
                        <div className="wrap">
                            <div>
                                <h1>See it, make it, try it, do it</h1>
                                <p>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                            </div>
                            <div className="eksplore">
                                <a href="#">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    )
}

export default index