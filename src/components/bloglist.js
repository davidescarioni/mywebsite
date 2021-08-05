import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Game from "./game.js"
import "./gamelist.scss"

const BlogList = () => {
    const data = useStaticQuery(graphql`
      {
        allMdx(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: {frontmatter: {tags: {eq: "news"}, published: {eq: true}}}
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              image
              description
              url
            }
            fields {
              slug
            }
          }
        }
      }
    `)

    return (
      <div className="gamelist">
        <h2 className="gamelist__title">Blog</h2>
        <ul>
          {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
            <li>
              <Game key={frontmatter.date}>
                <Link to={fields.slug} className="game__linkBox">
                  <p className="game__title">{frontmatter.title}</p>
                  <div className="game__description">
                    <p>{frontmatter.description}</p>
                    <p>{frontmatter.date}</p>
                  </div>
                </Link>
              </Game>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default BlogList;