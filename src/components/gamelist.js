import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
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
    console.log(data);
    return (
      <div className="gamelist">
        <h2 className="gamelist__title">Games that I made</h2>
        <ul>
          {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
            <li>
              <Game key={frontmatter.date}>
                <a className="game__linkBox" href={frontmatter.url} title={`${frontmatter.title} Download`}>
                    <p className="game__title">{frontmatter.title}</p>
                    <div className="game__description">
                      <p>{frontmatter.description}</p>
                      <p>{excerpt}</p>
                    </div>
                </a>
              </Game>
            </li>
          ))}
        </ul>
      </div>
    )
  

}

export default GameList;