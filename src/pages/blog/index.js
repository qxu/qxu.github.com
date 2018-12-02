import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'

class PostItem extends React.Component {
  render() {
    const { node } = this.props
    const title = get(node, 'frontmatter.title') || node.fields.slug
    return (
      <li key={node.fields.slug}>
        <Link className='post-item post-item-link' to={node.fields.slug}>
          <div className='post-item-header'>
            <h3 className='post-item-title'>
                {title}
            </h3>
            <small>{node.frontmatter.date}</small>
          </div>
          <div className='post-item-content'>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        </Link>
      </li>
    )
  }
}

const Header = (props) => {
  return (
    <div className='page-header'>
      <h1>
        <Link to={`${__PATH_PREFIX__}/blog/`} style={{color: 'inherit'}}>
          {props.title}
        </Link>
      </h1>
      <div>
        <p>
          Blog of{' '}
          <a href="https://github.com/qxu">
            github.com/qxu
          </a>
          .
        </p>
      </div>
    </div>
  )
}

const Content = (props) => {
  const posts = props.posts
  return (
    <div className='page-content'>
      <ul>
        {posts.map(({ node }) => {
          return <PostItem key={node.fields.slug} node={node}/>
        })}
      </ul>
    </div>
  )
}

class Index extends React.Component {
  render() {
    const title = get(this, 'props.data.site.siteMetadata.blogTitle')
    const description = get(
      this,
      'props.data.site.siteMetadata.blogDescription'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        />
        <Header title={title} />
        <Content posts={posts} />
      </Layout>
    )
  }
}

export default Index

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
