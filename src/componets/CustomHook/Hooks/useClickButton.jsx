import { useState } from "react";
const useClickButton = () => {
    const [isVisible , setIsVisible] =useState(false);

    const toggle =  () => {
        setIsVisible(!isVisible)
    }

    return [isVisible , toggle]

}
 
export default useClickButton;