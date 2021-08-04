import React from "react"
import "./game.scss"

export default function Game({ children }) {
  return (
    <div className="game">
      {children}
    </div>
  )
}