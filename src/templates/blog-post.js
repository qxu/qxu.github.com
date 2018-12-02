import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

const Header = (props) => {
  const { contextTitle } = props;
  return (
    <div className='page-header'>
      <h3>
        <Link to={`${__PATH_PREFIX__}/blog/`}>
          &laquo; {contextTitle}
        </Link>
      </h3>
    </div>
  )
}

const Content = (props) => {
  const post = props.post
  return (
    <div className='page-content post'>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <small>
        {post.frontmatter.date}
      </small>
    </div>
  )
}

const Footer = (props) => {
  const { previous, next } = props.pageContext
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}
      className='post-footer'
    >
      <li>
        {
          previous &&
          <Link to={previous.fields.slug} rel="prev">
            &lsaquo; {previous.frontmatter.title}
          </Link>
        }
      </li>
      <li>
        {
          next &&
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} &rsaquo;
          </Link>
        }
      </li>
    </ul>
  )
}

class BlogPostTemplate extends React.Component {
  render() {
    const contextTitle = get(this.props, 'data.site.siteMetadata.blogTitle')
    const post = this.props.data.markdownRemark
    const description = post.excerpt

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={`${post.frontmatter.title} | ${contextTitle}`}
        />
        <Header contextTitle={contextTitle} />
        <Content post={post} />
        <Footer pageContext={this.props.pageContext} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        blogTitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
