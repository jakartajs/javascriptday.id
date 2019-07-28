/* eslint-disable global-require, import/no-dynamic-require */

import * as React from 'react'
import styled from '@emotion/styled'
import classnames from 'classnames'
import { SponsorNode } from './SponsorsSection'

interface SponsorBoxProps {
  node: SponsorNode
}

const SponsorBox: React.FC<SponsorBoxProps> = ({ node }) => (
  <>
    <SponsorItem className={classnames(node.type)} href={node.url} title={node.name} logo={node.logo}>
      <img alt={node.name} src={`/images/sponsors/${node.logo}`} style={{backgroundColor: `${node.background}`, padding: '10px', height: '120px'}} />
    </SponsorItem>
  </>
)

export default SponsorBox

const SponsorItem = styled<'a', Partial<SponsorNode>>('a')`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 24px;
  flex-shrink: 0;
  background: transparent no-repeat 50% / contain;
  background-origin: content-box;

  &.platinum {
    height: 180px;
    width: 290px;
  }

  &.gold {
    height: 130px;
    width: 210px;
  }

  &.silver {
    height: 130px;
    width: 210px;
  }
`
