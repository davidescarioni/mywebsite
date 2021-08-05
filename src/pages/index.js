import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import GameList from "../components/gamelist" 
import StuffList from "../components/stufflist"
import BlogList from "../components/bloglist"
import Intro from "../components/intro"
import "../components/index.css"
import "@fontsource/open-sans" // Defaults to weight 400.

const HomePage = ({ data }) => { 
    return (
        <>
            <Layout>
                <Intro />
                <hr></hr>
                <GameList></GameList>
                <hr></hr>
                <StuffList></StuffList>
                <hr></hr>
                <BlogList></BlogList>
                <hr></hr>
            </Layout>
        </>
    )
}

export default HomePage

export const query = graphql
`
    query LAST_QUERY {
        allMdx(
        limit:1
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {tags: {eq: "news"}, published: {eq: true}}}
        ) {
        nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
            title
            date
            }
            fields {
            slug
            }
        }
        }
    }
`