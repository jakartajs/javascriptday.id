import * as React from 'react'
import styled from '@emotion/styled'
import Img, { FluidObject } from 'gatsby-image'
import { dimensions } from '../../styles/variables'

interface SpeakerCardProps {
  name: string
  company?: string
  imageSharp?: FluidObject
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, company, imageSharp }) => (
  <Root>
    {imageSharp && <Img className="avatar" alt={name} sizes={imageSharp} />}
    <Inner>
      <Title>{name}</Title>
      {company && <Subtitle>{company}</Subtitle>}
    </Inner>
  </Root>
)

SpeakerCard.defaultProps = {
  company: undefined,
  imageSharp: undefined
}

export default SpeakerCard

const Root = styled.header`
  margin-bottom: 2rem;
  text-align: center;

  .avatar {
    margin: 1.5rem auto;
    max-width: 248px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 48px;
    border-bottom-right-radius: 48px;
    overflow: hidden;
  }
`

const Inner = styled.div``

const Title = styled.h1`
  margin: 0;
  font-weight: 300;
`

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5;
  font-weight: 300;
  font-size: ${dimensions.headingSizes.h3}rem;
`
