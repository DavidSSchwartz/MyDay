import React from 'react';
import InputSection from './InputSection';
import inputData from '../../public/files/inputData';
import ClearAll from './ClearAll';

const Body = () => {
    const smallInputs = inputData.map((data, index) => <InputSection key={index} data={data}></InputSection>);

    return (
        <div>
            <div>
                <ClearAll />
            </div>
            {smallInputs}
        </div>
    )
}

export default Body;
