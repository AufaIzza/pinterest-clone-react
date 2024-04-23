import { Link } from "react-router-dom"
import "./styles.css"

const index = () => {
  return (
    <header>
      <div class="navbar-left">
        <a class="nav-icon" href="logo"><i class='bx bxl-pinterest'></i></a>

        <div class="navbar">
          <ul class="navlist-left">
            <li class="nav-item"><Link to="/today">Today</Link></li>
            <li class="nav-item"><Link to="/watch">Watch</Link></li>
            <li class="nav-item"><Link to="/explore">Explore</Link></li>
          </ul>
        </div>
      </div>

        <div class="navbar-right">
          <ul class="navlist-right">
            <li class="nav-item"><Link to="Tentang">About</Link></li>
            <li class="nav-item"><Link to="Bisnis">Business</Link></li>
            <li class="nav-item"><Link to="Bisnis">Blog</Link></li>
          </ul>

          <div class="button">
            <button class="login">Log in</button>
            <button>Sign up</button>
          </div>
        </div>
        <div class="menu-toggle">
          <i class='bx bx-menu'></i>
        </div>
    </header>
  )
}

export default index
