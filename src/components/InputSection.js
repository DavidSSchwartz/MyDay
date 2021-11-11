import React, { useState, useEffect } from 'react';
import useStateWithLocalStorage from '../helpers/state-helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const InputSection = ( props )  => {
    const data = props.data
    const storageKey = data.title ? data.title : data.subtitle;

    const [ displayCancel, setDisplayCancel ] = useState(false);
    const [ value, setValue ] = useStateWithLocalStorage(
        storageKey
    );

    const handleChange = ev => setValue(ev.target.value);

    const Input = (data.type === 'small' ?
                        <input className='w-full bg-wheat rounded-xl py-2 px-3.5' type='text' value={value} onChange = {handleChange}></input> :
                        <textarea className='w-full border-4 border-wheat bg-oldlace rounded-xl py-2 px-3.5' value={value} onChange = {handleChange}></textarea>
                    );
    const deleteEntry = () => setValue('');

    const handleMouseOver = () => {
        setDisplayCancel(true);
    }

    const handleMouseOut = () => {
        setDisplayCancel(false);
    }

    return (
        <div className='flex flex-col pt-4'>
            <label className='h-6'>
                {data.title}
            </label>
            <div className='relative'>
                {Input}
                {   
                    value
                    &&
                    <button className='absolute -right-0 px-1.5 inset-y-0 leading-zero rounded-r-xl' onClick={deleteEntry}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button> 
                }
            </div>
        </div>
    )
}

export default InputSection;
// display: grid;
// grid-auto-flow: column;
// grid-template-columns: 1fr 1fr;
// grid-template-rows: 1fr 1fr 1fr;
// column-gap: 1
// rem
// ;
// row-gap: 1
// rem;