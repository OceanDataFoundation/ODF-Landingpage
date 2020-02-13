const path = require(`path`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create news posts list
  // ----------------------------------------------------------------------------
  const PAGE_SIZE = 10
  const newsListTemplate = path.resolve(`./src/templates/news-list.js`)
  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allContentfulNews(
              sort: { order: DESC, fields: [createdAt] }
            ) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Break the entries into chunks according to
        let chunks = _.chunk(result.data.posts.edges, PAGE_SIZE)

        // For each of the chunks, call createPage()
        chunks.forEach((chunk, index) => {
          createPage({
            path: `news/page/${index + 1}`,
            component: newsListTemplate,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/news/page/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/news/page/${index}`,
            },
          })
        })

        // Create a blog page
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
          createPage({
            path: `news/${node.slug}`,
            component: newsPostTemplate,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
