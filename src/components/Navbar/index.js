import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn, 
    NavBtnLink, 
    DropDownContainer, 
    DropDownHeader, 
    DropDownListContainer, 
    DropDownList, ArrowRight} from './NavbarElements'

const options = ["Men", "Women", "Youth", "Children"];

export const Navbar = ({ toggle }) => {


    const [scrollNav, setscrollNav] = useState(false)
    
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    const toggling = () => setIsOpen(!isOpen);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }
    

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo href="/" onClick={toggleHome}>
                        Umoja Baptist Church
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks 
                            to="discover"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <DropDownContainer>
                            <DropDownHeader onClick={toggling}
                             {...selectedOption || "Mangoes"}
                            >Ministries <ArrowRight /></DropDownHeader>
                            {isOpen && (
                                <DropDownListContainer>
                                    
                                    <DropDownList >
                                        {options.map(option => (
                                            <NavLinks onClick={onOptionClicked(option)} key={Math.random()}>{option}</NavLinks>
                                            ))
                                        }
                                    </DropDownList>
                                </DropDownListContainer>
                            )}
                             </DropDownContainer>
                    </NavMenu>
                    <NavBtn>
                            <NavBtnLink 
                            to="signup"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Sign Up</NavBtnLink>
                        </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;