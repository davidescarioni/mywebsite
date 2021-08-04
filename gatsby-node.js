const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/posts${value}`,
        })
    }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql
    (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/post-page-template.js`),
            context: { id: node.id },
        })
    })
}

exports.onCreateWebpackConfig = function onCreateWebpackConfig({
    actions,
    stage,
    loaders,
  }) {
    if (stage === "develop") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-refresh-webpack-plugin/,
              use: [loaders.js()],
            },
          ],
        },
        // Rimuove il warning di react-hot-loader in develop
        // Grazie a https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-538662592
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
     // Rimuove le source maps dalla build
    // if (stage === 'build-javascript' && (process.env.ACTIVE_ENV && process.env.ACTIVE_ENV !== 'development')) {
    //   console.log('Turning off sourcemaps: ', process.env.ACTIVE_ENV);
    //   // Turn off source maps
    //   actions.setWebpackConfig({
    //     devtool: false,
    //   });
    // }
  }
