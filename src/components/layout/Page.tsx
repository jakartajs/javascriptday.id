import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { heights } from '../../styles/variables'

interface PageProps {
  className?: string
  layout?: 'home' | 'default'
}

const HomeStyles = css`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const Root = styled<'article', PageProps>('article')`
  flex: 1 1 auto;
  padding-top: ${heights.header}px;

  ${props => props.layout === 'home' && HomeStyles}
`

const Page: React.SFC<PageProps> = ({ children, className, layout }) => (
  <Root className={className} layout={layout}>
    {children}
  </Root>
)

Page.defaultProps = {
  className: undefined,
  layout: 'default'
}

export default Page
