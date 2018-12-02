import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout>
      <Link to='/blog/'>
        Blog
      </Link>
    </Layout>
  )
}

export default Index
