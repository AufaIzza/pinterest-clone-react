import { Link } from "react-router-dom"


const index = () => {
  return (
    <header className="flex px-[2%] py-px fixed w-full bg-[white] shadow-xl z-[100]">
      <div className="mr-auto flex justify-center items-center">
        <Link className="cursor-pointer mr-auto text-[red] text-[60px]" to={"/"}><i className='bx bxl-pinterest'></i></Link>

        <div className="navbar">
          <ul className="flex items-center no-underline list-none">
            <div className="flex gap-[40px] px-[40px] py-0">
            <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full"><Link to="/today">Today</Link></li>
            <li className="after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full"><Link to="/watch">Watch</Link></li>
            </div>
          </ul>
        </div>
      </div>
          <div className=" flex justify-center items-center">
            <ul>
              <li className="mr-[40px] after:content-[''] after:h-[2px] after:w-[0] after:bg-[black] after:block after:opacity-0 after:[transition:.4s] hover:after:opacity-100 hover:after:w-full"><Link to="/ideas">Explore</Link></li>
            </ul>
            <button className="px-[25px] py-[9px] bg-[red] text-[white] border-[none] rounded-[50px] cursor-pointer hover:bg-[rgb(192,_2,_2)]">Log in</button>
            <button className="px-[25px] py-[9px] bg-[#D8D5D4] border-[none] rounded-[50px] cursor-pointer ml-[10px] hover:bg-[#b4b3b3]">Sign up</button>
          </div>
    </header>
  )
}

export default index
