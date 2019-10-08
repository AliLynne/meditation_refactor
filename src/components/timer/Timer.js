import React from 'react'

const Timer = () => {

  const startTimer = () => {
    console.log('Start Timer!')
  }

  const pauseTimer = () => {
    console.log('Pause Timer!')
  }

  const saveData = () => {
    console.log('Save Data!')
  }
  return (
    <div>
      <h3>00:00:00</h3>
      <button className='button-start' onClick={startTimer}>Start</button>
      <button className='button-pause' onClick={pauseTimer}>Pause</button>
      <button className='button-save' onClick={saveData}>Save</button>
    </div>
  )
}

export default Timer
