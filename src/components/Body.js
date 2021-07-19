import React from 'react';
import InputSection from './InputSection';
import inputData from '../../public/files/inputData';

const Body = () => {
    const smallInputs = inputData.map((data, index) => <InputSection key={index} data={data}></InputSection>);

    return (
        <div>
            {smallInputs}
        </div>
    )
}

export default Body;