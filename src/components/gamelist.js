import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Game from "./game.js"
import "./gamelist.scss"

const GameList = () => {
    const data = useStaticQuery(graphql`
      {
        allMdx(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: {frontmatter: {tags: {eq: "games"}, published: {eq: true}}}
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
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
        <h2 className="gamelist__title">Games I made</h2>
        <ul>
          {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
            <li>
              <Game key={frontmatter.date}>
                <Link to={fields.slug} className="game__linkBox" title={frontmatter.title}>
                    <p className="game__title">{frontmatter.title}</p>
                    <div className="game__description">
                      <p>{frontmatter.description}</p>
                      <p>{excerpt}</p>
                    </div>
                </Link>
              </Game>
            </li>
          ))}
        </ul>
      </div>
    )
  

}

export default GameList;