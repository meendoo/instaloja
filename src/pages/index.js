import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero'
import Callout from '../components/callout'
import About from '../components/about'
import Segments from '../components/segments'
import Gallery from '../components/gallery'
import Contact from '../components/contact'
import Footer from '../components/footer'
import ScrollMagic from 'scrollmagic'

const controller = new ScrollMagic.Controller();

const IndexPage = ({data}) => (
  <Layout>
    <Hero data={data.Hero}/>
    <Callout controller={controller}/>
    <About id="empresa" controller={controller}/>
    <Segments id="segmentos" controller={controller}/>
    <Gallery id="galeria" data={data.Gallery} controller={controller}/>
    <Contact id="contato"/>
    <Footer/> 
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