/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    let lastScrollY = 0

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            lastScrollY = window.scrollY
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [controlNavbar, lastScrollY])

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className={`fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-sm z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            
            <div className='max-w-[1300px] mx-auto flex justify-between text-gray-700  items-center px-12 h-20'>
                <Link to="gr" className='cursor-pointer hover:text-cyan-500 transition duration-200'>Noureddine Marzougui</Link>

                <ul className='hidden md:flex gap-12 z-10 '>
                    <li><Link to="hero" className="cursor-pointer hover:text-cyan-500 transition duration-200" smooth={true} offset={10} duration={500}>Home</Link></li>
                    <li><Link to="portfolio" className="cursor-pointer hover:text-cyan-500 transition duration-200" smooth={true} offset={10} duration={500}>Portfolio</Link></li>
                    <li><Link to="contact" className="cursor-pointer hover:text-cyan-500 transition duration-200" smooth={true} offset={10} duration={500}>Contact</Link></li>
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-gray-700'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'closed'}
                    variants={menuVariants}
                    className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
                >
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                        <li><Link to="hero" onClick={closeNav} smooth={true} offset={50} duration={500}>Home</Link></li>
                        <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                        <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar
