import React from 'react'
import { ButtonS, ButtonR } from '../ButtonElements'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from './InfoElements'

export const InfoSection = ({
  lightText,
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightTextDesc,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  goTo,
  button,
}) => {
  const ChoicedButton = () => {
    if (button === 'router') {
      return (
        <ButtonR
          to={goTo}
          smooth="true"
          duration={500}
          spy="true"
          exact="true"
          offset={-20}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </ButtonR>
      )
    }
    return (
      <ButtonS
        to={goTo}
        smooth="true"
        duration={500}
        spy={true}
        exact="true"
        offset={-20}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
      >
        {buttonLabel}
      </ButtonS>
    )
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <ChoicedButton />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}
