import React from "react";
import Slider from 'react-slider'



function RangeSliderArea({MIN_AREA, MAX_AREA, valuesArea, setValuesArea}) {

    const Thumb = (props, state) => (
        <div {...props} className="w-5 -top-2 h-5 cursor-pointer rounded-full bg-sky-400 flex items-center justify-center">
            <h1 className="absolute top-6 bg-sky-500 text-white rounded-md px-1">{state.valueNow}</h1>
        </div>
    );

    return (
        <div className='px-6 flex'>
            <Slider
                className="w-full h-1 bg-gray-400 mt-5"
                onChange={setValuesArea}
                value={valuesArea}
                min={MIN_AREA}
                max={MAX_AREA}
                renderThumb={Thumb}
            />
        </div>
    );
}

export default RangeSliderArea;
