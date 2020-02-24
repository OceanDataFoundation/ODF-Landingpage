import React from 'react'

import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const renderOptions = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img
          src={`${node.data.target.fields.file['en-US'].url}?w=1200&q=80`}
          alt={node.data.target.fields.title['en-US']}
        />
      )
    },
  },
}

export default ({ richTextJson }) =>
  documentToReactComponents(richTextJson, renderOptions)
