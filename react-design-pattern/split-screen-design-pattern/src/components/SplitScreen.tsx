import React, { type ReactNode } from 'react'

interface SplitScreenProps{
  children: [ReactNode, ReactNode];
  leftWidth: number,
  rightWidth: number,
}
const SplitScreen = ({children, leftWidth, rightWidth}: SplitScreenProps) => {
  const [left, right] = children;//destructor the children element and assign in to variable
  console.log(leftWidth);
  return (
    <div className='flex'>
      <div style={{width: `${leftWidth}%`}}>{left}</div>
      <div style={{width: `${rightWidth}%`}}>{right}</div>
    </div>
  )
}

export default SplitScreen