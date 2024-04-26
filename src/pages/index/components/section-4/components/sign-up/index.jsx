import "./styles.css"

const index = () => {
    return (
        <section className="login-section">
                    <div id="container-login-section">
                        <div id="container-login-inside-upper">
                            <i className="fa fa-pinterest container-login-inside-upper-logo"></i>
                            <h1 className="container-login-inside-upper-big-font">Welcome to Pinterest</h1>
                            <p>Find new ideas to try</p>
                            <div id="container-login-inside-upper-form">
                                <form action="" method="post">
                                    <div className="container-login-inside-upper-form-input">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div className="container-login-inside-upper-form-input">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password"
                                            placeholder="Create a password"/>
                                    </div>
                                    <div className="container-login-inside-upper-form-input">
                                        <label htmlFor="birthdate">Birthdate</label>
                                        <input type="date" name="birthdate" id="birthdate"/>
                                    </div>
                                    <button type="submit" className="container-login-inside-upper-form-button"
                                        id="container-login-inside-upper-form-button-continue">Continue</button>
                                </form>
                                <p>OR</p>
                                <button className="container-login-inside-upper-form-button"
                                    id="container-login-inside-upper-form-button-facebook">Continue with
                                    Facebook</button>
                                <button className="container-login-inside-upper-form-button"
                                    id="container-login-inside-upper-form-button-google">Continue with
                                    Google</button>
                            </div>
                            <h6>By continuing, you agree to Pinterest's</h6>
                            <h6><a href="">Terms of Service</a> and acknowledge you've read our</h6>
                            <h6><a href="">Privacy Policy</a>, <a href="">Notice at collection</a>.</h6>
                            <br/>
                            <h6>Already a member? <a href="">Log in</a></h6>
                        </div>

                        <a href="" id="container-login-inside-lower-text">
                            <div id="container-login-inside-lower">
                                Create a free business account
                            </div>
                        </a>
                    </div>
                </section>
    )
}

export default index