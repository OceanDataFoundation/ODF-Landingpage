import React from 'react'
import PropTypes from 'prop-types'

const Time = props => {
  const { dateTime } = props

  return (
    <time dateTime={new Date(Date.parse(dateTime)).toISOString().split('T')[0]}>
      {dateTime}
    </time>
  )
}

Time.propTypes = {
  dateTime: PropTypes.string,
}

export default Time
