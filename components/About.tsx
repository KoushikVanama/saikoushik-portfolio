const About = () => {
    return (
        <div className="flex flex-col lg:h-[100vh]">
            <div className="text-center font-bold text-zinc-800 mt-10 text-2xl">ABOUT</div>
            <div className="self-center w-12 border-zinc-600 border-b-4 py-1"></div>
            <div className="flex lg:px-12 m-12 flex-col lg:flex-row gap-y-10">
                <div className="lg:w-[50%] w-full">
                    <div>
                        <ul className="list-disc marker:text-primary-color list-outside">
                            <li>Expertise in building web applications from 7 years.</li>
                            <li>Currently learning Python.</li>
                            <li>Fascinated with WebSockets and WebRTC technologies.</li>
                        </ul>
                        <br />
                        <div className="italic font-semibold">Frameworks</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">NodeJS</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">NestJS</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">NextJS</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">AngularJS</span>
                        </p>
                        <div className="italic font-semibold">Languages</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Javascript</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Typescript</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">C</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">HTML</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">CSS</span>
                        </p>
                        <div className="italic font-semibold">Libraries / Packages</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">ReactJS</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Socket.io</span>
                        </p>
                        <div className="italic font-semibold">Database</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">PostgreSQL</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Firebase</span>
                        </p>
                        <div className="italic font-semibold">ORM</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Sequalize</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Prisma</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Typeorm</span>
                        </p>
                        <div className="italic font-semibold">Misc.</div>
                        <p className="my-2">
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Photoshop</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">Jest</span>
                            <span className="bg-primary-color p-1 mr-2 rounded text-white">TDD</span>
                        </p>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full px-2 lg:px-36">
                    <div className="bar">
                        <div className="bar-fill w-[70%]">
                            <div className="bar-tag">
                                Javascript
                            </div>
                        </div>
                        <span className="mx-1">70%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[75%]">
                            <div className="bar-tag">
                                HTML
                            </div>
                        </div>
                        <span className="mx-1">75%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[60%]">
                            <div className="bar-tag">
                                CSS
                            </div>
                        </div>
                        <span className="mx-1">60%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[80%]">
                            <div className="bar-tag">
                                ReactJS
                            </div>
                        </div>
                        <span className="mx-1">80%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[70%]">
                            <div className="bar-tag">
                                NodeJS
                            </div>
                        </div>
                        <span className="mx-1">70%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[60%]">
                            <div className="bar-tag">
                                NextJS
                            </div>
                        </div>
                        <span className="mx-1">60%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[85%]">
                            <div className="bar-tag">
                                NestJS
                            </div>
                        </div>
                        <span className="mx-1">85%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[25%]">
                            <div className="bar-tag">
                                AWS
                            </div>
                        </div>
                        <span className="mx-1">25%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[30%]">
                            <div className="bar-tag">
                                Photoshop
                            </div>
                        </div>
                        <span className="mx-1">30%</span>
                    </div>
                    <div className="bar">
                        <div className="bar-fill w-[70%]">
                            <div className="bar-tag">
                                Typescript
                            </div>
                        </div>
                        <span className="mx-1">70%</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;
