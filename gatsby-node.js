const path = require(`path`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create news posts list
  // ----------------------------------------------------------------------------
  const PAGE_SIZE = 10
  const newsListTemplate = path.resolve(`./src/templates/press-releases-list.js`)
  const newsPostTemplate = path.resolve(`./src/templates/press-release.js`)

  const newsPages = new Promise((resolve, reject) => {
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
            path: `/communication/press/${index + 1}`,
            component: newsListTemplate,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/communication/press/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/communication/press/${index}`,
            },
          })
        })

        // Create a blog page
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
          createPage({
            path: `communication/press/${node.slug}`,
            component: newsPostTemplate,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })

  // Create communication article list
  // ----------------------------------------------------------------------------
  const newsList = path.resolve(`./src/templates/perspectives-list.js`)
  const newsArticle = path.resolve(
    `./src/templates/perspectives-article.js`
  )

  const perspectivesPages = new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allContentfulPerspective(
              sort: { order: DESC, fields: [publicationDate] }
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
            path: `communication/news/${index + 1}`,
            component: newsList,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/communication/news/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/communication/news/${index}`,
            },
          })
        })

        // Create an article page
        result.data.posts.edges.forEach(({ node: { slug } }) => {
          // loop over split pages
          createPage({
            path: `communication/news/${slug}`,
            component: newsArticle,
            context: {
              slug,
            },
          })
        })
      })
    )
  })

  return { newsPages, perspectivesPages }
}
