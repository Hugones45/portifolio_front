import React from 'react'

export const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] dark:bg-[#fff] flex justify-center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 dark:text-[#000] border-pink-600'>Contact</p>
                    <p className='text-gray-300 dark:text-[#000] py-4'>Submit the Form Below or shoot me an email - hugones45@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] placeholder-gray-900 p-2' type="text" placeholder='Name ' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] placeholder-gray-900' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] placeholder-gray-900 p-2 ' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 dark:bg-[#3f77cc] hover:bg-pink-600 hover:border-pink-600 dark:hover:border-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center'>Lets Colaborate!</button>
                
            </form>

        </div>
    )
}
