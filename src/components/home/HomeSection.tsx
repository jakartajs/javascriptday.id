import * as React from 'react'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { heights, colors } from '../../styles/variables'
import HomepageBlock from './HomepageBlock'

const Inner = styled('section')`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
  min-height: calc(100vh - ${heights.header}px);
  padding: 24px;
`

const Logo = styled('img')`
  display: inline-block;
  vertical-align: middle;
  height: 96px;
  margin-bottom: 24px;
`

const HomepageContent = styled('div')`
  color: ${colors.white};
  text-align: center;
`

const HomepageSubtitle = styled('p')`
  margin: 0;
  font-size: 24px;
  line-height: 32px;
  font-weight: 300;
`

const HomepageLinks = styled('ul')`
  margin-top: 24px;
  margin-bottom: 0;
  padding: 0;
  list-style-type: none;
  font-size: 20px;
  line-height: 28px;

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
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    color: ${colors.white};
    font-weight: 300;
    border-bottom: 1px solid ${transparentize(0.5, colors.white)};

    &:hover,
    &:focus {
      border-bottom-color: ${colors.white};
    }
  }
`

interface HomeSection {
  className?: string
}

const HomeSection: React.SFC<HomeSection> = ({ className }) => (
  <Inner className={className}>
    <HomepageBlock>
      <HomepageContent>
        <Logo alt="JSDay Indonesia" src="/images/logo-light.png" />
        <HomepageSubtitle>28 September 2019</HomepageSubtitle>
        <HomepageSubtitle>Venue: SCTV Hall, Senayan City, Jakarta, Indonesia</HomepageSubtitle>
        <HomepageLinks>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/call-for-cfp/">Schedule</Link>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZGVphPcskVQL5J5TWmiovyV0wTPR1zWcCl3xxzXiUT2A3UA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become Sponsor
            </a>
          </li>
        </HomepageLinks>
      </HomepageContent>
    </HomepageBlock>
  </Inner>
)

export default HomeSection
