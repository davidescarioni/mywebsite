import React from "react"
import "./header.scss"
import { Link } from 'gatsby'
// import { graphql, useStaticQuery } from 'gatsby'
import SiteNavigation from "./sitenavigation";

export default function Header() {
  // const { site } = useStaticQuery(
  //   graphql`
  //   query {
  //       site {
  //           siteMetadata {
  //               title
  //               description
  //           }
  //       }
  //   }
  // `
  // );

  return (
    <div className="header">
      <h1>
        <Link to="/">Davide <span>Scario</span>ni</Link></h1>
        <SiteNavigation />
    </div>
  )
}