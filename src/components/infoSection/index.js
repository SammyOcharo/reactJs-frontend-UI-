import React from 'react';
import { Button } from '../ButtonElements';

import { 
    Img, 
    ImgWrap, 
    InfoRow, 
    Column1, 
    TextWrapper,
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    InfoContainer, 
    InfoWrapper, 
    Column2 } from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel,
    img,  
    alt, 
    primary, 
    dark2}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText= {darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1: 0}
                                    dark={dark2 ? 1: 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
           </InfoContainer> 
        </>
    )
}

export default InfoSection
