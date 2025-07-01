import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='mt-30'>

        <div className='h-[8px] w-[100%] bg-red-700'></div>
        <div className='bg-zinc-950 text-white'>

              {/* footer top */}
        <div className='text-center border-b-1 border-b-gray-100 py-[3rem] px-[1rem]'>
            <Link to="/"><img src= {assets.footer_logo} alt="" className="w-[11rem] lg:w-[auto] mx-auto"/></Link>
            <ul className="mt-10 flex flex-col gap-y-3 text-sm font-semibold">
                <li><NavLink to="/health" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Health </NavLink></li>
                <li><NavLink to="/sports" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Sports </NavLink></li>
                <li><NavLink to="/politics" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Politics </NavLink></li>
                <li><NavLink to="/business" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Business </NavLink></li>
                <li><NavLink to="/arts" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Arts </NavLink></li>
                <li><NavLink to="/science" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"}> Science </NavLink></li>
                <li><NavLink to="/world" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-white"} >World </NavLink></li>
            </ul>
        </div>

        {/* footer middle */}
        <div className='text-center border-b-1 border-b-gray-400 py-[3rem] px-[1rem]'>
          <p className='uppercase text-base font-semibold'>Subscribe today!</p>
  
            <form action="" className='mt-5'>
              <div className='w-[95%]'>
                <input type="text" value={(e) => {
                e.target.value
              }} placeholder='Enter your email'
              className='bg-gray-50 w-full h-[2.5rem] rounded-sm p-[1rem] placeholder:text-gray-700 placeholder:text-sm'/>
              </div>
              <button type='submit'
              className='bg-red-700 mt-3 py-2 px-6 capitalize text-base font-semibold'>
                Subscribe
              </button>
            </form>

          <div className='mt-30'>
             <p className='text-base uppercase font-semibold'>social media</p>
            <ul className='mt-5 text-lg font-light'>
              <li>
                  <span className='font-semibold text-xl mr-0.5'><FaInstagram className='inline'/></span> Instagram
              </li>
              <li>
                  <span className='font-semibold text-xl mr-0.5'><FaFacebookF className='inline'/></span> Facebook
              </li>
              <li>
                  <span className='font-semibold text-xl mr-0.5'><FaLinkedinIn className='inline'/></span> Linkedin
              </li>
              <li>
                  <span className='font-semibold text-xl mr-0.5'><FaPinterestP className='inline'/></span> Pinterest
              </li>
          </ul>
          </div>
        </div>

        {/* footer bottom */}
        <div className='text-center p-5 text-base'>
            <p>copyright <span><PiCopyright className='inline'/></span> 2025 Nexus News</p>
        </div>

        </div>
    </div>
  )
}

export default Footer
