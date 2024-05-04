import NavBar from '../../components/navbar/index'
import Category from '../videos/components/category/index'
import Featured from '../videos/components/featured/index'
import Browse from '../videos/components/browse/index'
import './style.css'

const index = () => {
    return <div>
        <NavBar />
        <Category />
        <Featured />
        <Browse />
    </div>
}

export default index;