import React from "react"

export default function CardPrimary({classname, children}) {
    return (
        <div className={`${classname} card-primary rounded-t-[8px] shadow-md border-t-[8px] border-green-base`}>
            {children}                        
        </div>
    )
}