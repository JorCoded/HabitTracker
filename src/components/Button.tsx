//import React from 'react'
import type { ComponentProps } from "react";

type Variant = "primary"|"secondary"|"ghost-destructive";
type ButtonProps = {
    // text: string,
    //children : ReactNode,
    variant? : Variant
}& ComponentProps<"button">
function Button ({/* children, */ variant="primary", ...props}:ButtonProps,)  { //{ text } :ButtonProps
  return (
    <button {...props} className={`${getVariantStyle(variant)} transition-colors rounded px-3 py-1 disabled:cursor-not-allowed disabled:opacity-30`}/>/* {children}</button> */
  )
}

function getVariantStyle(variant: Variant){
    let style:string = "";

    switch (variant) {
        case "primary":
            style = "bg-violet-600 hover:bg-violet-500";
            break;
        case "secondary":
            style = "bg-zinc-700 hover:bg-violet-600";
            break
        case "ghost-destructive":
            style = "hover:bg-red-800 hover:text-red-200 text-red-800";
            break
        default:
            throw new Error(`Invalid variant: ${variant satisfies never}`);
    }
}

export default Button;