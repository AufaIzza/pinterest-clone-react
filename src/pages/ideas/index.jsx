import NavBar from '../../components/navbar/index'
import Section1 from './components/section1/index'
import Section2 from './components/section2/index'
import Section3 from './components/section3/index'
import './style.css'

const index = () => {
    return (<div>
        <NavBar/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>)
}

export default index