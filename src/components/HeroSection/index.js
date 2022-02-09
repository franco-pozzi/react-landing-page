import React, { useState } from 'react'

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import { Button } from '../ButtonElements'

import Video from '../../videos/video.mp4'

export const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => setHover(!hover)

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="videos/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Bank</HeroH1>
        <HeroP>
          Sign up for a new account today and recive $250 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
