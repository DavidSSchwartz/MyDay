import React from 'react';

const LargeInputsContainer = ({ inputs }) => {
    
    return (
        <div className='pt-4 md:grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4'>
            {inputs}
        </div>
    )
}

export default LargeInputsContainer;