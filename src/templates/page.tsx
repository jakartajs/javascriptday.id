import * as React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import MarkdownContent from '../components/layout/MarkdownContent'
import DefaultLayout from '../components/layout/DefaultLayout'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const Inner = styled('section')`
  padding: 24px;
`

export default function PageTemplate({ data }: PageTemplateProps) {
  const post = data.markdownRemark
  const { siteMetadata } = data.site

  return (
    <DefaultLayout>
      <Helmet>
        <title>{`${post.frontmatter.title} · ${siteMetadata.title}`}</title>
      </Helmet>
      <Page>
        <Inner>
          <Container>
            <h1>{post.frontmatter.title}</h1>
            {/* eslint-disable-next-line react/no-danger */}
            <MarkdownContent html={post.html} />
          </Container>
        </Inner>
      </Page>
    </DefaultLayout>
  )
}

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
      }
    }
  }
`
