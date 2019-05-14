import * as React from 'react'
import styled from '@emotion/styled'

import { Link } from 'gatsby'
import { colors } from '../../styles/variables'
import Container from './Container'

const Root = styled('footer')`
  position: relative;
  margin-top: 24px;
  padding: 24px 24px 144px;
  background: url('/images/mountains.png') bottom center no-repeat;
  background-size: auto 120px;
`

const InnerTop = styled('section')`
  text-align: center;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
  }
`

const InnerBottom = styled('section')`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    display: inline-block;

    &:not(:last-child)::after {
      display: inline-block;
      padding: 0 8px;
      content: '/';
      color: ${colors.grey04};
    }
  }

  a {
    color: ${colors.red01};
  }
`

interface ContainerProps {
  className?: string
}

const Footer: React.SFC<ContainerProps> = ({ className }) => (
  <Root className={className}>
    <Container>
      <InnerTop>
        <p>Copyright &copy; JSDay Indonesia. All Rights Reserved.</p>
      </InnerTop>
      <InnerBottom>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/">Call for Papers</Link>
          </li>
          <li>
            <Link to="/">Sponsor Interest</Link>
          </li>
        </ul>
      </InnerBottom>
    </Container>
  </Root>
)

export default Footer
