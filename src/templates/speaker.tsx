import * as React from 'react'
import { graphql } from 'gatsby'

import { SiteMetadata } from '../interfaces/gatsby'

import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import SpeakerCard from '../components/speaker/SpeakerCard'
import SpeakerTalk from '../components/speaker/SpeakerTalk'
import SpeakerAbout from '../components/speaker/SpeakerAbout'
import DefaultLayout from '../components/layout/DefaultLayout'

interface SpeakerPageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
    markdownRemark: {
      html: string
      excerpt: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      frontmatter: { [key: string]: any }
    }
  }
}

const SpeakerPageTemplate: React.FC<SpeakerPageTemplateProps> = ({ data }) => {
  const { title, company, talk, photo, bio, website, github, twitter } = data.markdownRemark.frontmatter
  return (
    <DefaultLayout>
      <Page>
        <Container>
          <SpeakerCard name={title} company={company} imageSharp={photo.childImageSharp.sizes} />
          <SpeakerTalk title={talk} html={data.markdownRemark.html} />
          <SpeakerAbout>
            <h3>About {title}</h3>
            <p>{bio}</p>
            {(website || github || twitter) && (
              <>
                <h3>Find {title.split(' ')[0]} at:</h3>
                <ul>
                  {website && (
                    <li>
                      <a href={website} target="_blank" rel="noopener noreferrer">
                        {website.replace(/^(https?:)?\/\//, '')}
                      </a>
                    </li>
                  )}
                  {twitter && (
                    <li>
                      <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                        twitter.com/{twitter}
                      </a>
                    </li>
                  )}
                  {github && (
                    <li>
                      <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                        github.com/{github}
                      </a>
                    </li>
                  )}
                </ul>
              </>
            )}
          </SpeakerAbout>
        </Container>
      </Page>
    </DefaultLayout>
  )
}

export default SpeakerPageTemplate

export const query = graphql`
  query SpeakerTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        talk
        company
        bio
        website
        github
        twitter
        photo {
          childImageSharp {
            sizes(maxWidth: 300) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
