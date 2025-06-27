import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets"
import SubscribeBtn from './SubscribeBtn';
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [viewNavMenu, setViewNavMenu] = useState(false)
    const toggleViewNavMenu = () => {
        setViewNavMenu(!viewNavMenu)
    }

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth >= 1024) {
                setViewNavMenu(true);
            }
            else {
                setViewNavMenu(false)
            }
        };
        checkWidth();

        window.addEventListener("resize", checkWidth);

        return () => window.removeEventListener("resize", checkWidth);
    }, []);


  return (
    <div>
        {/* Navbar Top */}
        <div className=" bg-white py-5 px-8 border-solid border-b-1 border-b-zinc-600 
        lg:flex lg:items-center lg:justify-around lg:px-0 lg:py-7">

            {/* navbar social icons */}
            <div className="hidden lg:flex items-center gap-x-3 text-lg">
                <span aria-label='instagram'><FaInstagram /></span>
                <span aria-label='facebook'><FaFacebookF /></span>
                <span aria-label='linkedIn'><FaLinkedinIn /></span>
                <span aria-label='PInterest'><FaPinterestP /></span>
            </div>
            
            {/* brand logo and navbar toggle buttons */} 
            <div className="flex justify-between items-center
            lg:inline-block">
                <Link to="/"><img src= {assets.logo} alt="" className="w-[11rem] lg:w-[auto]"/></Link>

                <div onClick={toggleViewNavMenu} 
                className="text-2xl text-red-500 border p-2 rounded-sm 
                lg:hidden">
                    { viewNavMenu ? <IoClose/> : <HiOutlineMenu/> }
                </div>
            </div>
            
            {/* subscribe button */}
            <div className="hidden lg:inline-block">
                <Link to={{hash: "#Footer"}}>
                    <SubscribeBtn/>
                </Link>
            </div>
        </div>



        {/* Navbar bottom */}
        <div className="bg-white 
        lg:p-5 lg:border-b lg:border-solid lg:border-zinc-600">
            {
                viewNavMenu &&
                <ul className="py-2 px-5 text-zinc-900 text-sm flex flex-col gap-y-5 
                lg:flex-row lg:justify-center lg:gap-x-10 lg:font-semibold lg:text-base">
                <li><NavLink to="/health">Health</NavLink></li>
                <li><NavLink to="/sports">Sports</NavLink></li>
                <li><NavLink to="/politics">Politics</NavLink></li>
                <li><NavLink to="/business">Business</NavLink></li>
                <li><NavLink to="/arts">Arts</NavLink></li>
                <li><NavLink to="/science">Science</NavLink></li>
                <li><NavLink to="/world">World</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            }
        </div>
    </div>
  )
}

export default Navbar
