import React, { useContext } from 'react';
import useStateWithLocalStorage from '../../helpers/state-helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ColorPaletteContext } from '../Layout';

const InputSection = ( props )  => {
    const CPContext = useContext(ColorPaletteContext);
    const palette = JSON.parse(CPContext.colorPalette);
    const data = props.data
    const storageKey = data.title ? data.title : data.subtitle;

    const [ value, setValue ] = useStateWithLocalStorage(
        storageKey
    );

    const handleChange = ev => setValue(ev.target.value);

    const Input = (data.type === 'small' ?
                        <input className={`w-full bg-${palette.inputBg} rounded-xl py-2 px-3.5`} type='text' value={value} onChange = {handleChange}></input> :
                        <textarea className={`w-full border-4 border-${palette.inputBg} bg-${palette.background} rounded-xl py-2 px-3.5 h-32`} value={value} onChange = {handleChange}></textarea>
                    );
    const deleteEntry = () => setValue('');

    const xPlacement = data.type === 'small' ? 'right-0 inset-y-0' : 'top-2 right-1.5';

    return (
        <div className='flex flex-col pt-4'>
            <label className='h-6 leading-tight'>
                {data.title}
            </label>
            <div className='relative'>
                {Input}
                {   
                    value
                    &&
                    <button className={`absolute ${xPlacement} px-1.5 leading-zero rounded-r-xl`} onClick={deleteEntry}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button> 
                }
            </div>
        </div>
    )
}

export default InputSection;