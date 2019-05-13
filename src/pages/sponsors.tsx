import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { NodeArray, SiteMetadata } from '../interfaces/gatsby'
import SponsorsSection, { SponsorNode } from '../components/sponsors/SponsorsSection'
import DefaultLayout from '../components/layout/DefaultLayout'
import Page from '../components/layout/Page'

interface SponsorsPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
    sponsors: {
      edges: NodeArray<SponsorNode>
    }
  }
}

const SponsorsPage: React.FC<SponsorsPageProps> = ({ data }) => (
  <DefaultLayout>
    <Helmet>
      <title>Sponsors | {data.site.siteMetadata.title}</title>
    </Helmet>
    <Page>
      <SponsorsSection sponsors={data.sponsors} />
    </Page>
  </DefaultLayout>
)

export default SponsorsPage

export const pageQuery = graphql`
  query SponsorsPageQuery {
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
