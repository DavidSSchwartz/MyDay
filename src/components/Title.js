import React from 'react';

const Title = ( props ) => {
    return (
        <h1 className='text-4xl uppercase font-semibold tracking-widest	text-center'>
            {props.title}
        </h1>
    )
}

export default Title;