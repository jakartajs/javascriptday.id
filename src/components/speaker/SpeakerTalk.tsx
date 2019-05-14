import * as React from 'react'
import styled from '@emotion/styled'

import MarkdownContent from '../layout/MarkdownContent'
import { colors, dimensions } from '../../styles/variables'

interface SpeakerTalkProps {
  title: string
  html: string
}

const SpeakerTalk: React.FC<SpeakerTalkProps> = ({ title, html }) => (
  <Root>
    <Inner>
      <Title>{title}</Title>
      <MarkdownContent html={html} />
    </Inner>
  </Root>
)

export default SpeakerTalk

const Root = styled('section')`
  margin: 2.5rem 0 3.5rem;
`

const Inner = styled('div')`
  display: block;
  margin: 24px 0;

  .subtitle {
    margin: 0;
    margin-top: 0.5;
    font-weight: 300;
    font-size: ${dimensions.headingSizes.h3}rem;
    color: ${colors.black};
  }
`

const Title = styled('h2')`
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;

  &:after {
    display: inline-block;
    margin-left: 8px;
    color: ${colors.red01};
    font-weight: 700;
    content: '/';
  }
`
