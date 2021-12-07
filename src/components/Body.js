import React, { useContext } from 'react';
import ClearAll from './ClearAll';
import InputsContainer from './Inputs/InputsContainer';
import Title from './Title';
import { ColorPaletteContext } from './Layout';

const Body = () => {
    const CPContext = useContext(ColorPaletteContext);
    const palette = JSON.parse(CPContext.colorPalette);
    return (
        <div className='container mx-auto flex justify-center my-16 font-body'>
            <div className={`flex flex-col items-center p-8 bg-${palette.background} text-${palette.text} sm:w-8/12 h-full`}>
                
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
