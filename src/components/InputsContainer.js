import React from 'react';
import InputSection from './InputSection';
import inputData from '../../public/files/inputData';
import LargeInputsContainer from './LargeInputsContainer';
import SmallInputsContainer from './SmallInputsContainer';

const InputsContainer = () => {
    const uncontainedInputs = inputData.map((data, index) => {
        return <InputSection key={index} data={data}></InputSection>
    });

    const sortedInputs = () => {
        let internalArray = [];
        for (var i = 0; i < uncontainedInputs.length; i++) {

            let previousInput = uncontainedInputs[i-1];

            if (previousInput) {
                let previousInputType = previousInput.props.data.type;
                let currentInputType = uncontainedInputs[i].props.data.type

                let shouldCreateNewArrayEntry = previousInputType !== currentInputType;
                if (shouldCreateNewArrayEntry)
                    internalArray[internalArray.length] = {type: uncontainedInputs[i].props.data.type, values: []};
            }
            else
                internalArray[internalArray.length] = {type: uncontainedInputs[i].props.data.type, values: []};
            
            internalArray[internalArray.length-1].values.push(uncontainedInputs[i]);
        }
        return internalArray;
    }
    const ContainedInputs = () => {
        return sortedInputs().map((inputs, key) => {
            if (inputs.type === 'small')
                return <SmallInputsContainer inputs={inputs.values} key={key}/>
            else if (inputs.type === 'large')
                return <LargeInputsContainer inputs={inputs.values} key={key}/>
        });
    }

    return (
        <div>
            <ContainedInputs />
        </div>
    )
}

export default InputsContainer;
