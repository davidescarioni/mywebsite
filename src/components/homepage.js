import React from "react"
import "./homepage.css"
import Card from "../components/card"

export default function HomePage({ children }) {
  return (
    <div className="homepage">
      <Card>Latest from Blog</Card>
      <Card>Latest from Projects</Card>
      <Card>Latest from Games</Card>
    </div>
  )
}