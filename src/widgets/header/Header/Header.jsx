import React from 'react'

const now = new Date()
function Header() {
  return (
    <header>
      <span>Time: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header
