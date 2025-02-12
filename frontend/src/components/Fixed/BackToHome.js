import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <nav className="bg-yellow-500 text-white p-4 flex justify-between items-center">
        <Link to="/">
          <button className="btn btn-ghost text-lg">❮ Home</button>
        </Link>
      </nav>
  )
}

export default BackToHome
