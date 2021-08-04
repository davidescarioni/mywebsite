import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="page">
      {children}
    </div>
  )
}