const index = ({category, description, backgroundImage}) => {
    return <div className="card-category" style={{backgroundImage}}>
        <div className="semi-transparent-black">
            <div className="category-card-contents">
                <h5>{category}</h5>
                <h2>{description}</h2>
                <button>See Videos</button>
            </div>
        </div>
    </div>
}

export default index;