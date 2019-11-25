import React from 'react'
import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

const Video = props => {
  const { videoId, title } = props

  return (
    <VideoStyle>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          title={title}
          src={`https://player.vimeo.com/video/${videoId}?color=c5c5c5&title=0&byline=0&portrait=0`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </VideoStyle>
  )
}

const VideoStyle = styled.div`
  margin-bottom: ${space[8]};

  ${mediaQuery.BREAKPOINT_2`
    margin-bottom: ${space[0]};
  `};
`

export default Video
