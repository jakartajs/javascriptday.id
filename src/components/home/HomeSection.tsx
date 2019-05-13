import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { heights } from '../../styles/variables'

const Inner = styled('section')`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
  min-height: calc(100vh - ${heights.header}px);
  padding: 24px;
`

interface HomeSection {
  className?: string
}

const HomeSection: React.SFC<HomeSection> = ({ className }) => (
  <Inner className={className}>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Inner>
)

export default HomeSection
