import { GiVintageRobot } from "react-icons/gi"
import { GiMonoWheelRobot } from "react-icons/gi"

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
                        <p>Formado em cinema e atualmente cursando analise e desenvolvimento de sistemas atuei durante muitas tempo no mercado usando varias tecnologias voltadas para o audiovisual, em especial os softwares de edição, com o tempo passei a me interessar em como toda a tecnologia que eu usava era construída, inventada, e esse interesse me levou até a programação.</p>
                        <p>Na programação descobri um mundo de infinitas possibilidades e em especial com o front-end vi como é possível trabalhar com vários processos criativos que tanto amo de uma maneira digital, posso digitalizar jogos de tabuleiro físicos que já criei ou dar vida para as histórias fantásticas contando elas de maneiras interativas através de sites e aplicações.</p>
                    </div>
                </div>
                <div className="position: relative w-full h-screen">


                    <motion.div
                        className="absolute m-5 left-80"
                        animate={{ rotate: [0, 360, 360, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    >

                        <GiVintageRobot size={80} />
                    </motion.div>
                </div>

            </div>

        </div>
    )
}
