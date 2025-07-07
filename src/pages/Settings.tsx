import React from 'react'
import { Link } from 'react-router-dom'

const Settings: React.FC = () => {
  return (
    <div>
      <h1>⚙️ Settings</h1>
      <p>Here you can put preferences, themes, and more later!</p>
      <Link to="/">← Back to Dashboard</Link>
    </div>
  )
}

export default Settings