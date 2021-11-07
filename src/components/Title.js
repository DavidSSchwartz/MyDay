import React from "react";

const Title = ( props ) => {
    return (
        <h1 className="text-5xl uppercase">
            {props.title}
        </h1>
    )
}

export default Title;