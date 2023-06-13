import logo from "../assets/logo1.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-scroll"
import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export const NavBar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)


    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] dark:bg-[#fff] text-gray-300 z-10'>
            <div>
                <img src={logo} alt="logo1" style={{ width: '50px' }} />
            </div>


            <ul className=" hidden md:flex text-gray-300 dark:text-[#000]">
                <li>
                    <BsFillMoonStarsFill className="color-[#0a192f] dark:fill-[#0a192f]" onClick={() => setDarkMode(!darkMode)} size={30} />
                </li>
                <li>
                    <Link to="home" className="hover:text-pink-600 hover:underline" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" className="hover:text-pink-600 hover:underline" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" className="hover:text-pink-600 hover:underline" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" className="hover:text-pink-600 hover:underline" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" className="hover:text-pink-600 hover:underline" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10 text-gray-300 dark:text-[#000]">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] dark:bg-[#fff] text-gray-300 dark:text-[#000] flex flex-col justify-center items-center'}>
                <li>
                    <BsFillMoonStarsFill className="color-[#0a192f] dark:fill-[#000]" onClick={() => setDarkMode(!darkMode)} size={30} />
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} className="hover:text-pink-600 hover:underline" to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} className="hover:text-pink-600 hover:underline" to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} className="hover:text-pink-600 hover:underline" to="skills" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} className="hover:text-pink-600 hover:underline" to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a target="_blank"
                            className="flex justify-between items-center w-full text-gray"
                            href="https://www.linkedin.com/in/hugo-alex/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a target="_blank"
                            className="flex justify-between items-center w-full text-gray"
                            href="https://github.com/Hugones45">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">

                        <Link className="flex justify-between items-center w-full text-gray" to="contact" smooth={true} duration={500}>




                            Email <HiOutlineMail size={30} />

                        </Link>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a
                            target="_blank"
                            className="flex justify-between items-center w-full text-gray"
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
