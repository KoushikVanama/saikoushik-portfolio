const Intro = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center pb-28">
            <div className="flex flex-col p-10">
                <h1 className="lg:text-4xl text-3xl font-extrabold text-white">
                    Hello, I&apos;m <span className="text-heading-color hover:bg-white duration-1000">Sai Venkata Koushik Vanama</span>.
                </h1>
                <h3 className="lg:text-4xl text-3xl py-2 font-bold text-white">I&apos;m a full stack developer.</h3>
            </div>
            <a href="#about" className="flex justify-center p-2 my-5 text-center border-2 hover:bg-primary-color duration-700 border-white w-[8rem] h-[3rem] text-white text-xl">
                About me
            </a>
        </div>
    )
}

export default Intro;
