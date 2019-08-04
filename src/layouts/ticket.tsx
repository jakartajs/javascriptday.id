import React from 'react'
import styled from '@emotion/styled'
import { widths, colors } from '../styles/variables'

const TicketSection = () => {
  return (
    <Root>
      <SpeakerHeading>Ticket</SpeakerHeading>
      <SubHeading>Join the first javascript conference in Indonesia with hundreds of other application developers. </SubHeading>
      <CTAArea>
        <Button href="https://www.loket.com/event/ruby-confid-jsday-2019-wa1" rel="noopener noreferrer" target="_blank">
          GET TICKETS
        </Button>
      </CTAArea>
    </Root>
  )
}

const SpeakerHeading = styled('h1')`
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

const SubHeading = styled('p')`
  text-align: center;
`

const Button = styled('a')`
  background-color: #eb5559;
  color: #fff;
  padding: 1em;
  border-radius: 0.7em;
  text-decoration: none;
  :hover {
    background-color: #dc7377;
    text-decoration: none;
  }
`

const CTAArea = styled('div')`
  margin-top: 64px;
  text-align: center;
`

const Root = styled('section')`
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  width: 60%;
`

export default TicketSection
