import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideTagIcon = ({ icon, tooltip, callback}) => {
    return (
        <>
            <button 
                className='bg-blue-500 
                            hover:bg-blue-700 
                            text-white 
                            font-bold 
                            py-2 
                            px-4 
                            rounded-l-sm' 
                onClick={callback}
                title={tooltip}
            >
                <FontAwesomeIcon icon={icon} />
            </button>
        </>
    )
}

export default SideTagIcon;
