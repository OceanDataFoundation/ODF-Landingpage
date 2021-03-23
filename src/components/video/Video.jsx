import Vimeo from '@u-wave/react-vimeo'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
  grid-column: 1 / -1 ;
`

Video.propTypes = {
  videoId: PropTypes.string
}

export default Video
