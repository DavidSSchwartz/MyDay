import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useStateWithLocalStorage from '../helpers/state-helpers';

export const BackgroundContext = React.createContext();
export const ColorPaletteContext = React.createContext();

const Layout = ({ children }) => {
    const backgroundStorageKey = 'BackgroundImageName';
    const [backgroundImageName, setBackgroundImageName] = useStateWithLocalStorage(
        backgroundStorageKey
    );

    const paletteStorageKey = 'SelectedColorPalette'
    const initialPalette = {
        background: 'oldlace', 
        text: 'purp', 
        inputBg: 'wheat'
    };
    const [colorPalette, setColorPalette] = useStateWithLocalStorage(
        paletteStorageKey,
        JSON.stringify(initialPalette)
    );


    return (
        <>
            <BackgroundContext.Provider value={setBackgroundImageName}>
                <ColorPaletteContext.Provider value={{colorPalette, setColorPalette}}>
                    <div className={`grid grid-cols-main bg-center bg-${backgroundImageName}`}>
                        {children}
                    </div>
                </ColorPaletteContext.Provider>
            </BackgroundContext.Provider>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout;