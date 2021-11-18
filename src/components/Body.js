import React from 'react';
import InputSection from './InputSection';
import inputData from '../../public/files/inputData';
import ClearAll from './ClearAll';
import InputsContainer from './InputsContainer';

const Body = () => {
    // const smallInputs = inputData.map((data, index) => {
    //     if (data.type === 'small')
    //         return <InputSection key={index} data={data}></InputSection>
    // });
    // const largeInputs = inputData.map((data, index) => {
    //     if (data.type === 'large')
    //         return <InputSection key={index} data={data}></InputSection>
    // });
    // const allInputs = [smallInputs, largeInputs];
    // const displayedInputs = allInputs.map((inputs, index) => {
    //     return (
    //     <div className={`grid-cols-2 grid-rows-3 grid-flow-col gap-x-4' ${inputs[0]?.props.data === 'large' ? 'pt-4 md:grid' : 'grid'}`}>
    //         {/* <div key={index} className={`grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4`}> */}
              
    //             {inputs}
    //         </div>
    //     )
    // });
    return (
        <div className='w-full pt-4'>
            <div className='text-right'>
                <ClearAll />
            </div>
            <InputsContainer />
            {/* <div className='grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4'>
                {smallInputs}
            </div>
            <div className='pt-4 md:grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-4'>
                {largeInputs}
            </div> */}
        </div>
    )
}

export default Body;
