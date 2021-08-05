import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import BlogList from "../components/bloglist"
import Header from "../components/header"

const Blog = ({ data }) => {
    return (
        <>
            <Header />
            <Layout>
                <BlogList></BlogList>
            </Layout>
        </>
    )
}


export default Blog

export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx (
            sort: { fields: [frontmatter___date], order: DESC }
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