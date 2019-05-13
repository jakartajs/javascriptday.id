import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import DefaultLayout from '../components/layout/DefaultLayout'

const NotFoundPage = () => (
  <DefaultLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </DefaultLayout>
)

export default NotFoundPage
