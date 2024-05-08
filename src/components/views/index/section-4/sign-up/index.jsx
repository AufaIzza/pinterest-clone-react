import "./styles.css"

const index = () => {
    return (
        <section className="login-section">
                    <div className="w-[484px] text-center m-auto relative bg-white shadow-md rounded-[32px]">
                        <div className="min-h-[400px] pt-5 pr-[10px] pb-6">
                            <i className="fa fa-pinterest text-5xl text-red-600"></i>
                            <h1 className=" text-3xl mt-0 mr-auto mb-1">Welcome to Pinterest</h1>
                            <p className=" text-base mt-0 mr-auto mb-5">Find new ideas to try</p>
                            <div className="text-center m-auto mb-3 w-[268px]">
                                <form action="" method="post">
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password"
                                            placeholder="Create a password"/>
                                    </div>
                                    <div className="flex flex-col mb-2">
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