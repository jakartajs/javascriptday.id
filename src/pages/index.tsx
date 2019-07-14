import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/layout/Page'
import { NodeArray } from '../interfaces/gatsby'
import SponsorsSection, { SponsorNode } from '../components/sponsors/SponsorsSection'
import SpeakerSection from '../components/speaker/SpeakerSection'
import HomeSection from '../components/home/HomeSection'
import DefaultLayout from '../components/layout/DefaultLayout'

interface IndexPageProps {
  data: {
    sponsors: {
      edges: NodeArray<SponsorNode>
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <DefaultLayout>
    <Page layout="home">
      <HomeSection />
      <SpeakerSection />
      <SponsorsSection sponsors={data.sponsors} />
    </Page>
  </DefaultLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    sponsors: allSponsorsJson {
      edges {
        node {
          name
          type
          logo
          url
          background
        }
      }
    }
  }
`
