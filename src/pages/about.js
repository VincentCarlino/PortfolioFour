import * as React from 'react'
import Layout from '../components/layout'
import Scene from '../components/scene'

const AboutPage = () => {
  return (
    <div>
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    </div>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage