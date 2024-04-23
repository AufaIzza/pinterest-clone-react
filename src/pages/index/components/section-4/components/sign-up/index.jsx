import "./styles.css"

const index = () => {
    return (
        <section class="login-section">
                    <div id="container-login-section">
                        <div id="container-login-inside-upper">
                            <i class="fa fa-pinterest container-login-inside-upper-logo"></i>
                            <h1 class="container-login-inside-upper-big-font">Welcome to Pinterest</h1>
                            <p>Find new ideas to try</p>
                            <div id="container-login-inside-upper-form">
                                <form action="" method="post">
                                    <div class="container-login-inside-upper-form-input">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div class="container-login-inside-upper-form-input">
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password"
                                            placeholder="Create a password"/>
                                    </div>
                                    <div class="container-login-inside-upper-form-input">
                                        <label for="birthdate">Birthdate</label>
                                        <input type="date" name="birthdate" id="birthdate"/>
                                    </div>
                                    <button type="submit" class="container-login-inside-upper-form-button"
                                        id="container-login-inside-upper-form-button-continue">Continue</button>
                                </form>
                                <p>OR</p>
                                <button class="container-login-inside-upper-form-button"
                                    id="container-login-inside-upper-form-button-facebook">Continue with
                                    Facebook</button>
                                <button class="container-login-inside-upper-form-button"
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