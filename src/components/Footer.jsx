import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div>

        {/* footer top */}
        <div>
            <Link to="/"><img src= {assets.logo} alt="" className="w-[11rem] lg:w-[auto]"/></Link>
            <ul className="">
                <li><NavLink to="/health" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Health </NavLink></li>
                <li><NavLink to="/sports" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Sports </NavLink></li>
                <li><NavLink to="/politics" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Politics </NavLink></li>
                <li><NavLink to="/business" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Business </NavLink></li>
                <li><NavLink to="/arts" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Arts </NavLink></li>
                <li><NavLink to="/science" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Science </NavLink></li>
                <li><NavLink to="/world" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"} >World </NavLink></li>
                <li><NavLink to="/about" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> About </NavLink></li>
                <li><NavLink to="/contact" className={ ( { isActive } ) => isActive ? "text-red-700" : "text-zinc-900"}> Contact </NavLink></li>
            </ul>
        </div>

        {/* footer middle */}
        <div>
          <p>Subscribe today!</p>
          <div>
            <form action="">
              <input type="text" value={(e) => {
                e.target.value
              }} placeholder='Enter your email'/>
            </form>
            <button type='submit'>Subscribe</button>
          </div>
        </div>

        {/* footer bottom */}
        <div>
            <ul>
              <li>
                  <span><FaInstagram/></span> Instagram
              </li>
              <li>
                  <span><FaFacebookF/></span> Facebook
              </li>
              <li>
                  <span><FaLinkedinIn/></span> Linkedin
              </li>
              <li>
                  <span><FaPinterestP/></span> Pinterest
              </li>
            </ul>
            <p>copyright <span><PiCopyright/></span> 2025 Nexus News</p>
        </div>
    </div>
  )
}

export default Footer
