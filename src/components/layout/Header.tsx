import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, colors, breakpoints } from '../../styles/variables'
import Container from './Container'

const Root = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${heights.header}px;
  padding: 12px 24px;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.grey02)};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: none;
  z-index: 10;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  display: inline-block;
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Logo = styled('img')`
  display: inline-block;
  vertical-align: middle;
  height: ${heights.header - 24}px;
`

const HeaderNav = styled('nav')`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  font-weight: 300;

  a {
    color: ${colors.red02};
    font-size: 0.85rem;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }

    @media (min-width: ${breakpoints.md}px) {
      font-size: 0.9rem;
      margin-right: 1.5rem;
    }
  }
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <Root>
    <HeaderInner>
      <HomepageLink to="/">
        <Logo alt={title} src="/images/logo-dark.png" />
      </HomepageLink>
      <HeaderNav>
        <Link to="/about">About</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/venue">Venue</Link>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </HeaderNav>
    </HeaderInner>
  </Root>
)

export default Header
