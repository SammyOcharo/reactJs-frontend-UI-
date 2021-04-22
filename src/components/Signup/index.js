import React from 'react'
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
     Text, SignUpGoogle} from './SignupElements'
const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">CASH</Icon>
                    <FormContent>
                       <Form action="#">
                           <FormH1>Sign Up for an account</FormH1>
                           <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                            <SignUpGoogle>
                                Sign Up with Google
                            </SignUpGoogle>
                       </Form> 
                       
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp