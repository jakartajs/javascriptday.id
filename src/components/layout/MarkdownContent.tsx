import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { colors } from '../../styles/variables'

interface MarkdownContentProps {
  html: string
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ html }) => (
  <Root
    dangerouslySetInnerHTML={{
      __html: html
    }}
  />
)

export default MarkdownContent

const Root = styled.div`
  color: ${colors.grey01};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.black};
    font-weight: 300;
  }

  b,
  strong {
    font-weight: 700;
  }

  p:last-child {
    margin-bottom: 0;
  }

  a {
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    color: ${colors.red01};
    font-weight: 400;
    border-bottom: 1px solid ${transparentize(0.5, colors.red01)};

    &:hover,
    &:focus {
      border-bottom-color: ${colors.red01};
    }
  }

  figcaption {
    a {
      border-bottom: none;
      color: ${colors.red01};

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`
