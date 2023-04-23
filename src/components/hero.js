import NavBar from "./navbar";

export default function Hero() {

    return (
        <section className="bg-gray-800 min-h-screen text-gray-100">
        <NavBar />
            <div className="container mx-auto flex flex-col items-center px-4   md:px-6 lg:px-28 xl:max-w-4xl">
                <div className="min-w-screen flex items-center justify-center px-5 py-5">
                <div className="px-16">
                    <p>lorem</p>
                </div>
                    <div className="p-16">
                    <div className="rounded-lg m-12 shadow-xl bg-gray-900 text-white" style={{ width: 500 }}>
                        <div className="border-b border-gray-800 px-8 py-3">
                            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
                            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
                            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
                        </div>
                        <div className="px-8 py-6">
                            <p>
                                <em className="text-blue-400">const</em>{" "}
                                <span className="text-green-400">aboutMe</span>{" "}
                                <span className="text-pink-500">=</span>{" "}
                                <em className="text-blue-400">function</em>() {"{"}
                            </p>
                            <p>
                                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                                <span className="text-yellow-300">&apos;Ali Shan&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                                
                                <span className="text-yellow-300">&apos;Blockchain Developer&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;compant:{" "}
                                <span className="text-yellow-300">&apos;Tech Alphalogix&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;contact:{" "}
                                <span className="text-yellow-300">
                                &apos;
                                    <a 
                                        href="https://www.linkedin.com/in/alshnkhn/"
                                        target="_blank"
                                        className="text-yellow-300 hover:underline focus:border-none"
                                    >
                                       <i class="fa-brands fa-linkedin-in"></i> linkedin
                                    </a>
                                    &apos;
                                </span>
                                ,
                            </p>
                            <p>&nbsp;&nbsp;{"}"}</p>
                            <p>{"}"}</p>
                        </div>
                        <div className="px-8 py-6">
                            <p>
                                <em className="text-blue-400">const</em>{" "}
                                <span className="text-green-400">aboutMe</span>{" "}
                                <span className="text-pink-500">=</span>{" "}
                                <em className="text-blue-400">function</em>() {"{"}
                            </p>
                            <p>
                                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
                                <span className="text-yellow-300">&apos;Ali Shan&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
                                
                                <span className="text-yellow-300">&apos;Blockchain Developer&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;compant:{" "}
                                <span className="text-yellow-300">&apos;Tech Alphalogix&apos;</span>,
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;contact:{" "}
                                <span className="text-yellow-300">
                                &apos;
                                    <a 
                                        href="https://www.linkedin.com/in/alshnkhn/"
                                        target="_blank"
                                        className="text-yellow-300 hover:underline focus:border-none"
                                    >
                                       <i class="fa-brands fa-linkedin-in"></i> ledin
                                    </a>
                                    &apos;
                                </span>
                                ,
                            </p>
                            <p>&nbsp;&nbsp;{"}"}</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}