import React, { useState, useEffect } from 'react';
import useStateWithLocalStorage from '../helpers/state-helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputSection = ( props )  => {
    const data = props.data
    const storageKey = data.title ? data.title : data.subtitle;

    const [ value, setValue ] = useStateWithLocalStorage(
        storageKey
    );

    const handleChange = ev => setValue(ev.target.value);

    const Input = (data.type === 'small' ?
                        <input className='w-full' type='text' value={value} onChange = {handleChange}></input> :
                        <textarea value={value} onChange = {handleChange}></textarea>
                    );
    const deleteEntry = () => setValue('');
    return (
        <div className='flex flex-col'>
            <label>
                {data.title}
            </label>
            <div className='relative'>
                {Input}
                <button className='absolute -right-0' onClick={deleteEntry}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </button>
            </div>
        </div>
    )
}

export default InputSection;
