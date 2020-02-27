import React from 'react'

import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const renderOptions = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img
          src={`${node.data.target.fields.file['en-US'].url}?w=1200&q=60`}
          alt={node.data.target.fields.title['en-US']}
        />
      )
    },
    // eslint-disable-next-line react/display-name
    [INLINES.HYPERLINK]: node => {
      return (
        <OutboundLink
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer">
          {node.content[0].value}
        </OutboundLink>
      )
    },
  },
}

export default ({ richTextJson }) =>
  documentToReactComponents(richTextJson, renderOptions)
