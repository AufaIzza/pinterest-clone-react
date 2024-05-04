import image1 from '../../assets/Images/Are Shipping Containers Waterproof_.jpeg'
import image2 from '../../assets/Images/2cfd491eeda9e4ea7ae3942f00cfd759.jpg' 
import image3 from '../../assets/Images/Hanging plants.jpeg'

const index = () => {
    return(<div>
         <section className="section-1">
            <h1>Jelajahi yang terbaik di Pinterest</h1>
        </section>
        <div className="explore-container">
        <div className="explore">
        <img src= {image1} alt=""/>
        <h5 className="explore-items">Shipping Container House</h5>
        </div>

        <div className="explore">
        <img src= {image2} alt=""/>
        <h5 className="explore-items">Nail Stamping</h5>
        </div>

        <div className="explore">
        <img src= {image3} alt=""/>
        <h5 className="explore-items">Hanging Plants</h5>
        </div>
        </div>
    </div>)
}
export default index