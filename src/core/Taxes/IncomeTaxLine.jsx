import React from 'react'
import { LinePath } from '@vx/shape'

const DataLine = (data, xScale, yScale, x, y, stroke, curveBasis) => {
  const getX = (d) => {
    if (d === undefined) {
      return 0
    }
    return d[x]
  }
  const getY = (d) => {
    if (d === undefined) {
      return 0
    }
    return d[y]
  }

  return (
    <LinePath
      data={data}
      xScale={xScale}
      yScale={yScale}
      x={getX}
      y={getY}
      stroke={stroke}
      strokeWidth={4}
      curve={curveBasis}
    />)
}

export default DataLine
