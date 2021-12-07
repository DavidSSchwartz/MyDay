import React, { useContext } from 'react';
import { ColorPaletteContext } from '../Layout';

const ColorPalettes = () => {
    const colorPaletteContext = useContext(ColorPaletteContext);
    const palettes = [
        [
            'oldlace',
            'purp',
            'wheat'
        ],
        [
            'darkblue',
            'pink',
            'lightblue'
        ],
    ]

    const displayPalettes = palettes.map((palette, key) => {
        const paletteObject = {
                                background: palette[0], 
                                text: palette[1], 
                                inputBg: palette[2]
                            }
        return (
            <button
                className='p-4 w-40 flex justify-center'
                key={key} 
                onClick={()=> colorPaletteContext.setColorPalette(JSON.stringify(paletteObject))}
            >
                {palette.map((color, key) => {
                    return (
                        <span 
                            key={key} 
                            className={`h-8 w-8 bg-${color}`}
                        >
                        </span>
                    )
                })}
            </button>
        )
    })

    return (
        <div>
            {displayPalettes}
        </div>
    )
}

export default ColorPalettes;
