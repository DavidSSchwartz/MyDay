import React from 'react';

const ClearAll = () => {

    const ClearLocalStorage = () => {
        localStorage.clear();
        location.reload();
    }

    return (
        <button onClick={ClearLocalStorage}>
            Clear All
        </button>
    )
}

export default ClearAll;
