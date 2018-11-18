import React from 'react'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const { header } = this.props

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
