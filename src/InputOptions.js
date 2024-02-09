import React from 'react'
import './InputOptions.css'
import { Icon } from '@mui/material'

function InputOptions({Icon,title,color}) {
  return (
    <div className='InputOption'>
      <Icon style={{color:color}}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOptions
