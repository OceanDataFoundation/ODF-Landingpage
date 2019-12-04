const path = require(`path`)
const slash = require(`slash`)
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // =============================
  // Create news posts
  // =============================

  const newsPostTemplate = path.resolve(`./src/templates/news-post.js`)
  const newsResult = await graphql(
    `
      {
        allContentfulNews {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `
  )

  if (newsResult.errors) {
    throw newsResult.errors
  }

  // Create news posts pages.
  const news = newsResult.data.allContentfulNews.edges

  news.forEach((post, index) => {
    const previous = index === news.length - 1 ? null : news[index + 1].node
    const next = index === 0 ? null : news[index - 1].node

    createPage({
      path: `news/${post.node.slug}`,
      component: slash(newsPostTemplate),
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  // Create news posts list
  // ----------------------------------------------------------------------------
  const PAGE_SIZE = 1
  const newsListTemplate = path.resolve(`./src/templates/news-list.js`)
  const newsPostTemplateTest = path.resolve(
    `./src/templates/news-post-list-test.js`
  )

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allContentfulTest(
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
            path: `blog/page/${index + 1}`,
            component: newsListTemplate,
            context: {
              skip: PAGE_SIZE * index,
              limit: PAGE_SIZE,
              pageNumber: index + 1,
              hasNextPage: index != chunks.length - 1,
              nextPageLink: `/blog/page/${index + 2}`,

              hasPrevPage: index != chunks.length + 1,
              prevPageLink: `/blog/page/${index}`,
            },
          })
        })

        // Create a blog page
        result.data.posts.edges.forEach(({ node }) => {
          // loop over split pages
          createPage({
            path: `blog/${node.slug}`,
            component: newsPostTemplateTest,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
