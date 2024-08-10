import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { Toaster } from 'react-hot-toast'; // Import Toaster

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Toaster />
    </>
  )
}
