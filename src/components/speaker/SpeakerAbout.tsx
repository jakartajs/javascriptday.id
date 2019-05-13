import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const SpeakerAbout = styled('div')`
  display: block;
  padding: 1.5rem;
  color: ${colors.white};
  background-color: ${colors.red02};
  border: 1px solid transparent;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 48px;
  border-bottom-right-radius: 48px;

  h3 {
    margin-top: 0;
    color: ${colors.white};
    font-weight: 500;
  }

  ul {
    margin: 0;
  }

  a {
    color: ${colors.white};
    border-bottom: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default SpeakerAbout
