import React from 'react'
import './Background.css'

export default function Background() {
  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />
      <div className="bg-scanline" />
    </div>
  )
}
