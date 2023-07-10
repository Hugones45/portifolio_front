import { GiVintageRobot } from "react-icons/gi"
import { motion } from "framer-motion"

export const About = () => {

    return (
        <div name='about' className='w-full lg:px-60 h-full pt-20 bg-[#0a192f] dark:bg-[#fff] text-[#858a9d] dark:text-[#000]'>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>

                    </div>
                    <div></div>
                </div>

               <div className='max-w-[1000px]w-full grid md:grid-cols-2 text-justify gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi I'm Hugo nice to meet you. Plesase take a look around!</p>
                    </div>
                    <div>
                        <p>Having graduated in cinema and currently pursuing studies in Analysis and Systems Development, I discovered in programming a world of infinite possibilities to learn, protect, and create!</p>
                        <p>JavaScript and React.js serve as my primary tools, and my expertise in their libraries and frameworks, nestled within their respective ecosystems, empowers me to fashion contemporary and user-friendly applications. In addition, I proficiently work with Node.js and Python. To ensure that I remain abreast of the latest trends and advancements in the technology domain, I diligently update my skills, enabling me to offer innovative solutions.</p>
                        <p>I also believe that technology should be in harmony with nature, so I use programming to build applications with ecological themes that present me with new challenges and stimulate my creativity. This practice motivates me, and that motivation becomes inspiration, inspiration which I cultivate in the creation of any application! </p>
                        <p>If you seek a front-end developer well-versed in JavaScript and React, I am here to help! Let's work together to bring your ideas to life! </p>
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
