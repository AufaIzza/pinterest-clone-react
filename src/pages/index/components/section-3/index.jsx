import { Link } from "react-router-dom"
import ImageSection3 from "./assets/imageSection3.png"

const index = () => {
    return (
        <section id="section3" >
           <div className="flex items-center bg-[#FFE2EB] flex-wrap">
            <div className="image sm:w-full md:w-full  lg:w-1/2">
                <img src={ImageSection3} alt="" />
            </div>
            <div className="lg:text text-center w-[450px] px-[32px] mx-auto text-[#C32F00] sm:py-[100px]">
                <h1 className="text-[60px] font-bold pb-[21px]">See it, make it, try it, do it</h1>
                <p className="text-[23.81px] pb-[21px]">The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                <a className="text-white rounded-full text-[16px] font-semibold px-6 py-3 bg-[#E60023]" href="#">explore</a>
            </div>
           </div>
          </section>
    )
}

export default index