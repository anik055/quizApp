import React from 'react'
import load from '../../../images/loading.gif'

import './index.css'

export default function Loading() {
  return (
    <div className='loading'>
        <img src={load} alt="" />
    </div>
  )
}
