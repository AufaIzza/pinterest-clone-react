const index = ({duration, backgroundImage}) => {
    return <div className="card-browse">
    <div className="card-browse-image" style={{backgroundImage}}>
        <div className="card-browse-duration">
            <p>{duration}</p>
        </div>
    </div>
</div>
}

export default index;