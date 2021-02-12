import React, { useState } from 'react'
import './Timer.css'
import TimerButton from '../components/TimerButton'

// Timer Functions
const startTimer = () => {
  console.log('Starting timer.')
}

const stopTimer = () => {
  console.log('Stopping timer.')
}

const resetTimer = () => {
  console.log('Resetting timer.')
}

// Timer Component
const Timer = () => {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isOn, setIsOn] = useState(false)

  return (
    <div className='timer-container'>
      <div className='time-display'></div>
      <div className='timer-button-container'>
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  )
}

export default Timer
