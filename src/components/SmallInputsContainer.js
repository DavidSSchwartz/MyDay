import React from 'react';

const SmallInputsContainer = ({ inputs }) => {
    
    return (
        <div className='grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4'>
            {inputs}
        </div>
    )
}

export default SmallInputsContainer;