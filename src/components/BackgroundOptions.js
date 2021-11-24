import React from 'react';
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));
const BackgroundOptions = () => {
    const backgroundIcons = images.map((image,key)=> {
                                return <img className='h-14 w-14' key={key} src={image.default}/>
                            })
    return (
        <div className='flex gap-4 flex-wrap justify-center p-4 w-40 '>
            {backgroundIcons}
        </div>
    )
}

export default BackgroundOptions;