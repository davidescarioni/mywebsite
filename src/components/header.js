import React from "react"
import "./header.css"
import { Link, graphql, useStaticQuery } from 'gatsby'
import SiteNavigation from "./sitenavigation";

export default function Header() {
  const { site } = useStaticQuery(
    graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
  `
  );

  return (
    <div className="header">
      <h1>
        <Link to="/">{site.siteMetadata.title}</Link></h1>
        <SiteNavigation />
    </div>
  )
}