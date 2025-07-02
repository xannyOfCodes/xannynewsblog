import React from 'react'

const NewsLetter = () => {
  return (
    <div className='p-[1.5rem]'>
        <div className='bg-red-700 px-[1rem] pt-5 pb-10 text-white'>
        <p className='uppercase text-base font-semibold'>Never miss a headline!</p>
        <p className='mt-5 text-2xl font-semibold'>Subscribe to our newsletter for daily updates</p>
        <p className='mt-3 text-base'>Get the latest stories delivered straight to your inbox</p>
        <form className='mt-15'>
            <div>
                <input type="text" placeholder='Enter your email'
                className='bg-gray-50 w-full h-[3rem] rounded-sm p-[1rem] outline-0 text-zinc-800 text-sm placeholder:text-gray-600 placeholder:text-sm'/>
            </div>
            <button className='block w-full mt-5 bg-zinc-900 px-4 py-3 rounded-sm'>Subscribe</button>
        </form>
        </div>
    </div>
  )
}

export default NewsLetter
