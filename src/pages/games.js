import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import GameList from "../components/gamelist"
import Header from "../components/header"
import SEO from "../components/seo"

const GamePage = ({ data }) => {
    return (
        <>
            <SEO></SEO>
            <Header />
            <Layout>
                <GameList></GameList>
            </Layout>
        </>
    )
}


export default GamePage

export const query = graphql
`
    query GAMES_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx (
            sort: { fields: [frontmatter___date], order: DESC }
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
`