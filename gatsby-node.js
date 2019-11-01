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

  // Create news posts pages.
  const posts = result.data.allContentfulNews.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

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
