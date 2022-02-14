import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      return setScrollNav(true)
    }
    return setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {' '}
            bank{' '}
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
                exact="true"
                offset={-20}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="/signin"
              smooth="true"
              duration="500"
              spy="true"
              exact="true"
              offset={50}
            >
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
