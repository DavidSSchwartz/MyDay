import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const BackgroundContext = React.createContext();

const Layout = ({ children }) => {
    const [backgroundImageName, setBackgroundImageName] = useState('');

    return (
        <>
            <BackgroundContext.Provider value={setBackgroundImageName}>
                <div className={`grid grid-cols-main bg-center bg-${backgroundImageName}`}>
                    {children}
                </div>
            </BackgroundContext.Provider>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout;