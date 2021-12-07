import React from 'react';
import { Transition } from '@headlessui/react'
import OutsideClickHandler from 'react-outside-click-handler';

const SlideOutBar = ({ transitionMarker, callback, content}) => {
    return (
        <>
            <Transition
                className='absolute right-0 top-0 shadow-lg bg-white'
                show={transitionMarker}
                enter='transform transition duration-200'
                enterFrom='translate-x-full'
                enterTo='-translate-x-0'
                leave='transform transition duration-200'
                leaveFrom='-translate-x-0'
                leaveTo='translate-x-full'
            >
                <OutsideClickHandler
                    onOutsideClick={callback}
                >
                    {content}
                </OutsideClickHandler>
            </Transition>
        </>
    )
}

export default SlideOutBar;