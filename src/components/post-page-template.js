import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from './layout'
import Header from './header'


export default function postPage({ data }) {
    const { frontmatter, body } = data.mdx
    return (
        <>
            <Header />
            <Layout>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <hr></hr>
                <MDXRenderer>{body}</MDXRenderer>
            </Layout>
        </>
    )
}

export const query = graphql
`
  query PostsByID($id: String!) {
      mdx(
        id: { eq: $id }
      ){
          body
          frontmatter {
              title
              date(formatString: "DD MM YYYY")
          }
      }
  }
`