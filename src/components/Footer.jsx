import { FaGithubSquare, FaInstagram ,FaFacebook,FaLinkedin} from 'react-icons/fa'

import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer className='bg-transparent text-gray-400 py-8'>
      {/* Cyan line at the top */}
      <div className='bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[1px]'></div>

      
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 px-6 md:px-20 mt-4'>
        <div className='text-center md:text-left'>
        <h3 className='cursor-pointer hover:text-cyan-500 transition duration-200'>Noureddine Marzougui</h3>
          <div className='flex justify-center md:justify-start space-x-2 mt-4'>
            <Link href="https://www.facebook.com/profile.php?id=61556283720344"  className='hover:text-cyan-500 transition-colors duration-300'>
              <FaFacebook size={25} />
            </Link>
            <Link href="https://www.instagram.com/noureddinemr/"  target="_blank" 
                        rel="noopener noreferrer" className='hover:text-cyan-500 transition-colors duration-300'>
              <FaInstagram size={25} />
            </Link>
            <Link href="https://github.com/noureddinemr1" target="_blank" 
                        rel="noopener noreferrer" className='hover:text-cyan-500 transition-colors duration-300'>
              <FaGithubSquare size={25} />
            </Link>
            <Link href="https://www.linkedin.com/in/noureddinemr1/" target="_blank" 
                        rel="noopener noreferrer" className='hover:text-cyan-500 transition-colors duration-300'>
              <FaLinkedin size={25} />
            </Link>
          </div>
        </div>
        
        <p className='text-gray-700 text-sm font-light text-center md:text-right'>© 2024 N.Marzougui. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;

