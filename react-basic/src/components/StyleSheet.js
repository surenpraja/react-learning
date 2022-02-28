import React from "react";
import "./StyleCSS.css"

function StyleSheet(props)
{
    let classValue = props.mystyle ? 'primary' : ''
    return(
        <div>
            <h1  className={`${classValue} font-xl`}>StyleSheet</h1>
        </div>
        )
}
export default StyleSheet;