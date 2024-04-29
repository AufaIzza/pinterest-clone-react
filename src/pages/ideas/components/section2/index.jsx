import image1 from '../../assets/Images/animals.jpeg'
import image2 from '../../assets/Images/art.jpeg'
import image3 from '../../assets/Images/beauty.jpeg'
import image4 from '../../assets/Images/Design.jpeg'
import image5 from '../../assets/Images/diy.jpeg'
import image6 from '../../assets/Images/fnb.jpeg'
import image7 from '../../assets/Images/decor.jpeg'
import image8 from '../../assets/Images/fashion.jpeg'
import image9 from '../../assets/Images/quote.jpeg'
import image10 from '../../assets/Images/tattoo.jpeg'


const index = () => {
    return (<div>
                <section className="section-2">
        <h1>Temukan Minat</h1>
        </section>
        <div className="explore-container2">
        <div className="explore2">
                <img src= {image1} alt=""/>
                <h5 className="explore-items2">Animals</h5>
        </div>    
        <div className="explore2">
                <img src= {image2} alt=""/>
                <h5 className="explore-items2">Art</h5>
        </div>    
        <div className="explore2">
                <img src= {image3} alt=""/>
                <h5 className="explore-items2">Beauty</h5>
        </div>
        <div className="explore2">
                <img src= {image4} alt=""/>
                <h5 className="explore-items2">Design</h5>
        </div>
        <div className="explore2">
                <img src= {image5} alt=""/>
                <h5 className="explore-items2">DIY and Crafts</h5>
        </div>
        <div className="explore2">
                <img src= {image6} alt=""/>
                <h5 className="explore-items2">Food and Drink</h5>
        </div>
        <div className="explore2">
                <img src= {image7} alt=""/>
                <h5 className="explore-items2">Home Decor</h5>
        </div>
        <div className="explore2">
                <img src= {image8} alt=""/>
                <h5 className="explore-items2">Men's Fashion</h5>
        </div>
        <div className="explore2">
                <img src= {image9} alt=""/>
                <h5 className="explore-items2">Quotes</h5>
        </div>
        <div className="explore2">
                <img src= {image10} alt=""/>
                <h5 className="explore-items2">Tattoos</h5>
        </div>
        
        <section className="section-3">
        <h5>Lainnya</h5>
        </section>
        </div>
    </div>)
}

export default index