import React, {useState} from 'react'
import video from '../videos/video1.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroBtnWrapper, 
    HeroContent, 
    HeroH1,
    HeroP, 
    ArrowRight, 
    Arrowforward} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video1/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign Up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="/" 
                        onMouseEnter= {onHover} 
                        onMouseLeave= {onHover} 
                        primary='false'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Get Started {hover ? <Arrowforward/> : <ArrowRight /> }
                    </Button>  
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
