import "./styles.css"

const index = ({image, smalltext, text}) => {
    return(
        <div className="todayi-card-div" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`}}>
            <div className="todayi-card-text-div">
                <p className="todayi-card-smalltext">{smalltext}</p>
                <p className="todayi-card-text">{text}</p>
            </div>
        </div>
    )
}

export default index
