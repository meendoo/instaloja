import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero'
import Callout from '../components/callout'
import About from '../components/about'

const IndexPage = ({data}) => (
  <Layout>
    <Hero data={data.Hero}/>
    <Callout/>
    <About/>
  </Layout>
)

export default IndexPage


export const query = graphql`
    query {
        Hero: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                    childImageSharp {
                        original {
                            width
                            height
                            src
                        }
                    }
                }
            }
        }
    }
`