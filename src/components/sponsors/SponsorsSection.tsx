import * as React from 'react'
import styled from '@emotion/styled'

import SponsorBox from './SponsorBox'
import { NodeArray } from '../../interfaces/gatsby'
import { widths, colors } from '../../styles/variables'

export interface SponsorNode {
  name: string
  type: string
  logo: string
  url: string
}

interface SponsorsSectionProps {
  sponsors: {
    edges: NodeArray<SponsorNode>
  }
}

const renderSection = (edges: { node: SponsorNode }[], type: string) => {
  const filtered = edges.filter(({ node }) => node.type === type.toLowerCase())

  return filtered.length !== 0 ? (
    <>
      <SponsorHeading>{type}</SponsorHeading>
      <SponsorList>
        {filtered.map(({ node }) => (
          <SponsorBox key={node.name} node={node} />
        ))}
      </SponsorList>
    </>
  ) : null
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ sponsors }) => (
  <Root>
    <SectionHeading>Sponsors</SectionHeading>
    <Inner>
      {renderSection(sponsors.edges, 'Platinum')}
      {renderSection(sponsors.edges, 'Gold')}
      {renderSection(sponsors.edges, 'Silver')}
    </Inner>
  </Root>
)

export default SponsorsSection

const Root = styled('section')`
  padding: 2.5rem 1.5rem;
`

const Inner = styled('div')`
  width: 100%;
  max-width: ${widths.lg}px;
  margin: 0 auto;
  padding: 36px 24px;
  background-color: ${colors.grey05};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 48px;
  border-bottom-right-radius: 48px;
  overflow: hidden;
`

const SectionHeading = styled('h1')`
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

const SponsorHeading = styled('h2')`
  margin-top: 16px;
  margin-bottom: 0px;
  font-weight: 300;
  text-align: center;
`

const SponsorList = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`
