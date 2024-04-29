import { Link } from "react-router-dom"
import "./styles.css"

const index = () => {
  return (
    <header>
      <div className="navbar-left">
        <a className="nav-icon" href="logo"><i className='bx bxl-pinterest'></i></a>

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
            <li className="nav-item"><Link to="Tentang">About</Link></li>
            <li className="nav-item"><Link to="Bisnis">Business</Link></li>
            <li className="nav-item"><Link to="Bisnis">Blog</Link></li>
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
