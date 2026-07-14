//import React from 'react'
import type { ComponentProps } from "react";

type ButtonProps = {
    // text: string,
    //children : ReactNode,
    variant : ""
}& ComponentProps<"button">
function Button ({/* children, */ ...props}:ButtonProps,)  { //{ text } :ButtonProps
  return (
    <button {...props} className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-3 py-1 disabled:cursor-not-allowed disabled:opacity-30"/>/* {children}</button> */
  )
}

export default Button;