import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import '../../styles/reset.scss'
import '../../styles/fonts.scss'
import '../../styles/base.module.scss'
import styles from './layout.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="pt-br" />
        </Helmet>
          
        <section className={styles.template} role="main">
          <Header />
          
          <div className={styles.layout} lala="1">
            {children}
          </div>
          <Footer />
        </section>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
