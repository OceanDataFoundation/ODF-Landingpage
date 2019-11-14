const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsPost = path.resolve(`./src/templates/news-post.js`)
  const result = await graphql(
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

  if (result.errors) {
    throw result.errors
  }

  // Create news pages.
  const news = result.data.allContentfulNews.edges

  news.forEach((post, index) => {
    const previous = index === news.length - 1 ? null : news[index + 1].node
    const next = index === 0 ? null : news[index - 1].node

    createPage({
      path: post.node.slug,
      component: newsPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
