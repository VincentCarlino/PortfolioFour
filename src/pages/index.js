import * as React from 'react'
import Layout from '../components/layout'
import Scene from '../components/scene'

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage