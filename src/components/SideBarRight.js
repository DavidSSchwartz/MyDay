import React, { useState } from 'react';
import BackgroundOptions from './BackgroundOptions';
import OutsideClickHandler from 'react-outside-click-handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { Transition } from '@headlessui/react'

const SideBarRight = () => {
    const [displayToolTip, setDisplayToolTip] = useState(false);
    const handleClick = () => {
        setDisplayToolTip(!displayToolTip)
    }
    const hideToolTip = () => {
        setDisplayToolTip(false);
    }
    return (
        <div className='fixed right-0 top-20'>
            <div className='relative'>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-sm' 
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faImages} />
                </button>
                <Transition
                    className='absolute right-0 top-0 shadow-lg bg-white'
                    show={displayToolTip}
                    enter='transform transition duration-200'
                    enterFrom='translate-x-full'
                    enterTo='-translate-x-0'
                    leave='transform transition duration-200'
                    leaveFrom='-translate-x-0'
                    leaveTo='translate-x-full'
                >
                    <OutsideClickHandler
                        onOutsideClick={hideToolTip}
                    >
                        <BackgroundOptions />
                    </OutsideClickHandler>
                </Transition>
            </div>
        </div>
    )
}

export default SideBarRight;
