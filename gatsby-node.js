const path = require(`path`)
const slash = require(`slash`)

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
}
