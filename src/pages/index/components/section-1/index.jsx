import "./styles.css"
import Center from "./assets/center.png"
import TopRight from "./assets/top-right.png"
import Left from "./assets/left.png"
import BottomRight from "./assets/bottom-right.png"
import { Link } from "react-router-dom"

const index = () => (
<section className="container-section1">
        <div className="box-img-s1">
            <a href="">
            <div className="resep-button-s1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.832 19.641l-6.821-6.821c2.834-5.878-1.45-12.82-8.065-12.82-4.932 0-8.946 4.014-8.946 8.947 0 6.508 6.739 10.798 12.601 8.166l6.879 6.879c1.957.164 4.52-2.326 4.352-4.351zm-14.886-4.721c-3.293 0-5.973-2.68-5.973-5.973s2.68-5.973 5.973-5.973c3.294 0 5.974 2.68 5.974 5.973s-2.68 5.973-5.974 5.973z"/></svg>
                <div className="resep-text-s1">easy chicken dinner</div>
            </div>
            <div>
                <img src={Center} alt="resep ayam krispi" className="center-img-s1"/>
                <img src={TopRight} alt="resep ayam jeruk" className="top-right-img-s1"/>
                <img src={Left} alt="beberapa resep ayam" className="left-img-s1"/>
                <img src={BottomRight} alt="resep nasi ayam" className="bottom-right-img-s1"/>
            </div>
            </a>
        </div>
    <div className="container-text-s1">
            <h1>Search for an idea</h1>
            <p>What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
            <div>
              <Link to="/ideas">Explore</Link>
            </div>
    </div>
</section>

)

export default index