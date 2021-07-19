import React, { useState, useEffect } from 'react';
import useStateWithLocalStorage from '../helpers/state-helpers';

const InputSection = ( props )  => {
    const data = props.data
    const storageKey = data.title ? data.title : data.subtitle;

    const [ value, setValue ] = useStateWithLocalStorage(
        storageKey
    );

    const handleChange = ev => setValue(ev.target.value);

    const Input = (data.type === 'small' ?
                        <input type='text' value={value} onChange = {handleChange}></input> :
                        <textarea value={value} onChange = {handleChange}></textarea>
                    );

    return (
        <div>
            <label>
                {data.title}
            </label>
            {Input}
            <span>
                
            </span>
        </div>
    )
}

export default InputSection;