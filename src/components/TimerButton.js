import React from 'react'
import PropTypes from 'prop-types'

const TimerButton = ({ buttonAction, buttonValue }) => {
  return <div className='button-container'></div>
}

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
}

export default TimerButton
