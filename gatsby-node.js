const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // =============================
  // Create top level pages
  // =============================

  // Query for page nodes
  const pageResult = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              id
              title
              slug
              content {
                content
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (pageResult.errors) {
    throw pageResult.errors
  }

  // Create pages for each page in Contentful
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  const pages = pageResult.data.allContentfulPage.edges

  pages.forEach(({ node }) => {
    const path = node.slug

    createPage({
      path: path,
      component: pageTemplate,
      context: {
        path,
      },
    })
  })

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
      path: post.node.slug,
      component: slash(newsPostTemplate),
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
