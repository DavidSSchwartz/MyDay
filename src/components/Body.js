import React from 'react';
import InputSection from './InputSection';
import inputData from '../../public/files/inputData';
import ClearAll from './ClearAll';

const Body = () => {
    const smallInputs = inputData.map((data, index) => {
        if (data.type === 'small')
            return <InputSection key={index} data={data}></InputSection>
    });
    const largeInputs = inputData.map((data, index) => {
        if (data.type === 'large')
            return <InputSection key={index} data={data}></InputSection>
    });
    return (
        <div className='w-full'>
            <div>
                <ClearAll />
            </div>
            <div className='flex flex-col flex-wrap h-1/4'>
                {smallInputs}
            </div>
            <div>
                {largeInputs}
            </div>
        </div>
    )
}

export default Body;
