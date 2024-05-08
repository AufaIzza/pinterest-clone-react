
const index = ({image, smalltext, text}) => {
    return(
        <div className="p-[8px] w-[444px] h-[333px] object-cover object-top rounded-[20px] bg-[linear-gradient(rgb(0,_0,_0),_rgb(0,_0,_0))]" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`}}>
            <div className="h-full flex flex-col items-center p-[20px] justify-end">
                <p className="font-normal text-[white] text-[16px] text-center">{smalltext}</p>
                <p className="text-[28px] font-semibold text-[white] text-center">{text}</p>
            </div>
        </div>
    )
}

export default index
