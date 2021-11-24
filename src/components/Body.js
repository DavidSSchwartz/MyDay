import React from 'react';
import ClearAll from './ClearAll';
import InputsContainer from './Inputs/InputsContainer';
import Title from './Title';

const Body = () => {
    return (
        <div className='container mx-auto flex justify-center my-16 font-body'>
            <div className='flex flex-col items-center p-8 bg-oldlace text-purp sm:w-8/12 h-full'>
                
                <Title title="I'm grateful for..."></Title>

                <main className='w-full pt-4'>
                    <div className='text-right'>
                        <ClearAll />
                    </div>
                    <InputsContainer />
                </main>
            </div>
        </div>
    )
}

export default Body;
