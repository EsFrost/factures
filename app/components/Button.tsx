import React from 'react'

interface ButtonProps {
  text: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <div className={`w-auto bg-red-500 py-2 px-4 rounded text-white hover:bg-red-400 cursor-pointer ${className}`} onClick={onClick}>{text}</div>
  )
}

export default Button