
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
                                        <label className=" text-left ml-2 mb-1 text-sm text-stone-950" htmlFor="email">Email</label>
                                        <input className="text-left w-[268px] h-8 text-base rounded-2xl py-3 px-4 border-solid border-slate-300 text-stone-950" type="email" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label className=" text-left ml-2 mb-1 text-sm text-stone-950" htmlFor="password">Password</label>
                                        <input className="text-left w-[268px] h-8 text-base rounded-2xl py-3 px-4 border-solid border-slate-300 text-stone-950" type="password" name="password" id="password"
                                            placeholder="Create a password"/>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <label className=" text-left ml-2 mb-1 text-sm text-stone-950" htmlFor="birthdate">Birthdate</label>
                                        <input className="text-left w-[268px] h-8 text-base rounded-2xl py-3 px-4 border-solid border-slate-300 text-stone-950" type="date" name="birthdate" id="birthdate"/>
                                    </div>
                                    <button type="submit" className="border-[0px] h-[30px] inline-block rounded-[20px] antialiased px-[18px] py-0 text-[15px] font-bold cursor-pointer mt-[8px] align-middle text-center text-[rgb(255,_255,_255)] w-full bg-[#e60023]"
                                    >Continue</button>
                                </form>
                                <p>OR</p>
                                <button className="border-[0px] h-[30px] inline-block rounded-[20px] antialiased px-[18px] py-0 text-[15px] font-bold cursor-pointer mt-[8px] align-middle text-center text-[rgb(255,_255,_255)] w-full bg-[rgb(24,_119,_242)] "
                                    id="container-login-inside-upper-form-button-facebook">Continue with
                                    Facebook</button>
                                <button className="h-[30px] inline-block rounded-[20px] antialiased px-[18px] py-0 text-[15px] font-bold cursor-pointer mt-[8px] align-middle text-center w-full bg-[rgb(255,_255,_255)] text-[rgb(60,_64,_67)] border-[2px] border-solid border-[rgb(218,_220,_224)]"
                                    id="container-login-inside-upper-form-button-google">Continue with
                                    Google</button>
                            </div>
                            <h6 className="antialiased text-[11px] font-normal text-center text-[rgb(118,_118,_118)]">By continuing, you agree to Pinterest's</h6>
                            <h6 className="antialiased text-[11px] font-normal text-center text-[rgb(118,_118,_118)]"><a className="no-underline font-bold text-[rgb(17,_17,_17)]" href="">Terms of Service</a> and acknowledge you've read our</h6>
                            <h6 className="antialiased text-[11px] font-normal text-center text-[rgb(118,_118,_118)]"><a className="no-underline font-bold text-[rgb(17,_17,_17)]" href="">Privacy Policy</a>, <a className="no-underline font-bold text-[rgb(17,_17,_17)]" href="">Notice at collection</a>.</h6>
                            <br/>
                            <h6 className="antialiased text-[11px] font-normal text-center text-[rgb(118,_118,_118)]">Already a member? <a className="no-underline font-bold text-[rgb(17,_17,_17)]" href="">Log in</a></h6>
                        </div>

                        <a href="" className="h-[62px] font-semibold text-[16px] no-underline text-center">
                            <div className="pt-[15px] pb-[15px] h-[62px] bg-[#e9e9e9] text-center rounded-tl-none rounded-br-[32px] rounded-tr-none rounded-bl-[32px] text-[rgb(60,_64,_67)] flex justify-center items-center">
                                Create a free business account
                            </div>
                        </a>
                    </div>
                </section>
    )
}

export default index