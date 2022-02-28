import React from 'react'

function SubPage(props)
{
    return(
        <div>
            <button onClick = {() =>props.mainHandler('calling from sub')}>Button to view Main</button>
            {/* <button>Button to view Main</button> */}
        </div>
    )
}

export default SubPage

