import React from 'react'
import video from '../videos/video1.mp4';
 import {
     Container, 
     FormWrap, 
     FormContent,
     Icon, 
     Form, 
     FormH1, 
     FormLabel, 
     FormInput, 
     FormButton, 
     Text, 
     HeroBg, 
     VideoBg} from './SigninElements'
const SignIn = () => {
    return (
        <>
            <Container>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type='video1/mp4'/>
                </HeroBg>
                <FormWrap>
                    <Icon to="/">CASH</Icon>
                    <FormContent>
                       <Form action="#">
                           <FormH1>Sign in to your account</FormH1>
                           <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                       </Form> 
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
