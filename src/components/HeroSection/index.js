import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="videos/mp4" />
      </HeroBg>
    </HeroContainer>
  )
}
