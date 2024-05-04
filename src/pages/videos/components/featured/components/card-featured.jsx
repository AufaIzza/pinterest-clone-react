const index = ({backgroundImage, duration, title, category}) => {
    return <div className="card-featured">
        <div className="card-featured-image" style={{backgroundImage}}>
            <div className="card-featured-duration">
                <p>{duration}</p>
            </div>
        </div>
        <p className="card-featured-title">{title}</p>
        <p className="card-featured-category">{category}</p>
    </div>
}

export default index;