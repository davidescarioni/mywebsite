import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from './layout'
import Header from './header'
import "./post.scss"


export default function postPage({ data }) {
    const { frontmatter, body } = data.mdx
    return (
        <>
            <Header />
            <Layout>
                <h1 className="post__title">{frontmatter.title}</h1>
                <p className="post__date">{frontmatter.date}</p>
                <hr></hr>
                <div className="post__text">  
                    <MDXRenderer className="post__text">{body}</MDXRenderer>
                </div>
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
              date(formatString: "DD MMMM YYYY")
          }
      }
  }
`