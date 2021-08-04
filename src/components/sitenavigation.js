import React from "react"
import "./sitenavigation.css"
import { Link } from 'gatsby'

export default function SiteNavigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <Link to="/blog" activeClassName="active">Blog</Link>
      </li>
      <li className="nav__item">
        <Link to="/games" activeClassName="active">Games</Link>
      </li>
    </ul>
  )
}