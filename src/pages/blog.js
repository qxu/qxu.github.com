import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class PostItem extends React.Component {
  render() {
    const { node } = this.props
    const title = get(node, 'frontmatter.title') || node.fields.slug
    return (
      <div key={node.fields.slug}>
        <h3
          style={{
            marginBottom: rhythm(0),
          }}
        >
          <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    )
  }
}

class BlogIndex extends React.Component {
  render() {
    const title = get(this, 'props.data.site.siteMetadata.blogTitle')
    const description = get(
      this,
      'props.data.site.siteMetadata.blogDescription'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={`${__PATH_PREFIX__}/blog/`}
        >
          {title}
        </Link>
      </h1>
    )
    return (
      <Layout location={this.props.location} header={header}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        />
        <div
          style={{
            // display: 'flex',
            marginBottom: rhythm(2.5),
          }}
        >
          <p>
            Blog of{' '}
            <a href="https://github.com/qxu">
              github.com/qxu
            </a>
            .
          </p>
        </div>
        {posts.map(({ node }) => {
          return <PostItem key={node.fields.slug} node={node}/>
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogTitle
        blogDescription
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
