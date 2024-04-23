import NavBar from "../../components/navbar/index"
import Hero from "./components/hero/index"
import Section1 from "./components/section-1/index"
import Section2 from "./components/section-2/index"
import Section3 from "./components/section-3/index"
import Section4 from "./components/section-4/index"

const index = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default index
