import React, { useState } from 'react';
import SideTagIcon from './SideTagIcon';
import SlideOutBar from './SlideOutBar';

const SideBarSection = ({ placementStyles, icon, tooltip, content }) => {
    const [displaySideBar, setDisplaySideBar] = useState(false);
    const handleClick = () => {
        setDisplaySideBar(true)
    }
    const hideToolTip = () => {
        setDisplaySideBar(false);
    }
    return (
        <div className={`fixed right-0 ${placementStyles}`}>
            <div className='relative'>
                <SideTagIcon 
                    icon={icon}
                    tooltip={tooltip}
                    callback={handleClick}

                />
                <SlideOutBar
                    transitionMarker={displaySideBar}
                    callback={hideToolTip}
                    content={content}
                />
            </div>
        </div>
    )
}

export default SideBarSection;
