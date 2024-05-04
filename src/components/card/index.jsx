import './style.css'
const index = (props) => {
    const image = props.image;
    const categori = props.categori;
    const text = props.text;
    return(
        <>
        <div className='containerToday'>
        <img src={image} alt="" />
        <p>{categori}</p>
        <h1>{text}</h1>
        </div>
        </>
    )
}
export default index;