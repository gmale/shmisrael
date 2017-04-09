import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import heartSvg from "../icons/circle-icons-heart.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to={ "/" }
        >
          { "Home" }
        </Link>
        <Link
          className={ styles.link }
          to={ "/about" }
        >
          { "About" }
        </Link>
        <Link
          className={ styles.link }
          to={ "/itinerary" }
        >
          { "Itinerary" }
        </Link>
        <Link
          className={ styles.link }
          to={ "/package" }
        >
          { "Package" }
        </Link>
        <Link
          className={ styles.link }
          to={ "/register" }
        >
          { "Register" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://secure.shmministry.com` }
            className={ styles.link }
          >
            <Svg svg={ heartSvg } cleanup />
            { "Shepherd's Heart Ministry" }
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
