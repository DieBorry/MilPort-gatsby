import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`
      }}
    >
      {siteTitle}
    </Link>
    <nav>
    <Link to="/" style={{padding:"1rem"}}>
      home
    </Link>
    <Link to="/vehicleoverview"style={{padding:"1rem"}}>
      vehicle overview
    </Link>
    </nav>
  </header>
)

export default Header
