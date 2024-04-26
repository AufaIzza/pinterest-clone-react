import "./styles.css"
import SignUp from "./components/sign-up/index"

const index = () => {
    return (
      <section id="section4">
        <div className="bg-dark-transparent">
            <div className="auth-container">
                <div className="auth-jumbotron">
                    <h2>Sign up to get<br/>your ideas</h2>
                </div>
                <SignUp/>
            </div>
        </div>
      </section>
    )
}

export default index