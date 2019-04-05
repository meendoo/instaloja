import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import Callout from '../components/callout';
import About from '../components/about';
import Segments from '../components/segments';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import Footer from '../components/footer';
if (typeof window !== `undefined`) {
  var ScrollMagic = require('scrollmagic');
  // require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    if (typeof window !== `undefined`) {
      this.controller = new ScrollMagic.Controller();
    }
  }

  render() {
    return (
      <Layout>
        <Hero data={this.props.data.Hero} />
        <Callout controller={this.controller} />
        <About id="empresa" controller={this.controller} />
        <Segments id="segmentos" controller={this.controller} />
        <Gallery
          id="galeria"
          data={this.props.data.Gallery}
          controller={this.controller}
        />
        <Contact id="contato" />
        <Footer />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query {
    Hero: allFile(filter: { relativeDirectory: { eq: "hero" } }) {
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
    Gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
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
`;
