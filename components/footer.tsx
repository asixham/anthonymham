"use client"

import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { useEffect, useState } from "react"

export function Footer() {
  const [textMask, setTextMask] = useState<string>("")
  
  // Fixed grid size - same on all screens
  const squareSize = 1.25  // Line width (thin vertical lines)
  const gridGap = 1.5       // Gap between lines
  
  
  const fadeMask = "radial-gradient(ellipse 100% 120% at bottom, white 0%, white 35%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.3) 60%, transparent 85%)"

  useEffect(() => {
    if (typeof window === "undefined") return

    const createTextMask = () => {
      const canvas = document.createElement("canvas")
      const width = 1200
      const height = 150 // Much smaller height, just taller than text
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Clear canvas with transparent
      ctx.clearRect(0, 0, width, height)

      // Fixed font size - same on all screens
      const fontSize = 30
      const lineWidth = 1

      // Draw text with outline for better visibility
      ctx.fillStyle = "white"
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      
      // Add stroke for better definition
      ctx.strokeStyle = "white"
      ctx.lineWidth = lineWidth
      ctx.strokeText("mail@anthonymham.com", width / 2, height / 2)
      ctx.fillText("mail@anthonymham.com", width / 2, height / 2)

      // Convert to data URL for mask
      const dataUrl = canvas.toDataURL()
      setTextMask(`url(${dataUrl})`)
    }

    createTextMask()
  }, [])

  return (
    <div
      className="relative w-full h-[150px] overflow-hidden rounded-lg"
    >
      {/* Background grid with radial fade from center */}
      <FlickeringGrid
        className="absolute inset-0 z-5"
        squareSize={squareSize}
        gridGap={gridGap}
        color="rgb(112, 111, 111)"
        maxOpacity={1}
        flickerChance={0.5}
        height={150}
        style={{
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
        }}
      />
      {/* Text grid - darker, higher opacity */}
      <FlickeringGrid
        className="absolute inset-0 z-10"
        squareSize={squareSize}
        gridGap={gridGap}
        maxOpacity={4.8}
        flickerChance={0.9}
        color="rgb(0, 0, 0)"
        height={450}
        style={{
          maskImage: textMask,
          WebkitMaskImage: textMask,
          maskSize: "1200px 150px",
          WebkitMaskSize: "1200px 150px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  )
}
