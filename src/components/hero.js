
import NavBar from "./navbar";

export default function Hero() {

    return (
        <>
            <button 
                class="fixed z-50  p-3 bg-gray-100 rounded-full shadow-md bottom-10 right-10 animate-bounce">
                <svg class="w-8 rotate-180 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
                    </path>
                </svg>
            </button>
        <section className="bg-gray-800 -z-10 min-h-screen text-gray-100">
            

            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center  text-center  lg:max-w-md xl:max-w-lg lg:text-left">
                        <img
                            src="https://avatars.githubusercontent.com/u/65455151?v=4"
                            alt="Picture of the author"
                            width={250}
                            height={250}
                            className="rounded-xl mb-8"
                        />
                        <h1 className="text-6xl mb-8 font-bold linee sm:text-6xl"><i class="fa-solid fa-greater-than left-left"></i>
                            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text "> Ali Shan</span><span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text blink">_</span><br /> Blockchain Dev and Opensource Enthusiast
                        </h1>
                        {/* <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p> */}
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a href="#" class='flex max-w-sm cursor-pointer w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md  p-5'>
                                <div class="flex sm:flex-cols-12 gap-6">
                                    <div class="col-span-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                        </svg>
                                    </div>
                                    <div class="col-span-2 pt-1.5">Download CV or RESUME MAIN</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex md:pt-44 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
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
            </section>
            
        </section>
        </>
    )
}