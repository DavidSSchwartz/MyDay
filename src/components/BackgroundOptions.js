import React, { useContext } from 'react';
import { BackgroundContext } from './Layout';

function importAll(r) {
    return r.keys().map(r);
  }

const images = importAll(require.context('../../public/assets', false, /\.(png|jpe?g|svg)$/));
const imageNames = [
    'blue',
    'brown-paper',
    'clouds',
    'mountain-valley',
    'ocean',
    'starry-sky',
    'white-texture',
    'wood'
];
const BackgroundOptions = () => {
    const setBackgroundImage = useContext(BackgroundContext);
    const backgroundIcons = images.map((image,key)=> {
                                return (
                                    <button key={key} onClick={() => setBackgroundImage(imageNames[key])}>
                                        <img className='h-14 w-14' src={image.default} title={imageNames[key]}/>
                                    </button>
                                )
                            })
    return (
        <div className='flex gap-4 flex-wrap justify-center p-4 w-40 '>
            <button className='h-14 w-14 bg-white shadow' onClick={() => setBackgroundImage('')} title='none'></button>
            {backgroundIcons}
        </div>
    )
}

export default BackgroundOptions;