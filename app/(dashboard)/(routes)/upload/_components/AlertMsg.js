import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMsg({msg}) {
  return (
    <div>
      <AlertCircle/>
      {msg}
    </div>
  )
}

export default AlertMsg
