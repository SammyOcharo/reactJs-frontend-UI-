import React, {useState} from 'react';
import Sidebar  from '../../Sidebar';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import InfoSection from '../infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../infoSection/Data';
import Navbar from '../Navbar';
import Services from '../Services';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle= {toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
