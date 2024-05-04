import { Link } from "react-router-dom"
import "./styles.css"

const index = () => {
    return (
        <footer>
        <div>
          <Link to={"/today"}>Today</Link>
          <Link to={"/ideas"}>Explore</Link>
          <Link to={"/watch"}>Watch</Link>
        </div>
      </footer>
    )
}

export default index