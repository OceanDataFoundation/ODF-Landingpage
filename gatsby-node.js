const path = require(`path`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create news posts list
  // ----------------------------------------------------------------------------
  const PAGE_SIZE = 10
  const newsListTemplate = path.resolve(`./src/templates/press-releases-list.js`)
  const newsPostTemplate = path.resolve(`./src/templates/press-release.js`)

  const pressReleasePages = new Promise((resolve, reject) => {
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
            path: `/news/press/${index + 1}`,
            component: newsListTemplate,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/news/press/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/news/press/${index}`,
            },
          })
        })

        // Create a blog page
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
          createPage({
            path: `news/press/${node.slug}`,
            component: newsPostTemplate,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })

  // Create News article list
  // ----------------------------------------------------------------------------
  const newsList = path.resolve(`./src/templates/NewsList.jsx`)
  const newsArticle = path.resolve(
    `./src/templates/NewsArticle.jsx`
  )

  const newsPages = new Promise((resolve, reject) => {
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
            path: `news/${index + 1}`,
            component: newsList,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              pageAmount: chunks,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/news/${index + 2}`,
              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/news/${index}`,
            },
          })
        })

        // Create an article page
        result.data.posts.edges.forEach(({ node: { slug } }) => {
          // loop over split pages
          createPage({
            path: `news/${slug}`,
            component: newsArticle,
            context: {
              slug,
            },
          })
        })
      })
    )
  })

  return { pressReleasePages, newsPages }
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
    type ContentfulStatement implements Node {
      reverseOrder: Boolean
    }
    type allContentfulPersonList implements Node {
      textBlocks: [ContentfulTextBlock] @link(by: "id", from: "textBlocks___NODE")
    }
  `
	createTypes(typeDefs)
}















