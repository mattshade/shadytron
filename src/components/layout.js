import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

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
          { name: 'description', content: 'shadytron game factory' },
          { name: 'keywords', content: 'matt, shade, matt shade, tech, tech lead, design, designer, developer, coolguy, games' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content:'https://www.shadytron.com' },
          { property: 'og:site_name', content:'Matt Shade' },
          { property: 'og:title', content:'Matt Shade' },
          { property: 'og:description', content:'games' },
          // { property: 'og:image', content:`${siteOgImage}` },
          // { property: 'og:image:secure_url', content:`${siteOgImage}` },
          // { property: 'og:image:type', content:'image/jpeg' },
          // { property: 'og:image:width', content:'1200' },
          // { property: 'og:image:height', content:'630' },
          { property: 'og:image:alt', content:'shadytron.com' },
          { name: 'twitter:creator', content:'@mattShade' },
          { name: 'twitter:title', content:'Matt Shade' },
          { name: 'twitter:description', content:'shadytron game factory' },
          { name: 'author', content:'Matt Shade' },
        ]}
      >

      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet" />
      </Helmet>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer
          style={{
            position: `abbsolute`,
            bottom: `20px`,
            fontSize: `14px`,
          }}>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.shadytron.com">shadytron</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
