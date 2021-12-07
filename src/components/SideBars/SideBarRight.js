import React from 'react';
import SideBarSection from './SideBarSection';
import BackgroundOptions from './BackgroundOptions';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import ColorPalettes from './ColorPalettes';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const SideBarRight = () => {

    return (
        <>
            <div className='h-0 z-20'>
                <SideBarSection 
                    placementStyles={'top-20'}
                    icon={faImages}
                    tooltip={'Choose background'}
                    content={<BackgroundOptions />}
                />
            </div>
            <div className='z-10'>
                <SideBarSection
                    placementStyles={'top-40'}
                    icon={faPalette}
                    tooltip={'Choose color palette'}
                    content={<ColorPalettes />}
                />
            </div>
        </>
    )
}

export default SideBarRight;
