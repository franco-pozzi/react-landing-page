import React from 'react'

export const homeObjOne = {
  id: 'about',
  goTo: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimeted Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: require('../../images/svg-1.svg').default,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  goTo: 'services',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Unlimeted Transactions with zero fees',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Lear More',
  imgStart: true,
  img: require('../../images/svg-2.svg').default,
  alt: 'bitcoin',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  goTo: '/signin',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: require('../../images/svg-3.svg').default,
  alt: 'Maths',
  dark: false,
  primary: false,
  darkText: true,
  button: 'router',
}
