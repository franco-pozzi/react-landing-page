import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { HeroSection } from '../../components/HeroSection'
import { InfoSection } from '../../components/InfoSection'
import { Services } from '../../components/Services'
import { Footer } from '../../components/Footer'

import { IconContext } from 'react-icons/lib'

import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../../components/InfoSection/Data'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </IconContext.Provider>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}
