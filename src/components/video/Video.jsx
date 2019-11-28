import React from 'react'
import styled from 'styled-components'
import Vimeo from '@u-wave/react-vimeo'

const Video = props => {
  const { videoId } = props

  return (
    <VideoStyle>
      <Vimeo
        responsive
        showTitle={false}
        showPortrait={false}
        showByline={false}
        video={videoId}
      />
    </VideoStyle>
  )
}

const VideoStyle = styled.div`
  background-color: black;
`

export default Video
