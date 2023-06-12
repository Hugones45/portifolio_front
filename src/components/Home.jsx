import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"
import mySelf from "../assets/me/job1.png"

export const Home = () => {

    return (

        <div name="home" className="w-full h-screen bg-[#0a192f] dark:bg-[#fff] flex justify-center">
            <div className="relative left-10  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi! My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Hugo Alexandre</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front End
                    Developer.</h2>
                <p className="text-[#858a9d] py-4 max-w-[700px]">An enthusiast for technologies and processes of creation, with
                    Front-end tools i can have the best of these two aspects. Experienced in the field working with customer solutions, company
                    business rules and web page development.</p>
                <div>
                    <button>
                        <Link to="work" smooth={true} duration={500}
                            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
                        > View Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </Link>
                    </button>
                </div>

            </div>

            <div className="flex relative right-20 justify-center items-center">

                <img className="relative max-w-[350px] p-4 rounded-lg" src={mySelf} alt="me" />

            </div>
        </div>
    )
}