import * as React from 'react'
import styled from '@emotion/styled'
import IndexLayout from '../../layouts'

const DefaultLayout: React.FC = ({ children }) => (
  <IndexLayout>
    <Root>{children}</Root>
  </IndexLayout>
)

export default DefaultLayout

const Root = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  opacity: 1;
  transition: opacity 0.3s;
`
