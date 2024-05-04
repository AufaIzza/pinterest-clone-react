import NavBar from '../../components/navbar'
import Card from '../../components/card'
import Image1 from '../../pages/today/assets/1.jpg'

const index = () =>{
    return(
        <>
        <NavBar/>
        <Card
        image={Image1}
        categori='Trending now'
        text='Mix And Match Nail'
        />
        
        </>
    )
}
export default index;