const path = require(`path`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create news posts list
  // ----------------------------------------------------------------------------
  const PAGE_SIZE = 10
  const newsListTemplate = path.resolve(`./src/templates/news-list.js`)
  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)

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

  // Create perspectives article list
  // ----------------------------------------------------------------------------
  const perspectivesList = path.resolve(`./src/templates/perspectives-list.js`)
  const perspectiveArticle = path.resolve(
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
            path: `perspectives/${index + 1}`,
            component: perspectivesList,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/perspectives/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/perspectives/${index}`,
            },
          })
        })

        // Create an article page
        result.data.posts.edges.forEach(({ node: { slug } }) => {
          // loop over split pages
          createPage({
            path: `perspectives/${slug}`,
            component: perspectiveArticle,
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
