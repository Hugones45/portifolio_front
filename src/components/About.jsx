import { GiVintageRobot } from "react-icons/gi"
import { motion } from "framer-motion"

export const About = () => {

    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] dark:bg-[#fff] text-[#858a9d] dark:text-[#000]'>



            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>

                    </div>
                    <div></div>
                </div>


                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi I'm Hugo nice to meet you. Plesase take a look around.</p>
                    </div>
                    <div>
                        <p>I graduated in cinema and I am currently studying analysis and systems development. I have worked in the market for a long time using various technologies focused on audiovisual, especially editing software. Over time, I became interested in how all the technology I used was built, and this interest led me to programming.</p>
                        <p>In this new world, I discovered infinite possibilities, especially in front-end development. I saw how it is possible to work digitally with various creative processes that I love so much.</p>
                        <p>As you browse through my portfolio, you will find projects I have worked on, from small games to blogs and web pages created to spread ecological awareness with the help of technology.</p>
                        <p>I am constantly updating my skills to stay up-to-date with the latest trends and advancements in the technology field, in order to provide innovative solutions.</p>
                    </div>
                </div>

                <motion.div
                    className="hidden lg:flex relative right-80 bottom-40"
                    animate={{ rotate: [0, 360, 360, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                >

                    <GiVintageRobot size={80} />
                </motion.div>


                <motion.div
                    className="md:hidden relative  right-30"
                    animate={{ rotate: [0, 360, 360, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                >

                    <GiVintageRobot size={80} />
                </motion.div>


            </div>

        </div>
    )
}
