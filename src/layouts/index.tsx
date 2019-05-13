import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/layout/Header'
import LayoutRoot from '../components/layout/LayoutRoot'
import { SiteMetadata, NodeArray } from '../interfaces/gatsby'
import { SponsorNode } from '../components/sponsors/SponsorsSection'
import Footer from '../components/layout/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: SiteMetadata
  }
  sponsors: {
    edges: NodeArray<SponsorNode>
  }
}

const query = graphql`
  query IndexLayoutQuery {
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
    sponsors: allSponsorsJson {
      edges {
        node {
          name
          type
          logo
          url
        }
      }
    }
  }
`

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={query}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'jakartajs, javascript, conference, jsday, javascript day' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
