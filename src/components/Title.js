import React from "react";

const Title = ( props ) => {
    return (
        <h1 className="text-4xl uppercase font-semibold">
            {props.title}
        </h1>
    )
}

export default Title;