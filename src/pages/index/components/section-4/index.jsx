import "./styles.css"
import SignUp from "./components/sign-up/index"

const index = () => {
    return (
      <section id="section4">
        <div class="bg-dark-transparent">
            <div class="auth-container">
                <div class="auth-jumbotron">
                    <h2>Sign up to get<br/>your ideas</h2>
                </div>
                <SignUp/>
            </div>
        </div>
      </section>
    )
}

export default index