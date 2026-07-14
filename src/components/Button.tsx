//import React from 'react'
import type { ReactNode } from "react";

type ButtonProps = {
    // text: string,
    children : ReactNode,
}
function Button ({children}:ButtonProps)  { //{ text } :ButtonProps
  return (
    <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-3 py-1 disabled:cursor-not-allowed">{children}</button>
  )
}

export default Button;