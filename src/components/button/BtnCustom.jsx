import React from "react"
import "../../styles/component/button/_btnCustom.scss";

export default function BtnCustom({classname, type, onClick, children}) {

    return(
        <button type={type} className={`${classname} btn-custom`} onClick={onClick}>
            <span className="content">{children}</span>
        </button>
    )
}