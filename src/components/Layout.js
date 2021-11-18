import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
        <main className='lg:container mx-auto flex justify-center my-16 font-body'>
            <div className='flex flex-col items-center p-8 bg-oldlace text-purp sm:w-8/12 h-full'>
                {children}
            </div>
        </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout;