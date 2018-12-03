import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero'
import Callout from '../components/callout'
import About from '../components/about'
import Segments from '../components/segments'
import Gallery from '../components/gallery'

const IndexPage = ({data}) => (
  <Layout>
    <Hero data={data.Hero}/>
    <Callout/>
    <About id="empresa"/>
    <Segments id="segmentos"/>
    <Gallery data={data.Gallery}/>
  </Layout>
)

export default IndexPage;


export const query = graphql`
    query {
        Hero: allFile(filter: {relativeDirectory: {eq: "hero"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            originalImg
                            originalName
                        }
                    }
                }
            }
        }
        Gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 200, maxHeight: 200, cropFocus: ENTROPY) {
                            src
                        }
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