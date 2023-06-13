import workImg from "../assets/projects/workImg.jpeg"

export const Work = () => {
    return (

        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] dark:bg-[#fff]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#858a9d] dark:text-[#000] border-pink-600'>Work</p>
                    <p className='py-6 text-[#858a9d] dark:text-[#000]'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                Image Blog
                            </span>

                            <div className="pt-8 text-center">
                                <a href="https://www.linkedin.com/posts/hugo-alex_frontend-reactjs-javascript-activity-7069692867367100416-pZhY?utm_source=share&utm_medium=member_desktop" target="_blank"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Linkedin Video</button></a>

                                <a href="https://github.com/Hugones45/Img_Blog/tree/master/src" target="_blank"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                Movie Lib
                            </span>

                            <div className="pt-8 text-center">
                                <a href="https://movie-lib-umber.vercel.app" target="_blank"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>

                                <a href="https://github.com/Hugones45/Movie_lib/tree/master/src" target="_blank"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div className="pt-8 text-center">
                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>

                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div className="pt-8 text-center">
                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>

                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div className="pt-8 text-center">
                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>

                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div className="pt-8 text-center">
                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>

                                <a href="/"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
