import React from 'react'
import {
  FormLabel,
  Container,
  Form,
  FormWrap,
  Icon,
  FormContent,
  FormH1,
  FormInput,
  FormButton,
  Text,
} from './SignInElements'
import { ScrollToTop } from '../ScrollToTop'

export const SignIn = () => {
  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">Dolaa</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}
