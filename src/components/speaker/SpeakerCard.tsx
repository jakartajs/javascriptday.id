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
    {/* {imageSharp && <Img className="avatar" alt={name} sizes={imageSharp} />} */}
    <img style={{ width: '120px', height: '120px' }} src={imageSharp} />
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

const Root = styled('header')`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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

const Inner = styled('div')`
  padding: 1.5rem;
  justify-content: center;
  text-align: left;
  align-item: center';
  width: 200px;
`

const Title = styled('p')`
  margin: 0;
  font-weight: 700;
`

const Subtitle = styled('p')`
  margin: 0;
  margin-top: 0.5;
  font-weight: 200;
  font-size: 0.8rem;
`
