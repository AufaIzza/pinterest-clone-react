import { Link } from "react-router-dom"
import "./styles.css"

const index = () => {
  return (
    <header>
      <div className="navbar-left">
        <Link className="nav-icon" to={"/"}><i className='bx bxl-pinterest'></i></Link>

        <div className="navbar">
          <ul className="navlist-left">
            <li className="nav-item"><Link to="/today">Today</Link></li>
            <li className="nav-item"><Link to="/watch">Watch</Link></li>
            <li className="nav-item"><Link to="/ideas">Explore</Link></li>
          </ul>
        </div>
      </div>

        <div className="navbar-right">
          <ul className="navlist-right">
          </ul>

          <div className="button">
            <button className="login">Log in</button>
            <button>Sign up</button>
          </div>
        </div>
        <div className="menu-toggle">
          <i className='bx bx-menu'></i>
        </div>
    </header>
  )
}

export default index
