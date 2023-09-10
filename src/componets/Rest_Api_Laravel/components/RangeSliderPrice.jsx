import React from "react";
import Slider from 'react-slider'


function RangeSliderPrice({MIN_PRICE, MAX_PRICE, valuesPrice, setValuesPrice}) {

    const Thumb = (props, state) => (
        <div {...props} className="w-5 -top-2 h-5 cursor-pointer rounded-full bg-sky-400 flex items-center justify-center">
            <h1 className="absolute top-6 bg-sky-400 text-white rounded-md px-2">{state.valueNow}$</h1>
        </div>
    );

    return (
        <div className='px-6 flex'>
            <Slider
                className="w-full h-1 bg-gray-400 mt-5"
                onChange={setValuesPrice}
                value={valuesPrice}
                min={MIN_PRICE}
                max={MAX_PRICE}
                renderThumb={Thumb}
            />
        </div>
    );
}

export default RangeSliderPrice;
