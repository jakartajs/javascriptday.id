import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from '../../styles/variables'

const Root = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 560px;
  height: 100%;
  min-height: 600px;
  margin: 0 auto;
  padding: 48px 48px 144px;
  background-color: ${colors.grey02};
  opacity: 1;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 64px;
  border-bottom-right-radius: 64px;
  overflow: hidden;
  user-select: none;
`

const Image = styled('img')`
  position: absolute;
  bottom: 0;
`

const HomepageBlock: React.FC = ({ children }) => (
  <Root>
    {children}
    <Image alt="Illustration" src="/images/mountains.png" />
  </Root>
)

export default HomepageBlock
