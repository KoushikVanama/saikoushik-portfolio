import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-[8rem] gap-x-5 bg-zinc-800">
                <div className="flex justify-center items-center w-12 h-12 bg-slate-900">
                    <a href="https://www.linkedin.com/in/koushikvsv/" target="_blank">
                        <Linkedin strokeWidth={2} className="w-6 h-6 text-primary-color" />
                    </a>
                </div>
                <div className="flex justify-center items-center w-12 h-12 bg-slate-900">
                    <a href="https://github.com/KoushikVanama" target="_blank">
                        <Github strokeWidth={2} className="w-6 h-6 text-primary-color" />
                    </a>
                </div>
                <div className="flex justify-center items-center w-12 h-12 bg-slate-900">
                    <a href="https://twitter.com/sai_vsv" target="_blank">
                        <Twitter strokeWidth={2} className="w-6 h-6 text-primary-color" />
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center text-white/80 py-5 bg-zinc-800">
                <p>&copy; Copyright 2023 - All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;
